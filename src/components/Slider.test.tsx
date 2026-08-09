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
});
