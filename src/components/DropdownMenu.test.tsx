import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DropdownMenu from './DropdownMenu';
import type { DropdownMenuItem } from './DropdownMenu';
import Button from './Button';

const ITEMS: DropdownMenuItem[] = [
  { label: 'Edit', onClick: vi.fn() },
  { label: 'Duplicate', onClick: vi.fn() },
  { label: 'Delete', danger: true, onClick: vi.fn() },
];

const trigger = <Button variant="secondary">Actions</Button>;

describe('DropdownMenu', () => {
  it('renders the trigger without crashing and keeps the menu out of the DOM while closed', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    expect(screen.getByRole('button', { name: 'Actions' })).toBeInTheDocument();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('wires aria-haspopup/aria-expanded/aria-controls on the trigger', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    const triggerButton = screen.getByRole('button', { name: 'Actions' });
    expect(triggerButton).toHaveAttribute('aria-haspopup', 'menu');
    expect(triggerButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(triggerButton);
    const menu = screen.getByRole('menu');
    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    expect(triggerButton.getAttribute('aria-controls')).toBe(menu.id);
  });

  it('opens the menu on trigger click and shows all items as menuitems', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toBeInTheDocument();
  });

  it('closes the menu on a second trigger click', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    const triggerButton = screen.getByRole('button', { name: 'Actions' });
    fireEvent.click(triggerButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.click(triggerButton);
    await waitFor(() => expect(triggerButton).toHaveAttribute('aria-expanded', 'false'));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes when clicking outside the menu', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('calls the item onClick handler and closes the menu by default', async () => {
    const handleClick = vi.fn();
    const items: DropdownMenuItem[] = [{ label: 'Edit', onClick: handleClick }];
    render(<DropdownMenu items={items} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('keeps the menu open after selecting when closeOnSelect is false', () => {
    const handleClick = vi.fn();
    const items: DropdownMenuItem[] = [{ label: 'Edit', onClick: handleClick }];
    render(<DropdownMenu items={items} trigger={trigger} closeOnSelect={false} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('does not fire onClick and stays disabled for a disabled item', () => {
    const handleClick = vi.fn();
    const items: DropdownMenuItem[] = [
      { label: 'Edit', onClick: vi.fn() },
      { label: 'Locked', disabled: true, onClick: handleClick },
    ];
    render(<DropdownMenu items={items} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const lockedItem = screen.getByRole('menuitem', { name: 'Locked' });
    expect(lockedItem).toBeDisabled();
    fireEvent.click(lockedItem);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the danger treatment class to items marked danger', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveClass('text-error');
  });

  it('gives items a keyboard-only focus ring (focus-visible), not just outline-none', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-secondary/70');
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-error/70');
  });

  it('opens focused on the first item when ArrowDown is pressed on the trigger', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    const triggerButton = screen.getByRole('button', { name: 'Actions' });
    fireEvent.keyDown(triggerButton, { key: 'ArrowDown' });

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    await waitFor(() => expect(editItem).toHaveFocus());
  });

  it('opens focused on the last item when ArrowUp is pressed on the trigger', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    const triggerButton = screen.getByRole('button', { name: 'Actions' });
    fireEvent.keyDown(triggerButton, { key: 'ArrowUp' });

    const deleteItem = await screen.findByRole('menuitem', { name: 'Delete' });
    await waitFor(() => expect(deleteItem).toHaveFocus());
  });

  it('moves focus between items with ArrowDown/ArrowUp, wrapping at the ends', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    const duplicateItem = screen.getByRole('menuitem', { name: 'Duplicate' });
    const deleteItem = screen.getByRole('menuitem', { name: 'Delete' });

    await waitFor(() => expect(editItem).toHaveFocus());
    fireEvent.keyDown(editItem, { key: 'ArrowDown' });
    expect(duplicateItem).toHaveFocus();
    fireEvent.keyDown(duplicateItem, { key: 'ArrowDown' });
    expect(deleteItem).toHaveFocus();
    fireEvent.keyDown(deleteItem, { key: 'ArrowDown' });
    expect(editItem).toHaveFocus();

    fireEvent.keyDown(editItem, { key: 'ArrowUp' });
    expect(deleteItem).toHaveFocus();
  });

  it('skips disabled items during arrow-key navigation', async () => {
    const items: DropdownMenuItem[] = [
      { label: 'Edit', onClick: vi.fn() },
      { label: 'Locked', disabled: true, onClick: vi.fn() },
      { label: 'Delete', onClick: vi.fn() },
    ];
    render(<DropdownMenu items={items} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    const deleteItem = screen.getByRole('menuitem', { name: 'Delete' });
    await waitFor(() => expect(editItem).toHaveFocus());

    fireEvent.keyDown(editItem, { key: 'ArrowDown' });
    expect(deleteItem).toHaveFocus();
  });

  it('jumps to the first/last item on Home/End', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    const deleteItem = screen.getByRole('menuitem', { name: 'Delete' });
    await waitFor(() => expect(editItem).toHaveFocus());

    fireEvent.keyDown(editItem, { key: 'End' });
    expect(deleteItem).toHaveFocus();
    fireEvent.keyDown(deleteItem, { key: 'Home' });
    expect(editItem).toHaveFocus();
  });

  it('selects the focused item on Enter', async () => {
    const handleClick = vi.fn();
    const items: DropdownMenuItem[] = [{ label: 'Edit', onClick: handleClick }];
    render(<DropdownMenu items={items} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    await waitFor(() => expect(editItem).toHaveFocus());
    fireEvent.keyDown(editItem, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('selects the focused item on Space', async () => {
    const handleClick = vi.fn();
    const items: DropdownMenuItem[] = [{ label: 'Edit', onClick: handleClick }];
    render(<DropdownMenu items={items} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    await waitFor(() => expect(editItem).toHaveFocus());
    fireEvent.keyDown(editItem, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('closes the menu on Tab without preventing the default focus-out', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    await waitFor(() => expect(editItem).toHaveFocus());
    const tabEvent = fireEvent.keyDown(editItem, { key: 'Tab' });

    expect(tabEvent).toBe(true); // preventDefault() was NOT called, so Tab still moves focus natively
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('composes the trigger element\'s own onClick/onKeyDown instead of overwriting them', async () => {
    const ownOnClick = vi.fn();
    const ownOnKeyDown = vi.fn();
    render(
      <DropdownMenu
        items={ITEMS}
        trigger={
          <Button variant="secondary" onClick={ownOnClick} onKeyDown={ownOnKeyDown}>
            Actions
          </Button>
        }
      />
    );
    const triggerButton = screen.getByRole('button', { name: 'Actions' });

    fireEvent.click(triggerButton);
    expect(ownOnClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.keyDown(triggerButton, { key: 'Escape' });
    expect(ownOnKeyDown).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} />);
    const triggerButton = screen.getByRole('button', { name: 'Actions' });
    fireEvent.click(triggerButton);

    const editItem = await screen.findByRole('menuitem', { name: 'Edit' });
    await waitFor(() => expect(editItem).toHaveFocus());
    fireEvent.keyDown(editItem, { key: 'Escape' });

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    expect(triggerButton).toHaveFocus();
  });

  it('never opens when disabled', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} disabled />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('respects controlled open/onOpenChange without self-managing state', () => {
    const handleOpenChange = vi.fn();
    const { rerender } = render(
      <DropdownMenu items={ITEMS} trigger={trigger} open={false} onOpenChange={handleOpenChange} />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(handleOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    rerender(<DropdownMenu items={ITEMS} trigger={trigger} open onOpenChange={handleOpenChange} />);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('supports a render-prop trigger', () => {
    render(
      <DropdownMenu
        items={ITEMS}
        trigger={(triggerProps) => <button {...triggerProps}>Custom Trigger</button>}
      />
    );
    const customTrigger = screen.getByRole('button', { name: 'Custom Trigger' });
    expect(customTrigger).toHaveAttribute('aria-haspopup', 'menu');
    fireEvent.click(customTrigger);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('applies a responsive size prop without crashing', () => {
    render(<DropdownMenu items={ITEMS} trigger={trigger} size={{ base: 'sm', md: 'lg' }} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});
