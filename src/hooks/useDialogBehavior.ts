import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Options for {@link useDialogBehavior}.
 */
export interface UseDialogBehaviorOptions {
  /** Duration of the staged-close animation in ms, before `onClose` fires. */
  closeDuration: number;
  /**
   * Duration of the staged-open animation in ms, before `onOpenSettle` fires
   * and `isOpening` flips back to `false`.
   *
   * Omit entirely if the caller has no open-in animation to stage and
   * doesn't need `onOpenSettle` — an omitted `openDuration` skips the
   * isOpening timer/state machinery altogether (`isOpening` stays `false`,
   * `onOpenSettle` fires synchronously from `open()` if provided), instead
   * of scheduling a timer purely to flip state nothing reads.
   */
  openDuration?: number;
  /** Whether pressing Escape triggers a close. @default true */
  closeOnEscape?: boolean;
  /** Whether a mousedown outside `containerRef` triggers a close. @default true */
  closeOnOutsideClick?: boolean;
  /** Ref-counted `document.body` scroll lock for as long as this dialog is open. @default false */
  lockScroll?: boolean;
  /** Fires once per genuine open, after the open-settle timer completes — the place to move focus into the dialog. */
  onOpenSettle?: () => void;
  /** Fires when the staged close completes. The caller is expected to flip its own `isOpen`/`open` state to false here. */
  onClose: () => void;
  /**
   * Focus-restore behavior after close:
   * - `'if-unclaimed'` (default): only refocus the restore target if focus
   *   didn't already land somewhere else (e.g. the user clicked into another
   *   field) — checked via `document.activeElement` — *and* the most recent
   *   input was a keyboard interaction (see below). A mouse/touch user
   *   already knows where their pointer is; forcing focus back after they
   *   dismissed something with a click is the surprising move, not the
   *   helpful one. A keyboard user has no such spatial anchor, so restoring
   *   focus is what keeps them oriented.
   * - `'always'`: always refocus the restore target, regardless of input
   *   modality. No current caller uses this — it exists as an escape hatch.
   * - `'never'`: never touch focus.
   *
   * Input modality is tracked globally (one `document`-level listener pair,
   * shared across every `useDialogBehavior` instance on the page) the same
   * way native `:focus-visible` does it: any `keydown` marks the current
   * modality as keyboard, any `mousedown`/`touchstart` marks it as pointer.
   */
  restoreFocus?: 'always' | 'if-unclaimed' | 'never';
  /**
   * Overrides what "the restore target" means for `restoreFocus`, in place
   * of the default `document.activeElement` snapshot captured on open.
   *
   * Anchored-popover callers with a stable, known trigger element
   * (DropdownMenu, DatePicker, TabNavigation) should set this to read their
   * trigger ref — a captured-on-open snapshot is unreliable for them
   * specifically because opening is often driven by a click rather than a
   * real focus change (e.g. Testing Library's `fireEvent.click` doesn't
   * move focus the way a real click does, so the snapshot can silently be
   * `document.body` instead of the trigger). Externally-controlled
   * full-overlay callers (Modal, Drawer) should leave this unset — there's
   * no single fixed "trigger" for them, so the activeElement snapshot is
   * the correct semantic.
   *
   * Called lazily at close-settle time, not captured eagerly, so it always
   * reads the ref's current value.
   */
  getRestoreFocusTarget?: () => HTMLElement | null;
}

export interface UseDialogBehaviorResult {
  /** Attach to the full-screen backdrop element, for full-overlay dialogs (Modal/Drawer-style). Anchored popovers don't need this. */
  overlayRef: React.RefObject<HTMLDivElement | null>;
  /** Attach to the panel/menu/calendar root. Anchored popovers use this for outside-click containment; full-overlay dialogs don't need it (they use `handleOverlayClick` instead). */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** True for the duration of the open-settle animation. */
  isOpening: boolean;
  /** True for the duration of the close animation. */
  isClosing: boolean;
  /**
   * Begins a fresh open cycle: captures the currently-focused element,
   * cancels any pending close, and (re)starts the open-settle timer.
   *
   * Call this directly from a trigger's click handler for self-managed
   * open/closed components (DropdownMenu, DatePicker, TabNavigation-style
   * popovers) — don't rely solely on an `isOpen` transition for these,
   * since re-opening while a prior close is still mid-animation may not
   * actually flip that boolean's value.
   */
  open: () => void;
  /** Begins the staged close: cancels any pending open, starts the close timer, and calls `onClose` when it completes. */
  close: (opts?: { focusTarget?: HTMLElement | null }) => void;
  /** Overlay/backdrop onClick handler for full-overlay dialogs — closes only if the click landed on the backdrop itself, not the panel. */
  handleOverlayClick: (e: React.MouseEvent) => void;
}

