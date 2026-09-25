import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, expectTypeOf, vi } from 'vitest';
import Slider from './Slider';
import type { SliderProps, SliderValue } from './Slider';

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

// Type-level tests: `npm run type-check` is what enforces these. Elements are
// created but never rendered; each `@ts-expect-error` fails the type-check if
// the usage it names ever starts compiling.
describe('Slider onValueChange typing', () => {
  const setVolume: React.Dispatch<React.SetStateAction<number>> = () => {};
  const setRange: React.Dispatch<React.SetStateAction<[number, number]>> = () => {};
  const legacyHandler: (value: SliderValue) => void = () => {};
  const numberHandler: (value: number) => void = () => {};
  const rangeHandler: (value: [number, number]) => void = () => {};

  it('gives single-value handlers a number', () => {
    const elements = [
      <Slider key="setter" value={55} onValueChange={setVolume} />,
      <Slider key="value" value={55} onValueChange={(v) => expectTypeOf(v).toEqualTypeOf<number>()} />,
      <Slider key="default" defaultValue={55} onValueChange={(v) => expectTypeOf(v).toEqualTypeOf<number>()} />,
      // No value/defaultValue: single mode, the thumb starts at `min`.
      <Slider key="none" onValueChange={(v) => expectTypeOf(v).toEqualTypeOf<number>()} />,
      <Slider key="named" value={55} onValueChange={numberHandler} />,
    ];
    expect(elements).toHaveLength(5);
  });

  it('gives range handlers a [number, number] tuple', () => {
    const elements = [
      <Slider key="setter" value={[10, 90]} onValueChange={setRange} />,
      <Slider key="value" value={[10, 90]} onValueChange={(v) => expectTypeOf(v).toEqualTypeOf<[number, number]>()} />,
      <Slider key="default" defaultValue={[10, 90]} onValueChange={(v) => expectTypeOf(v).toEqualTypeOf<[number, number]>()} />,
      <Slider key="named" value={[10, 90]} onValueChange={rangeHandler} />,
    ];
    expect(elements).toHaveLength(4);
  });

  it('keeps accepting a handler typed with the SliderValue union in both modes', () => {
    const elements = [
      <Slider key="single" value={55} onValueChange={legacyHandler} />,
      <Slider key="range" value={[10, 90]} onValueChange={legacyHandler} />,
      <Slider key="none" onValueChange={legacyHandler} />,
    ];
    expect(elements).toHaveLength(3);
  });

  it('does not narrow a literal value to a literal type', () => {
    // `value={55}` must be a `number` slider, not one that only accepts `55`.
    const literal = <Slider value={55} onValueChange={(v) => expectTypeOf(v).not.toEqualTypeOf<55>()} />;
    expect(literal).toBeTruthy();
  });

  it('keeps SliderProps a non-generic-by-default interface that consumers can extend', () => {
    interface OperativeSliderProps extends SliderProps {
      operative: string;
    }
    const props: OperativeSliderProps = { operative: 'Ghost', value: 40, onValueChange: legacyHandler };
    expectTypeOf<SliderProps['onValueChange']>().toEqualTypeOf<((value: SliderValue) => void) | undefined>();
    expect(props.operative).toBe('Ghost');
  });

  it('rejects handlers and values that disagree with the slider mode', () => {
    const invalid = [
      // @ts-expect-error — a range handler on a single-value slider
      <Slider key="a" value={55} onValueChange={rangeHandler} />,
      // @ts-expect-error — a single-value handler on a range slider
      <Slider key="b" value={[10, 90]} onValueChange={numberHandler} />,
      // @ts-expect-error — a number state setter on a range slider
      <Slider key="c" value={[10, 90]} onValueChange={setVolume} />,
      // @ts-expect-error — a range state setter on a single-value slider
      <Slider key="d" value={55} onValueChange={setRange} />,
      // @ts-expect-error — a range handler with no value: the slider defaults to single mode
      <Slider key="e" onValueChange={rangeHandler} />,
      // @ts-expect-error — `value` and `defaultValue` in different modes (number vs range)
      <Slider key="f" value={55} defaultValue={[10, 90]} />,
      // @ts-expect-error — a handler parameter that is neither a number nor a range
      <Slider key="g" value={55} onValueChange={(v: string) => v.length} />,
    ];
    expect(invalid).toHaveLength(7);
  });
});
