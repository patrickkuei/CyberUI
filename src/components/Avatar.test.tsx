import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './Avatar';

describe('Avatar Component', () => {
  it('renders an image when src is provided', () => {
    render(<Avatar src="/operatives/ghost.png" alt="Ghost" />);
    const image = document.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/operatives/ghost.png');
  });

  it('exposes the accessible name via role="img" aria-label, not on the raw <img>', () => {
    render(<Avatar src="/operatives/ghost.png" alt="Ghost" />);
    expect(screen.getByRole('img', { name: 'Ghost' })).toBeInTheDocument();
  });

  it('derives initials from a two-word alt when there is no src', () => {
    render(<Avatar alt="Case Pollard" />);
    // The glitch effect renders the initials twice (base + offset overlay copy).
    expect(screen.getAllByText('CP').length).toBeGreaterThan(0);
  });

  it('derives initials from a single-word alt', () => {
    render(<Avatar alt="Wintermute" />);
    expect(screen.getAllByText('WI').length).toBeGreaterThan(0);
  });

  it('prefers explicit initials over ones derived from alt', () => {
    render(<Avatar alt="Case Pollard" initials="XX" />);
    expect(screen.getAllByText('XX').length).toBeGreaterThan(0);
    expect(screen.queryByText('CP')).not.toBeInTheDocument();
  });

  it('falls back to the default icon when initials cannot be derived and none are given', () => {
    render(<Avatar alt="Unregistered operative" initials="" />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('renders a custom fallbackIcon when provided', () => {
    render(
      <Avatar
        alt="Unregistered operative"
        initials=""
        fallbackIcon={<span data-testid="custom-fallback">?</span>}
      />
    );
    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
  });

  it('falls back to initials when the image fails to load', () => {
    render(<Avatar src="/broken.png" alt="Case Pollard" />);
    const image = document.querySelector('img')!;
    fireEvent.error(image);
    expect(document.querySelector('img')).not.toBeInTheDocument();
    expect(screen.getAllByText('CP').length).toBeGreaterThan(0);
  });

  it('renders no status dot by default', () => {
    render(<Avatar alt="Ghost" />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('renders an online status dot with an accessible label', () => {
    render(<Avatar alt="Nyx" status="online" />);
    expect(screen.getByRole('status', { name: 'Online' })).toBeInTheDocument();
  });

  it('renders an away status dot', () => {
    render(<Avatar alt="Molly Millions" status="away" />);
    expect(screen.getByRole('status', { name: 'Away' })).toBeInTheDocument();
  });

  it('renders an offline status dot', () => {
    render(<Avatar alt="Wintermute" status="offline" />);
    expect(screen.getByRole('status', { name: 'Offline' })).toBeInTheDocument();
  });

  it('applies a custom className to the outer container', () => {
    const { container } = render(<Avatar alt="Ghost" className="ring-4" />);
    expect(container.firstChild).toHaveClass('ring-4');
  });

  it('renders without error for each preset size', () => {
    (['sm', 'md', 'lg', 'xl'] as const).forEach((size) => {
      const { unmount } = render(<Avatar alt="Ghost" size={size} />);
      expect(screen.getByRole('img', { name: 'Ghost' })).toBeInTheDocument();
      unmount();
    });
  });

  it('applies responsive size classes without error', () => {
    render(<Avatar alt="Ghost" size={{ base: 'sm', lg: 'xl' }} />);
    expect(screen.getByRole('img', { name: 'Ghost' })).toBeInTheDocument();
  });
});
