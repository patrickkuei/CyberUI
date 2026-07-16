import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Accordion from './Accordion';
import type { AccordionItem } from './Accordion';

const ITEMS: AccordionItem[] = [
  { id: 'a', title: 'Section A', content: 'Content A' },
  { id: 'b', title: 'Section B', content: 'Content B' },
  { id: 'c', title: 'Section C', content: 'Content C' },
];

describe('Accordion', () => {
  it('renders all headers without crashing', () => {
    render(<Accordion items={ITEMS} />);
    expect(screen.getByText('Section A')).toBeInTheDocument();
    expect(screen.getByText('Section B')).toBeInTheDocument();
    expect(screen.getByText('Section C')).toBeInTheDocument();
  });

  it('starts fully collapsed by default', () => {
    render(<Accordion items={ITEMS} />);
    for (const item of ITEMS) {
      expect(screen.getByRole('button', { name: item.title })).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it('respects defaultOpenIds for uncontrolled initial state', () => {
    render(<Accordion items={ITEMS} defaultOpenIds={['b']} />);
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Section B' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles a panel open and closed on click', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    fireEvent.click(headerA);
    expect(headerA).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(headerA);
    expect(headerA).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the previously open panel in single mode', () => {
    render(<Accordion items={ITEMS} mode="single" />);
    fireEvent.click(screen.getByRole('button', { name: 'Section A' }));
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(screen.getByRole('button', { name: 'Section B' }));
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Section B' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('keeps multiple panels open independently in multiple mode', () => {
    render(<Accordion items={ITEMS} mode="multiple" />);
    fireEvent.click(screen.getByRole('button', { name: 'Section A' }));
    fireEvent.click(screen.getByRole('button', { name: 'Section B' }));
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Section B' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('wires aria-controls on the header to the panel id', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const controlsId = headerA.getAttribute('aria-controls');
    expect(controlsId).toBeTruthy();
    expect(document.getElementById(controlsId as string)).toHaveTextContent('Content A');
  });

  it('sets aria-hidden on a collapsed panel and clears it when open', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const panelId = headerA.getAttribute('aria-controls') as string;
    expect(document.getElementById(panelId)).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(headerA);
    expect(document.getElementById(panelId)).toHaveAttribute('aria-hidden', 'false');
  });

  it('moves focus to the next header on ArrowDown, wrapping to the first', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const headerB = screen.getByRole('button', { name: 'Section B' });
    const headerC = screen.getByRole('button', { name: 'Section C' });
    headerA.focus();
    fireEvent.keyDown(headerA, { key: 'ArrowDown' });
    expect(headerB).toHaveFocus();
    fireEvent.keyDown(headerB, { key: 'ArrowDown' });
    expect(headerC).toHaveFocus();
    fireEvent.keyDown(headerC, { key: 'ArrowDown' });
    expect(headerA).toHaveFocus();
  });

  it('moves focus to the previous header on ArrowUp, wrapping to the last', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const headerC = screen.getByRole('button', { name: 'Section C' });
    headerA.focus();
    fireEvent.keyDown(headerA, { key: 'ArrowUp' });
    expect(headerC).toHaveFocus();
  });

  it('moves focus to the first/last header on Home/End', () => {
    render(<Accordion items={ITEMS} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const headerB = screen.getByRole('button', { name: 'Section B' });
    const headerC = screen.getByRole('button', { name: 'Section C' });
    headerB.focus();
    fireEvent.keyDown(headerB, { key: 'End' });
    expect(headerC).toHaveFocus();
    fireEvent.keyDown(headerC, { key: 'Home' });
    expect(headerA).toHaveFocus();
  });

  it('skips disabled items during arrow-key navigation', () => {
    const items: AccordionItem[] = [
      { id: 'a', title: 'Section A', content: 'Content A' },
      { id: 'b', title: 'Section B', content: 'Content B', disabled: true },
      { id: 'c', title: 'Section C', content: 'Content C' },
    ];
    render(<Accordion items={items} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const headerC = screen.getByRole('button', { name: 'Section C' });
    headerA.focus();
    fireEvent.keyDown(headerA, { key: 'ArrowDown' });
    expect(headerC).toHaveFocus();
  });

  it('does not toggle a disabled item on click', () => {
    const items: AccordionItem[] = [
      { id: 'a', title: 'Section A', content: 'Content A', disabled: true },
    ];
    render(<Accordion items={items} />);
    const header = screen.getByRole('button', { name: 'Section A' });
    expect(header).toBeDisabled();
    fireEvent.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('respects controlled openIds and calls onOpenIdsChange without self-managing state', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Accordion items={ITEMS} openIds={[]} onOpenIdsChange={handleChange} />
    );
    const headerA = screen.getByRole('button', { name: 'Section A' });
    fireEvent.click(headerA);
    expect(handleChange).toHaveBeenCalledWith(['a']);
    expect(headerA).toHaveAttribute('aria-expanded', 'false');

    rerender(<Accordion items={ITEMS} openIds={['a']} onOpenIdsChange={handleChange} />);
    expect(headerA).toHaveAttribute('aria-expanded', 'true');
  });

  it('auto-generates stable ids when items omit an explicit id', () => {
    const items: AccordionItem[] = [{ title: 'No Id Section', content: 'Body' }];
    render(<Accordion items={items} />);
    const header = screen.getByRole('button', { name: 'No Id Section' });
    expect(header.id).toBeTruthy();
    expect(header.getAttribute('aria-controls')).toBeTruthy();
  });

  it('applies responsive size prop without crashing', () => {
    render(<Accordion items={ITEMS} size={{ base: 'sm', md: 'lg' }} />);
    expect(screen.getByText('Section A')).toBeInTheDocument();
  });

  it('marks a collapsed panel inert so focusable content is unreachable, and clears it when open', () => {
    const items: AccordionItem[] = [
      { id: 'a', title: 'Section A', content: <a href="#x">A link</a> },
    ];
    render(<Accordion items={items} />);
    const headerA = screen.getByRole('button', { name: 'Section A' });
    const panelId = headerA.getAttribute('aria-controls') as string;
    const panel = document.getElementById(panelId) as HTMLElement;
    expect(panel).toHaveAttribute('inert');

    fireEvent.click(headerA);
    expect(panel).not.toHaveAttribute('inert');
  });
});
