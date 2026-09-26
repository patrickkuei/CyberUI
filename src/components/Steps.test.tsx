import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Steps from './Steps';
import { stubReducedMotion, type ReducedMotionStub } from '../test/reducedMotion';

const basicSteps = [
  { title: 'Login' },
  { title: 'Verify' },
  { title: 'Complete' },
];

const stepsWithDesc = [
  { title: 'Login', description: 'Enter credentials' },
  { title: 'Verify', description: '2FA check' },
  { title: 'Complete', description: 'Access granted' },
];

const stepsWithStatus = [
  { title: 'Login', status: 'completed' as const },
  { title: 'Verify', status: 'current' as const },
  { title: 'Complete', status: 'pending' as const },
];

describe('Steps', () => {
  it('renders without crashing', () => {
    const { container } = render(<Steps items={basicSteps} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders all step titles', () => {
    render(<Steps items={basicSteps} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Verify')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
  });

  it('renders descriptions when provided', () => {
    render(<Steps items={stepsWithDesc} />);
    expect(screen.getByText('Enter credentials')).toBeInTheDocument();
    expect(screen.getByText('2FA check')).toBeInTheDocument();
    expect(screen.getByText('Access granted')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<Steps items={basicSteps} />);
    expect(screen.queryByText('Enter credentials')).toBeNull();
  });

  it('applies custom className to container', () => {
    const { container } = render(<Steps items={basicSteps} className="my-custom-class" />);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });

  it('renders correct number of step title elements', () => {
    render(<Steps items={basicSteps} current={1} />);
    const titles = screen.getAllByText(/Login|Verify|Complete/);
    expect(titles.length).toBe(3);
  });

  it('renders with explicit status props', () => {
    render(<Steps items={stepsWithStatus} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Verify')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
  });

  it('renders error status step', () => {
    const errorSteps = [
      { title: 'Upload', status: 'error' as const },
      { title: 'Process', status: 'pending' as const },
    ];
    render(<Steps items={errorSteps} />);
    const errorEl = screen.getByText('Upload');
    expect(errorEl.className).toContain('text-error');
  });

  it('renders a single step without crashing', () => {
    render(<Steps items={[{ title: 'Only Step' }]} />);
    expect(screen.getByText('Only Step')).toBeInTheDocument();
  });

  it('defaults current to 0', () => {
    render(<Steps items={basicSteps} />);
    // current step (index 0) title should have current styling
    const loginEl = screen.getByText('Login');
    expect(loginEl).toBeInTheDocument();
  });

  it('warns when current equals items.length (common 1-based mistake)', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Steps items={basicSteps} current={3} />);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('1-based indexing'));
    warnSpy.mockRestore();
  });

  it('warns when current is negative', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Steps items={basicSteps} current={-1} />);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('out of range'));
    warnSpy.mockRestore();
  });

  it('does not warn when current is a valid index', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Steps items={basicSteps} current={1} />);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});

describe('Steps reduced motion', () => {
  let motion: ReducedMotionStub;

  beforeEach(() => {
    motion = stubReducedMotion(true);
  });

  afterEach(() => {
    motion.restore();
  });

  const flowChevrons = () =>
    screen.getAllByText('›').filter((el) => (el.getAttribute('style') ?? '').includes('opacity: 0.8'));

  it('holds the chevrons before the current step at a steady glow instead of pulsing', () => {
    render(<Steps items={basicSteps} current={1} />);
    const chevrons = screen.getAllByText('›');
    for (const chevron of chevrons) {
      expect(chevron.getAttribute('style') ?? '').not.toContain('chevronFlow');
    }
    // The three chevrons between the completed and the current step are lit.
    expect(flowChevrons()).toHaveLength(3);
  });

  it('pulses those chevrons when motion is allowed', () => {
    motion.set(false);
    render(<Steps items={basicSteps} current={1} />);
    const pulsing = screen
      .getAllByText('›')
      .filter((el) => (el.getAttribute('style') ?? '').includes('chevronFlow'));
    expect(pulsing).toHaveLength(3);
  });

  it('shows underlines without growing them', () => {
    render(<Steps items={basicSteps} current={1} orientation="horizontal" />);
    expect(screen.getByText('Login').className).toContain('motion-reduce:after:transition-none');
  });
});
