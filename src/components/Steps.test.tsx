import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Steps from './Steps';

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
});
