import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Timeline from './Timeline';
import type { TimelineEvent, TimelineItem, TimelineProps } from './Timeline';

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

  it('renders a string description in a <p> with the same classes as before', () => {
    render(<Timeline events={eventsWithDesc} />);
    const desc = screen.getByText('All modules loaded');
    expect(desc.tagName).toBe('P');
    expect(desc.className).toBe('text-muted mt-1 text-sm');
    expect(desc.innerHTML).toBe('All modules loaded');
  });

  it('renders a React node description (link, code) in a <div>', () => {
    render(
      <Timeline
        events={[
          {
            title: 'Patch Firmware',
            description: (
              <>
                <pre>
                  <code>jack-in --patch v2.4</code>
                </pre>
                <a href="https://example.com/runbook">Runbook</a>
              </>
            ),
          },
        ]}
      />
    );
    const code = screen.getByText('jack-in --patch v2.4');
    expect(code.tagName).toBe('CODE');
    const link = screen.getByRole('link', { name: 'Runbook' });
    expect(link).toHaveAttribute('href', 'https://example.com/runbook');
    const wrapper = link.parentElement as HTMLElement;
    expect(wrapper.tagName).toBe('DIV');
    expect(wrapper.className).toBe('text-muted mt-1 text-sm');
    expect(wrapper.querySelector('p')).toBeNull();
  });

  it('renders no time element when time is omitted', () => {
    render(<Timeline events={[{ title: 'Stage One', status: 'neutral' }]} />);
    const heading = screen.getByRole('heading', { level: 4, name: 'Stage One' });
    const row = heading.parentElement as HTMLElement;
    expect(row.children).toHaveLength(1);
    expect(row.querySelector('span')).toBeNull();
  });

  it('still renders the time element when time is given', () => {
    render(<Timeline events={[{ title: 'Uplink', time: '09:00' }]} />);
    const row = screen.getByRole('heading', { level: 4, name: 'Uplink' }).parentElement as HTMLElement;
    expect(within(row).getByText('09:00').tagName).toBe('SPAN');
  });

  const diamondOf = (container: HTMLElement, index: number) => {
    const rows = (container.firstChild as HTMLElement).children;
    const diamond = rows[index].querySelector('.relative') as HTMLElement;
    return { outer: diamond.children[0] as HTMLElement, inner: diamond.children[1] as HTMLElement };
  };

  it('renders neutral status with border-default tokens and no glow', () => {
    const { container } = render(
      <Timeline events={[{ title: 'Idle Node', status: 'neutral' }]} />
    );
    const { outer, inner } = diamondOf(container, 0);
    expect(outer.className).toContain('border-border-default');
    expect(outer.className).not.toMatch(/shadow-/);
    expect(inner.className).toContain('bg-muted/40');
  });

  it('keeps the existing status classes (with glow) unchanged', () => {
    const statuses = ['success', 'error', 'warning', 'info'] as const;
    const { container } = render(
      <Timeline events={statuses.map((status) => ({ title: status, time: 'Now', status }))} />
    );
    statuses.forEach((status, i) => {
      const { outer, inner } = diamondOf(container, i);
      expect(outer.className).toContain(
        `border-${status} bg-${status}/30 shadow-[0_0_10px_var(--color-${status})]`
      );
      expect(inner.className).toContain(`bg-${status}/60`);
    });
  });

  it('defaults to info styling when status is omitted', () => {
    const { container } = render(<Timeline events={[{ title: 'Ping' }]} />);
    expect(diamondOf(container, 0).outer.className).toContain('shadow-[0_0_10px_var(--color-info)]');
  });

  it('highlights one step among neutral ones', () => {
    const { container } = render(
      <Timeline
        events={[
          { title: 'Scan', status: 'neutral' },
          { title: 'Breach', status: 'warning' },
          { title: 'Exfil', status: 'neutral' },
        ]}
      />
    );
    expect(diamondOf(container, 0).outer.className).not.toMatch(/shadow-/);
    expect(diamondOf(container, 1).outer.className).toMatch(/shadow-/);
    expect(diamondOf(container, 2).outer.className).not.toMatch(/shadow-/);
  });

  it('accepts TimelineEvent[] and TimelineItem[] variables (types)', () => {
    const legacy: TimelineEvent[] = [{ title: 'Legacy Log', time: 'Now', status: 'success' }];
    const items: TimelineItem[] = [{ title: 'Process Step', status: 'neutral' }];
    // A bare TimelineProps still describes TimelineEvent[], so `time` reads as a string.
    const props: TimelineProps = { events: legacy };
    const firstTime: string = props.events[0].time;
    render(
      <>
        <Timeline events={legacy} />
        <Timeline events={items} />
      </>
    );
    expect(firstTime).toBe('Now');
    expect(screen.getByText('Legacy Log')).toBeInTheDocument();
    expect(screen.getByText('Process Step')).toBeInTheDocument();
  });
});
