import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Timeline from './Timeline';

const basicEvents = [
  { title: 'System Initialized', time: '2 min ago', status: 'success' as const },
  { title: 'Warning Detected', time: '5 min ago', status: 'warning' as const },
  { title: 'Connection Lost', time: '10 min ago', status: 'error' as const },
];

const eventsWithDesc = [
  {
    title: 'Boot Sequence',
    description: 'All modules loaded',
    time: 'Just now',
    status: 'success' as const,
  },
  {
    title: 'Signal Weak',
    description: 'Packet loss detected',
    time: '3 min ago',
    status: 'warning' as const,
  },
];

describe('Timeline', () => {
  it('renders without crashing', () => {
    const { container } = render(<Timeline events={basicEvents} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders all event titles', () => {
    render(<Timeline events={basicEvents} />);
    expect(screen.getByText('System Initialized')).toBeInTheDocument();
    expect(screen.getByText('Warning Detected')).toBeInTheDocument();
    expect(screen.getByText('Connection Lost')).toBeInTheDocument();
  });

  it('renders time strings for each event', () => {
    render(<Timeline events={basicEvents} />);
    expect(screen.getByText('2 min ago')).toBeInTheDocument();
    expect(screen.getByText('5 min ago')).toBeInTheDocument();
    expect(screen.getByText('10 min ago')).toBeInTheDocument();
  });

  it('renders descriptions when provided', () => {
    render(<Timeline events={eventsWithDesc} />);
    expect(screen.getByText('All modules loaded')).toBeInTheDocument();
    expect(screen.getByText('Packet loss detected')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<Timeline events={basicEvents} />);
    expect(screen.queryByText('All modules loaded')).toBeNull();
  });

  it('applies custom className to outer wrapper', () => {
    const { container } = render(<Timeline events={basicEvents} className="my-custom-class" />);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });

  it('renders correct number of event title elements', () => {
    render(<Timeline events={basicEvents} />);
    const headings = screen.getAllByRole('heading', { level: 4 });
    expect(headings.length).toBe(3);
  });

  it('renders a single event without crashing', () => {
    render(<Timeline events={[{ title: 'Lone Event', time: 'Now', status: 'info' }]} />);
    expect(screen.getByText('Lone Event')).toBeInTheDocument();
    expect(screen.getByText('Now')).toBeInTheDocument();
  });

  it('renders info status by default when status is omitted', () => {
    render(<Timeline events={[{ title: 'No Status', time: 'Now' }]} />);
    expect(screen.getByText('No Status')).toBeInTheDocument();
  });

  it('applies sm size spacing class', () => {
    const { container } = render(<Timeline events={basicEvents} size="sm" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('space-y-4');
  });

  it('applies md size spacing class by default', () => {
    const { container } = render(<Timeline events={basicEvents} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('space-y-6');
  });

  it('applies lg size spacing class', () => {
    const { container } = render(<Timeline events={basicEvents} size="lg" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('space-y-8');
  });
});
