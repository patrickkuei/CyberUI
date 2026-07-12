import React, { useId } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * Props that FormField injects onto its child control via `React.cloneElement`.
 * Any element accepting these (a native `<input>`/`<textarea>`/`<select>`, or a
 * custom control that forwards them) works as a child.
 */
type FormFieldChildProps = {
  id?: string;
  disabled?: boolean;
  'aria-invalid'?: boolean | 'true' | 'false';
  'aria-required'?: boolean;
  'aria-describedby'?: string;
};

/**
 * Validation state of a FormField. Driven by whether `error` or `success` is set.
 */
export type FormFieldState = 'default' | 'error' | 'success';

/**
 * Props for the FormField component.
 */
export interface FormFieldProps {
  /** Label text rendered above the field. */
  label?: string;
  /** Helper text shown below the field. Overridden by `error` or `success` when set. */
  helperText?: string;
  /** Error message. Overrides `helperText`/`success`, sets validation state to `'error'`, and marks the field `aria-invalid`. */
  error?: string;
  /** Success message. Overrides `helperText` (but not `error`), sets validation state to `'success'`. */
  success?: string;
  /**
   * Marks the field as required — appends a `*` indicator to the label and
   * sets `aria-required` on the child control.
   * @default false
   */
  required?: boolean;
  /**
   * Disables the field — dims the label/message and sets `disabled` on the
   * child control (unless the child already sets its own `disabled` prop,
   * which takes precedence).
   * @default false
   */
  disabled?: boolean;
  /**
   * Font size of the label and helper/error/success message. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * The form control this field wraps — a single React element that accepts
   * `id`, `disabled`, `aria-invalid`, `aria-required`, and `aria-describedby`
   * (native form elements, or a custom control that forwards them).
   */
  children: React.ReactElement<FormFieldChildProps>;
  /** Id applied to the child control and referenced by the label's `htmlFor`. Auto-generated when omitted. */
  id?: string;
  /** Additional class name for the outer wrapper. */
  className?: string;
}

const LABEL_STATE_CLASSES: Record<FormFieldState, string> = {
  default: 'text-default',
  error: 'text-error',
  success: 'text-success',
};

const MESSAGE_STATE_CLASSES: Record<FormFieldState, string> = {
  default: 'text-muted',
  error: 'text-error',
  success: 'text-success',
};

/**
 * A cyberpunk-styled wrapper that gives any form control a consistent
 * label, helper text, and error/success validation state — without
 * requiring the control itself to know about labels or messages.
 *
 * Built-in CyberUI controls like `Input` and `Select` already manage their
 * own label/error wiring; FormField is for wrapping native elements
 * (`<textarea>`, a raw `<input>`) or custom/third-party controls that don't.
 *
 * @example
 * // Wrapping a native textarea
 * <FormField label="Transmission Log" helperText="Max 500 characters">
 *   <textarea className="w-full rounded-lg bg-surface border-2 border-accent p-3" />
 * </FormField>
 *
 * @example
 * // Validation states
 * <FormField label="Access Code" error="Invalid — access denied">
 *   <input className="w-full rounded-lg bg-surface border-2 p-3" />
 * </FormField>
 *
 * <FormField label="Callsign" success="Callsign verified" required>
 *   <input className="w-full rounded-lg bg-surface border-2 p-3" />
 * </FormField>
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  helperText,
  error,
  success,
  required = false,
  disabled = false,
  size = 'md',
  children,
  id,
  className = '',
}) => {
  const generatedId = useId();
  const fieldId = id || children.props.id || generatedId;

  const state: FormFieldState = error ? 'error' : success ? 'success' : 'default';
  const message = error || success || helperText;
  const descriptionId = message ? `${fieldId}-description` : undefined;

  const childDescribedBy = children.props['aria-describedby'];
  const describedBy = [childDescribedBy, descriptionId].filter(Boolean).join(' ') || undefined;

  const getLabelSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.formField.label);

  const getMessageSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.formField.message);

  const labelClasses = cn(
    'block font-medium transition-colors duration-200',
    getLabelSizeClasses(size),
    disabled ? 'text-muted opacity-50' : LABEL_STATE_CLASSES[state]
  );

  const messageClasses = cn(
    'font-mono transition-colors duration-200',
    getMessageSizeClasses(size),
    disabled ? 'text-muted opacity-50' : MESSAGE_STATE_CLASSES[state]
  );

  const field = React.cloneElement(children, {
    id: fieldId,
    disabled: children.props.disabled ?? disabled,
    'aria-invalid': state === 'error' || undefined,
    'aria-required': required || undefined,
    'aria-describedby': describedBy,
  });

  return (
    <div className={cn('w-full space-y-2', className)}>
      {label && (
        <label htmlFor={fieldId} className={labelClasses}>
          {label}
          {required && (
            <span className={cn('ml-1', disabled ? 'text-muted opacity-50' : 'text-error')} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {field}

      {message && (
        <div id={descriptionId} role={state === 'error' ? 'alert' : undefined} className={messageClasses}>
          {message}
        </div>
      )}
    </div>
  );
};

FormField.displayName = 'CyberUI.FormField';

export default FormField;
