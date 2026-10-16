import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TabNavigation from './TabNavigation';

const tabs = ['NEURAL', 'SIGNAL', 'CORTEX'];

describe('TabNavigation Component', () => {
  it('renders all tabs in scroll mode', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="scroll" />);
    expect(screen.getByText('NEURAL')).toBeInTheDocument();
    expect(screen.getByText('SIGNAL')).toBeInTheDocument();
    expect(screen.getByText('CORTEX')).toBeInTheDocument();
  });

  it('calls onTabChange when a tab is clicked', () => {
    const handleTabChange = vi.fn();
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={handleTabChange} />);
    
    const tabSignal = screen.getByText('SIGNAL');
    fireEvent.click(tabSignal);
    
    expect(handleTabChange).toHaveBeenCalledWith('SIGNAL');
  });

  it('marks the active tab with aria-selected', () => {
    render(<TabNavigation tabs={tabs} activeTab="CORTEX" onTabChange={vi.fn()} />);
    const tabCortex = screen.getByRole('tab', { name: 'CORTEX' });
    expect(tabCortex).toHaveAttribute('aria-selected', 'true');
    
    const tabNeural = screen.getByRole('tab', { name: 'NEURAL' });
    expect(tabNeural).toHaveAttribute('aria-selected', 'false');
  });

  it('renders in dropdown mode and opens on click', async () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);

    // In dropdown mode, active tab label is shown on the button
    const dropdownButton = screen.getByRole('button', { expanded: false });
    expect(dropdownButton).toHaveTextContent('NEURAL');

    fireEvent.click(dropdownButton);
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');

    // Tabs should now be visible in the dropdown menu
    expect(await screen.findByText('SIGNAL', { selector: 'button span' })).toBeInTheDocument();
  });

  it('closes the dropdown on Escape (new behavior — TabDropdown previously had no Escape handling at all)', async () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);
    fireEvent.click(screen.getByRole('button', { expanded: false }));
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument());
  });

  it('restores focus to the anchor button after closing via Escape (keyboard-driven dismissal)', async () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);
    const anchor = screen.getByRole('button', { expanded: false });

    fireEvent.click(anchor);
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => expect(anchor).toHaveFocus());
  });

  it('does not restore focus to the anchor button after a pointer-driven dismissal (outside-click or tab-select by click) — only keyboard dismissal restores focus', async () => {
    // A mouse user already knows where their pointer is; forcing focus back
    // to the anchor after a click-driven close would be the surprising
    // move. Restore is keyboard-only — see useDialogBehavior.ts.
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);
    const anchor = screen.getByRole('button', { expanded: false });

    fireEvent.click(anchor);
    fireEvent.mouseDown(document.body);
    fireEvent.click(document.body);
    await waitFor(() => expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument());
    expect(anchor).not.toHaveFocus();

    fireEvent.mouseDown(anchor);
    fireEvent.click(anchor);
    fireEvent.mouseDown(screen.getByText('SIGNAL', { selector: 'button span' }));
    fireEvent.click(screen.getByText('SIGNAL', { selector: 'button span' }));
    await waitFor(() => expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument());
    expect(anchor).not.toHaveFocus();
  });

  it('does not update state after unmount from a pending tab-select close timer', () => {
    // Regression: selecting a tab (closeOnSelect) scheduled an untracked
    // setTimeout that fired setState even after the component unmounted.
    vi.useFakeTimers();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const { unmount } = render(
        <TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />
      );
      fireEvent.click(screen.getByRole('button', { expanded: false }));
      fireEvent.click(screen.getByText('SIGNAL', { selector: 'button span' }));

      unmount();
      vi.advanceTimersByTime(200);

      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
      vi.useRealTimers();
    }
  });
});

describe('TabNavigation reduced motion', () => {
  it('fades the dropdown without scaling in 150ms under prefers-reduced-motion', async () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);
    fireEvent.click(screen.getByRole('button', { expanded: false }));
    const option = await screen.findByText('SIGNAL', { selector: 'button span' });
    const menu = option.closest('[aria-hidden]') as HTMLElement;
    expect(menu.className).toContain('motion-reduce:scale-y-100');
    expect(menu.className).toContain('motion-reduce:duration-150');
  });

  it('shows the active-tab underline without growing it under prefers-reduced-motion', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} />);
    const tab = screen.getByRole('tab', { name: 'NEURAL' });
    expect(tab.className).toContain('motion-reduce:after:transition-none');
  });
});

// Issue #96: the scroll container used to rely only on tailwind-scrollbar
// classes (`scrollbar-thin`, ...) that this build never emits, so browsers
// drew their default (white) scrollbar. These pin the class the container
// carries and the rule in src/index.css that the class refers to.
describe('TabNavigation scroll-mode scrollbar (#96)', () => {
  const css = readFileSync(join(__dirname, '..', 'index.css'), 'utf8');
  // The rules live in `@layer components` so consumer utilities (which come
  // later, in `utilities`) can still override them via containerClassName.
  const layered = css.slice(css.indexOf('@layer components {'));
  /** Body of the first rule in `@layer components` whose selector is exactly `selector`. */
  const rule = (selector: string): string => {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return layered.match(new RegExp(`(?:^|[\\s}])${escaped}\\s*\\{([^}]*)\\}`))?.[1] ?? '';
  };

  it('gives the scroll container the cyberui-scrollbar-thin class', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="scroll" />);
    expect(screen.getByRole('tablist')).toHaveClass('cyberui-scrollbar-thin', 'overflow-x-auto');
  });

  it('keeps the earlier scrollbar-* classes on the container (class list only grows)', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="scroll" />);
    expect(screen.getByRole('tablist')).toHaveClass(
      'scrollbar-thin',
      'scrollbar-thumb-border-default',
      'scrollbar-track-transparent',
      'hover:scrollbar-thumb-secondary/50'
    );
  });

  it('is not in @layer cyberui, which would beat consumer utilities', () => {
    const cyberuiLayers = css.split('@layer components {')[0];
    expect(cyberuiLayers).not.toContain('.cyberui-scrollbar-thin');
    expect(layered).toContain('.cyberui-scrollbar-thin {');
  });

  it('does not add it in wrap mode', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="wrap" />);
    expect(screen.getByRole('tablist')).not.toHaveClass('cyberui-scrollbar-thin');
  });

  it('defines a thin border-default scrollbar on a transparent track for that class', () => {
    const base = rule('.cyberui-scrollbar-thin');
    expect(base).toMatch(/scrollbar-width:\s*thin;/);
    expect(base).toMatch(/scrollbar-color:\s*var\(--color-border-default\)\s+transparent;/);
    expect(rule('.cyberui-scrollbar-thin::-webkit-scrollbar')).toMatch(/height:\s*6px;/);
    expect(rule('.cyberui-scrollbar-thin::-webkit-scrollbar-track')).toMatch(
      /background-color:\s*transparent;/
    );
    expect(rule('.cyberui-scrollbar-thin::-webkit-scrollbar-thumb')).toMatch(
      /background-color:\s*var\(--color-border-default\);/
    );
  });

  it('turns the thumb secondary at 50% on hover, in both the standard and webkit rules', () => {
    const half = /color-mix\(in oklab, var\(--color-secondary\) 50%, transparent\)/;
    expect(rule('.cyberui-scrollbar-thin:hover')).toMatch(half);
    expect(rule('.cyberui-scrollbar-thin:hover::-webkit-scrollbar-thumb')).toMatch(half);
  });
});
