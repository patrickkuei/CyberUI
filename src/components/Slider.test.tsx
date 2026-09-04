import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Slider from './Slider';

describe('Slider', () => {
  it('renders a single thumb without crashing', () => {
    render(<Slider defaultValue={40} />);
    expect(screen.getAllByRole('slider')).toHaveLength(1);
  });

  it('renders two thumbs in range mode', () => {
    render(<Slider defaultValue={[20, 80]} />);
    expect(screen.getAllByRole('slider')).toHaveLength(2);
  });

  it('wires aria-valuenow/min/max on the thumb', () => {
    render(<Slider min={0} max={200} defaultValue={50} />);
    const thumb = screen.getByRole('slider');
    expect(thumb).toHaveAttribute('aria-valuenow', '50');
    expect(thumb).toHaveAttribute('aria-valuemin', '0');
    expect(thumb).toHaveAttribute('aria-valuemax', '200');
  });

  it('renders the label and, when showValue is set, the current value', () => {
    render(<Slider label="Brightness" defaultValue={40} showValue />);
    expect(screen.getByText('Brightness')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('formats the displayed value with formatValue', () => {
    render(<Slider defaultValue={40} showValue formatValue={(v) => `${v}%`} />);
    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  it('shows a "min – max" display value in range mode', () => {
    render(<Slider defaultValue={[20, 80]} showValue />);
    expect(screen.getByText('20 – 80')).toBeInTheDocument();
  });

  it('associates the thumb with the label via aria-labelledby in single-value mode', () => {
    render(<Slider label="Brightness" defaultValue={40} />);
    const thumb = screen.getByRole('slider');
    const labelledBy = thumb.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    expect(document.getElementById(labelledBy as string)).toHaveTextContent('Brightness');
  });

  it('gives range thumbs distinct accessible names derived from the label', () => {
    render(<Slider label="Price Range" defaultValue={[20, 80]} />);
    expect(screen.getByRole('slider', { name: 'Price Range minimum' })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: 'Price Range maximum' })).toBeInTheDocument();
  });

  it('increments by step on ArrowRight/ArrowUp and decrements on ArrowLeft/ArrowDown', () => {
    const handleChange = vi.fn();
    render(<Slider defaultValue={50} step={5} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenLastCalledWith(55);
    fireEvent.keyDown(thumb, { key: 'ArrowUp' });
    expect(handleChange).toHaveBeenLastCalledWith(60);
    fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
    expect(handleChange).toHaveBeenLastCalledWith(55);
    fireEvent.keyDown(thumb, { key: 'ArrowDown' });
    expect(handleChange).toHaveBeenLastCalledWith(50);
  });

  it('jumps to min/max on Home/End', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={50} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'End' });
    expect(handleChange).toHaveBeenLastCalledWith(100);
    fireEvent.keyDown(thumb, { key: 'Home' });
    expect(handleChange).toHaveBeenLastCalledWith(0);
  });

  it('moves by step * 10 on PageUp/PageDown', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} step={2} defaultValue={40} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'PageUp' });
    expect(handleChange).toHaveBeenLastCalledWith(60);
    fireEvent.keyDown(thumb, { key: 'PageDown' });
    expect(handleChange).toHaveBeenLastCalledWith(40);
  });

  it('clamps keyboard movement to min and max', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={10} defaultValue={9} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenLastCalledWith(10);
  });

  it('moves each range thumb independently and never lets the lower thumb pass the upper one', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={[20, 30]} onValueChange={handleChange} />);
    const [lower, upper] = screen.getAllByRole('slider');
    fireEvent.keyDown(upper, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenLastCalledWith([20, 31]);

    for (let i = 0; i < 15; i++) fireEvent.keyDown(lower, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenLastCalledWith([31, 31]);
  });

  it('respects controlled value and does not self-manage state', () => {
    const handleChange = vi.fn();
    const { rerender } = render(<Slider value={30} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenCalledWith(31);
    expect(thumb).toHaveAttribute('aria-valuenow', '30');

    rerender(<Slider value={31} onValueChange={handleChange} />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '31');
  });

  it('ignores keyboard interaction when disabled', () => {
    const handleChange = vi.fn();
    render(<Slider defaultValue={50} disabled onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    expect(thumb).toHaveAttribute('tabindex', '-1');
    expect(thumb).toHaveAttribute('aria-disabled', 'true');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('jumps to the clicked position on the track and starts dragging the nearest thumb', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={20} onValueChange={handleChange} />);
    const track = screen.getByRole('slider').parentElement as HTMLElement;
    vi.spyOn(track, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 200,
      width: 200,
      top: 0,
      bottom: 10,
      height: 10,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    fireEvent.pointerDown(track, { clientX: 150 });
    expect(handleChange).toHaveBeenLastCalledWith(75);
  });

  it('renders responsive size prop without crashing', () => {
    render(<Slider defaultValue={50} size={{ base: 'sm', md: 'lg' }} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  // Regression tests for a code review that found real bugs in the
  // drag-to-set pointer handling and the NaN-producing invalid-prop paths.

  it('stops an in-progress drag once disabled becomes true (regression: the window pointermove/pointerup listener never checked `disabled`, so flipping it mid-drag never stopped the thumb from following the pointer)', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Slider min={0} max={100} defaultValue={20} onValueChange={handleChange} />
    );
    const thumb = screen.getByRole('slider');
    fireEvent.pointerDown(thumb, { pointerId: 1 });

    rerender(<Slider min={0} max={100} defaultValue={20} disabled onValueChange={handleChange} />);
    handleChange.mockClear();

    fireEvent.pointerMove(window, { clientX: 150, pointerId: 1, buttons: 1 });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not throw starting a drag in environments without Pointer Capture support (regression: an unguarded setPointerCapture call would throw in jsdom, which does not implement it)', () => {
    render(<Slider defaultValue={20} />);
    const thumb = screen.getByRole('slider');
    expect(() => fireEvent.pointerDown(thumb, { pointerId: 1 })).not.toThrow();
  });

  it('stops following the pointer once no button is held (regression: releasing the pointer outside the viewport never fires a window pointerup, so draggingIndex never reset and the thumb kept tracking the cursor on any later hover)', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={20} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    const track = thumb.parentElement as HTMLElement;
    vi.spyOn(track, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 200,
      width: 200,
      top: 0,
      bottom: 10,
      height: 10,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    fireEvent.pointerDown(thumb, { pointerId: 7 });
    handleChange.mockClear();

    // No button held — simulates the pointer having been released elsewhere.
    fireEvent.pointerMove(window, { clientX: 150, pointerId: 7, buttons: 0 });
    expect(handleChange).not.toHaveBeenCalled();

    // The drag has ended, so even a later move with a button held is ignored.
    fireEvent.pointerMove(window, { clientX: 180, pointerId: 7, buttons: 1 });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('never produces NaN in value/aria-valuenow when step is 0 (regression: clampToStep divided by step, so step=0 produced NaN)', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} step={0} defaultValue={20} onValueChange={handleChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });

    expect(handleChange).toHaveBeenCalled();
    const lastValue = handleChange.mock.calls[handleChange.mock.calls.length - 1][0];
    expect(Number.isNaN(lastValue)).toBe(false);
    expect(thumb.getAttribute('aria-valuenow')).not.toBe('NaN');
  });

  it('never produces NaN/Infinity in the thumb position when max <= min (regression: percentOf divided by (max - min), producing NaN/Infinity in the inline `left` style)', () => {
    render(<Slider min={50} max={50} defaultValue={50} />);
    const thumb = screen.getByRole('slider') as HTMLElement;
    expect(thumb.style.left).not.toContain('NaN');
    expect(thumb.style.left).not.toContain('Infinity');
  });

  it('ignores pointermove events from a different pointerId than the one that started the drag (regression: draggingIndex was a shared scalar with no pointerId tracking, so a second simultaneous touch-drag on the other thumb hijacked the first finger\'s moves)', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={[20, 80]} onValueChange={handleChange} />);
    const [lower] = screen.getAllByRole('slider');
    const track = lower.parentElement as HTMLElement;
    vi.spyOn(track, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 200,
      width: 200,
      top: 0,
      bottom: 10,
      height: 10,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    // Finger 1 starts dragging the lower thumb.
    fireEvent.pointerDown(lower, { pointerId: 1 });
    handleChange.mockClear();

    // A different pointerId (a second finger dragging the other thumb)
    // moves — must not affect this drag.
    fireEvent.pointerMove(window, { clientX: 160, pointerId: 2, buttons: 1 });
    expect(handleChange).not.toHaveBeenCalled();

    // The original finger's move is still honored.
    fireEvent.pointerMove(window, { clientX: 60, pointerId: 1, buttons: 1 });
    expect(handleChange).toHaveBeenLastCalledWith([30, 80]);
  });

  it('keeps the min thumb above the max thumb by default so it stays independently clickable when both sit at the same position (regression: DOM order alone made the later-rendered max thumb always win the hit-test)', () => {
    render(<Slider min={0} max={100} defaultValue={[50, 50]} />);
    const [lower, upper] = screen.getAllByRole('slider') as HTMLElement[];
    expect(Number(lower.style.zIndex)).toBeGreaterThan(Number(upper.style.zIndex));
  });

  it('raises the actively-dragged thumb above the other thumb', () => {
    render(<Slider min={0} max={100} defaultValue={[20, 80]} />);
    const [lower, upper] = screen.getAllByRole('slider') as HTMLElement[];
    fireEvent.pointerDown(upper, { pointerId: 1 });
    expect(Number(upper.style.zIndex)).toBeGreaterThan(Number(lower.style.zIndex));
  });
});