// Tracks whether the most recent user input was keyboard- or pointer-driven,
// page-wide — the same heuristic native `:focus-visible` uses. Read by the
// focus-restore effect below; see the `restoreFocus` option's JSDoc.
let isKeyboardModality = true;
let modalityTrackingAttached = false;

function trackInputModality(): void {
  if (modalityTrackingAttached || typeof document === 'undefined') return;
  modalityTrackingAttached = true;
  document.addEventListener('keydown', () => { isKeyboardModality = true; }, true);
  document.addEventListener('mousedown', () => { isKeyboardModality = false; }, true);
  document.addEventListener('touchstart', () => { isKeyboardModality = false; }, true);
}

let scrollLockCount = 0;
let savedOverflow = '';
let savedPaddingRight = '';

function acquireScrollLock(): void {
  if (scrollLockCount === 0) {
    savedOverflow = document.body.style.overflow;
    savedPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
  scrollLockCount++;
}

function releaseScrollLock(): void {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.body.style.overflow = savedOverflow;
    document.body.style.paddingRight = savedPaddingRight;
  }
}

/**
 * Shared staged-open/close + click-outside + Escape + focus-restore +
 * ref-counted body-scroll-lock behavior for dialog-like components (Modal,
 * Drawer, DropdownMenu, DatePicker's calendar popover, TabNavigation's
 * dropdown mode).
 *
 * Works with two call patterns:
 * - **Externally controlled** (Modal, Drawer): pass the component's own
 *   `isOpen` prop straight through. A prop transition from `false` to
 *   `true` begins an open cycle automatically.
 * - **Self-managed** (DropdownMenu, DatePicker, TabNavigation): call the
 *   returned `open()`/`close()` directly from trigger/outside-click/Escape
 *   handlers, and pass your own open-state boolean as `isOpen` for
 *   rendering.
 *
 * @example
 * const { isOpening, isClosing, containerRef, close } = useDialogBehavior(open, {
 *   closeDuration: 180,
 *   openDuration: 30,
 *   onClose: () => setOpen(false),
 *   onOpenSettle: () => itemRefs.current[0]?.focus(),
 * });
 */
