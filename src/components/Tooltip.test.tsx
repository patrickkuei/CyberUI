import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders the trigger without crashing', () => {
    render(
      <Tooltip content="Info">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('does not render the tooltip panel initially', () => {
    render(
      <Tooltip content="Info">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows the tooltip after the delay on hover', () => {
    render(
      <Tooltip content="Info" delay={200}>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    expect(screen.queryByRole('tooltip')).toBeNull();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.getByRole('tooltip')).toHaveTextContent('Info');
  });

  it('hides immediately on mouse leave', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const wrapper = screen.getByText('Trigger').parentElement as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows on focus and hides on blur', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const trigger = screen.getByText('Trigger');
    fireEvent.focus(trigger);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(trigger);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('hides on Escape key', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const wrapper = screen.getByText('Trigger').parentElement as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.keyDown(wrapper, { key: 'Escape' });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('never shows when disabled', () => {
    render(
      <Tooltip content="Info" delay={0} disabled>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('sets aria-describedby on the trigger when open', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).not.toHaveAttribute('aria-describedby');
    fireEvent.mouseEnter(trigger.parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    const tooltip = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('respects controlled open state', () => {
    const { rerender } = render(
      <Tooltip content="Info" open={false}>
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();
    rerender(
      <Tooltip content="Info" open={true}>
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('calls onOpenChange but leaves visibility to the caller when controlled', () => {
    const handleOpenChange = vi.fn();
    render(
      <Tooltip content="Info" open={false} onOpenChange={handleOpenChange} delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('applies the variant border class to the panel', () => {
    render(
      <Tooltip content="Info" open variant="accent">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('border-accent');
  });

  it('applies placement classes to the panel', () => {
    render(
      <Tooltip content="Info" open placement="bottom">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('top-full');
  });
});
