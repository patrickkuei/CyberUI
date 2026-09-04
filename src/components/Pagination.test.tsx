import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
  });

  it('renders a button for every page when the total fits without collapsing', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    for (const page of [1, 2, 3, 4, 5]) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument();
    }
  });

  it('marks the current page with aria-current="page"', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Page 2' })).not.toHaveAttribute('aria-current');
  });

  it('calls onPageChange with the clicked page number', () => {
    const handleChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Page 3' }));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('does not call onPageChange when clicking the already-current page', () => {
    const handleChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={handleChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Page 2' }));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is controlled: currentPage does not change until the prop is updated', () => {
    const handleChange = vi.fn();
    const { rerender } = render(<Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Page 4' }));
    expect(handleChange).toHaveBeenCalledWith(4);
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');

    rerender(<Pagination currentPage={4} totalPages={5} onPageChange={handleChange} />);
    expect(screen.getByRole('button', { name: 'Page 4' })).toHaveAttribute('aria-current', 'page');
  });

  it('advances/retreats a page via Next/Previous controls', () => {
    const handleChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={handleChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next page' }));
    expect(handleChange).toHaveBeenCalledWith(4);
    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('disables Previous on the first page and Next on the last page', () => {
    const { rerender } = render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled();

    rerender(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled();
  });

  it('omits Previous/Next controls when showPrevNext is false', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} showPrevNext={false} />);
    expect(screen.queryByRole('button', { name: 'Previous page' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Next page' })).toBeNull();
  });

  it('collapses distant pages behind an ellipsis in compact mode', () => {
    render(<Pagination currentPage={10} totalPages={20} onPageChange={() => {}} />);
    // Boundary pages, siblings, and an ellipsis on both sides — not every page renders.
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 20' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 10' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Page 15' })).toBeNull();
    expect(screen.getAllByText('…').length).toBeGreaterThan(0);
  });

  it('renders every page when compact is false, even for large totals', () => {
    render(<Pagination currentPage={10} totalPages={20} onPageChange={() => {}} compact={false} />);
    for (let page = 1; page <= 20; page++) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument();
    }
    expect(screen.queryByText('…')).toBeNull();
  });

  it('respects custom siblingCount and boundaryCount in compact mode', () => {
    render(
      <Pagination currentPage={10} totalPages={20} onPageChange={() => {}} siblingCount={2} boundaryCount={0} />
    );
    expect(screen.queryByRole('button', { name: 'Page 1' })).toBeNull();
    for (const page of [8, 9, 10, 11, 12]) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument();
    }
  });

  it('jumps to the first page on Home and the last page on End', () => {
    const handleChange = vi.fn();
    render(<Pagination currentPage={5} totalPages={20} onPageChange={handleChange} />);
    fireEvent.keyDown(screen.getByRole('navigation'), { key: 'Home' });
    expect(handleChange).toHaveBeenCalledWith(1);
    fireEvent.keyDown(screen.getByRole('navigation'), { key: 'End' });
    expect(handleChange).toHaveBeenCalledWith(20);
  });

  it('disables every control and prevents selection when disabled', () => {
    const handleChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={handleChange} disabled />);
    const pageThree = screen.getByRole('button', { name: 'Page 3' });
    expect(pageThree).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    fireEvent.click(pageThree);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders nothing when totalPages is less than 1', () => {
    const { container } = render(<Pagination currentPage={1} totalPages={0} onPageChange={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('applies a custom aria-label and className to the nav landmark', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
        ariaLabel="Archive pages"
        className="custom-pagination"
      />
    );
    const nav = screen.getByRole('navigation', { name: 'Archive pages' });
    expect(nav).toHaveClass('custom-pagination');
  });

  it('applies a responsive size prop without crashing', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
        size={{ base: 'sm', md: 'lg' }}
      />
    );
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
  });

  it('keeps the current page\'s siblings visible when the ellipsis is transitioning near a boundary', () => {
    // Regression: the near-boundary branches used to compute a fixed-width
    // range instead of [leftSibling, rightSibling], silently dropping the
    // sibling adjacent to currentPage.
    const { rerender } = render(<Pagination currentPage={17} totalPages={20} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Page 16' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 17' })).toBeInTheDocument();

    rerender(<Pagination currentPage={4} totalPages={20} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument();
  });

  it('clamps an out-of-range currentPage instead of leaving Previous enabled but inert', () => {
    // Regression: an unclamped currentPage let Previous render enabled while
    // goTo() silently no-op'd on click, with no visible explanation.
    const handleChange = vi.fn();
    render(<Pagination currentPage={999} totalPages={5} onPageChange={handleChange} />);
    expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('never renders a hover-shadow class on a disabled Prev/Next control', () => {
    // Regression: tailwind-merge doesn't dedupe this project's custom
    // --shadow-* theme tokens, so a disabled button that combined an active
    // hover:shadow-<variant> class with a hover:shadow-none override left
    // both in the DOM, with CSS source order (not the override) deciding
    // which one applied on hover.
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    const previous = screen.getByRole('button', { name: 'Previous page' });
    expect(previous.className).not.toMatch(/hover:shadow-/);
  });
});