export function useDialogBehavior(
  isOpen: boolean,
  options: UseDialogBehaviorOptions
): UseDialogBehaviorResult {
  const {
    closeDuration,
    openDuration,
    closeOnEscape = true,
    closeOnOutsideClick = true,
    lockScroll = false,
    onOpenSettle,
    onClose,
    restoreFocus = 'if-unclaimed',
    getRestoreFocusTarget,
  } = options;

  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const explicitFocusTargetRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // This component instance is never actually unmounted between open/close
  // cycles (it conditionally renders null instead), so this persists across
  // cycles the same way Drawer's old `hasEntered` state did before this hook
  // existed — that's exactly why it's needed to detect a *genuine* transition.
  const wasOpenRef = useRef(false);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const onOpenSettleRef = useRef(onOpenSettle);
  onOpenSettleRef.current = onOpenSettle;
  const closeOnEscapeRef = useRef(closeOnEscape);
  closeOnEscapeRef.current = closeOnEscape;
  const restoreFocusRef = useRef(restoreFocus);
  restoreFocusRef.current = restoreFocus;
  const getRestoreFocusTargetRef = useRef(getRestoreFocusTarget);
  getRestoreFocusTargetRef.current = getRestoreFocusTarget;

  useEffect(() => {
    trackInputModality();
  }, []);

  const pendingOpenSettleRef = useRef(false);

  const open = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    previouslyFocusedRef.current = (document.activeElement as HTMLElement) || null;
    setIsClosing(false);
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (openDuration === undefined) {
      // No isOpening consumer and no onOpenSettle timing to stage — settle
      // via an effect instead of scheduling a timer purely to flip state
      // nothing reads (that timer firing outside any caller-driven act()
      // window is exactly what caused DatePicker's spurious act() warning).
      // Self-managed callers call open() twice per open cycle (once
      // directly, once from the isOpen-transition effect below) — the timer
      // path coalesces that for free (the second call just reschedules the
      // same timer), so this has to coalesce it too, via the pending-flag
      // effect, or onOpenSettle would fire twice for one open.
      pendingOpenSettleRef.current = true;
      return;
    }
    setIsOpening(true);
    openTimeoutRef.current = setTimeout(() => {
      setIsOpening(false);
      onOpenSettleRef.current?.();
    }, openDuration);
  }, [openDuration]);

  useEffect(() => {
    if (!pendingOpenSettleRef.current) return;
    pendingOpenSettleRef.current = false;
    onOpenSettleRef.current?.();
  });

  const openRef = useRef(open);
  openRef.current = open;

  const pendingRestoreRef = useRef(false);

  const close = useCallback(
    (opts?: { focusTarget?: HTMLElement | null }) => {
      if (opts) explicitFocusTargetRef.current = opts.focusTarget ?? null;
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = null;
      }
      pendingOpenSettleRef.current = false;
      setIsClosing(true);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = setTimeout(() => {
        setIsClosing(false);
        setIsOpening(false);
        onCloseRef.current();
        // Defer the actual focus check to an effect (below) instead of
        // doing it here inline: onClose() above only *schedules* the
        // caller's state update (e.g. setOpen(false)), which hasn't been
        // committed to the DOM yet at this point in the callback — the
        // dialog's content (and whatever inside it still holds focus) is
        // still mounted. Checking document.activeElement this early sees
        // that still-mounted, about-to-be-removed element as "claiming"
        // focus, so the restore never fires — even though the browser is
        // about to evict focus to document.body the instant React actually
        // removes it. An effect runs after that removal has been committed
        // and painted, so the check sees the real post-close state.
        pendingRestoreRef.current = true;
      }, closeDuration);
    },
    [closeDuration]
  );

  const closeRef = useRef(close);
  closeRef.current = close;

  useEffect(() => {
    if (!pendingRestoreRef.current) return;
    pendingRestoreRef.current = false;

    const mode = restoreFocusRef.current;
    const target =
      explicitFocusTargetRef.current ?? getRestoreFocusTargetRef.current?.() ?? previouslyFocusedRef.current;
    explicitFocusTargetRef.current = null;
    if (mode !== 'never' && target) {
      const focusUnclaimed = document.activeElement === document.body || document.activeElement === null;
      if (mode === 'always' || (focusUnclaimed && isKeyboardModality)) {
        target.focus?.();
      }
    }
  });

  // Genuine closed->open transition, for externally-controlled callers
  // (Modal/Drawer) that only ever flip a prop rather than calling open()
  // directly.
  useLayoutEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      openRef.current();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Unmount safety net.
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    };
  }, []);

  // Escape — document-level, stable listener via latest-value refs so it
  // never needs to resubscribe (and never goes stale) across re-renders.
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (closeOnEscapeRef.current && e.key === 'Escape') {
      closeRef.current();
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Outside click, for anchored-popover callers using containerRef. Full-
  // overlay callers leave containerRef unattached and rely on
  // handleOverlayClick instead, so this never double-fires for them.
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeRef.current();
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen, closeOnOutsideClick]);

  // Body scroll lock, ref-counted so nested/simultaneous dialogs don't
  // clobber each other's restore regardless of close order.
  useEffect(() => {
    if (!isOpen || !lockScroll) return;
    acquireScrollLock();
    return () => releaseScrollLock();
  }, [isOpen, lockScroll]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOutsideClick && (e.target === overlayRef.current || e.target === e.currentTarget)) {
        close();
      }
    },
    [closeOnOutsideClick, close]
  );

  return { overlayRef, containerRef, isOpening, isClosing, open, close, handleOverlayClick };
}
