import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormField from './FormField';

describe('FormField Component', () => {
  it('renders label and child control', () => {
    render(
      <FormField label="Callsign">
        <input placeholder="Enter callsign..." />
      </FormField>
    );
    expect(screen.getByText('Callsign')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter callsign...')).toBeInTheDocument();
  });

  it('associates the label with the child control via htmlFor/id', () => {
    render(
      <FormField label="Callsign">
        <input placeholder="Enter callsign..." />
      </FormField>
    );
    const input = screen.getByPlaceholderText('Enter callsign...');
    const label = screen.getByText('Callsign');
    expect(label).toHaveAttribute('for', input.id);
    expect(input.id).toBeTruthy();
  });

  it('uses a custom id when provided instead of generating one', () => {
    render(
      <FormField label="Callsign" id="callsign-field">
        <input placeholder="Enter callsign..." />
      </FormField>
    );
    const input = screen.getByPlaceholderText('Enter callsign...');
    expect(input).toHaveAttribute('id', 'callsign-field');
  });

  it('renders helper text when no error or success is set', () => {
    render(
      <FormField label="Callsign" helperText="Visible to other operatives">
        <input />
      </FormField>
    );
    expect(screen.getByText('Visible to other operatives')).toBeInTheDocument();
  });

  it('shows the error message and marks the control invalid, overriding helperText', () => {
    render(
      <FormField label="Access Code" helperText="Enter your code" error="Access denied">
        <input />
      </FormField>
    );
    expect(screen.getByText('Access denied')).toBeInTheDocument();
    expect(screen.queryByText('Enter your code')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Access denied');
  });

  it('shows the success message without marking the control invalid', () => {
    render(
      <FormField label="Handshake" success="Link established">
        <input />
      </FormField>
    );
    expect(screen.getByText('Link established')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('wires aria-describedby to the message when present', () => {
    render(
      <FormField label="Callsign" helperText="Visible to other operatives">
        <input />
      </FormField>
    );
    const input = screen.getByRole('textbox');
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(screen.getByText('Visible to other operatives')).toHaveAttribute('id', describedBy!);
  });

  it('does not set aria-describedby when there is no message', () => {
    render(
      <FormField label="Callsign">
        <input />
      </FormField>
    );
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-describedby');
  });

  it('preserves an aria-describedby already set on the child, appending its own', () => {
    render(
      <FormField label="Callsign" helperText="Visible to other operatives">
        <input aria-describedby="external-hint" />
      </FormField>
    );
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-describedby')).toContain('external-hint');
  });

  it('marks the field required with aria-required and a visual indicator', () => {
    render(
      <FormField label="Operative Designation" required>
        <input />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('disables the child control when disabled', () => {
    render(
      <FormField label="System Offline" disabled>
        <input />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it("honors a child's own explicit disabled prop even when FormField itself isn't disabled", () => {
    render(
      <FormField label="System Online" disabled={false}>
        <input disabled />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('disables the child even if the child explicitly sets disabled={false}', () => {
    render(
      <FormField label="System Offline" disabled>
        <input disabled={false} />
      </FormField>
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('prioritizes error over success when both are set', () => {
    render(
      <FormField label="Access Code" success="All clear" error="Access denied">
        <input />
      </FormField>
    );
    expect(screen.getByText('Access denied')).toBeInTheDocument();
    expect(screen.queryByText('All clear')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('prioritizes success over helperText when both are set', () => {
    render(
      <FormField label="Handshake" helperText="Awaiting input" success="Link established">
        <input />
      </FormField>
    );
    expect(screen.getByText('Link established')).toBeInTheDocument();
    expect(screen.queryByText('Awaiting input')).not.toBeInTheDocument();
  });

  it('renders without a label when none is provided', () => {
    render(
      <FormField helperText="No label here">
        <input />
      </FormField>
    );
    expect(document.querySelector('label')).not.toBeInTheDocument();
    expect(screen.getByText('No label here')).toBeInTheDocument();
  });

  it('applies responsive size classes without error', () => {
    render(
      <FormField label="Responsive Field" size={{ base: 'sm', lg: 'lg' }} helperText="Scales with viewport">
        <input />
      </FormField>
    );
    expect(screen.getByText('Responsive Field')).toBeInTheDocument();
  });
});
