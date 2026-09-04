import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TabNavigation from './TabNavigation';

const tabs = ['NEURAL', 'SIGNAL', 'CORTEX'];

describe('TabNavigation Component', () => {
  it('renders all tabs in scroll mode', () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="scroll" />);
    expect(screen.getByText('NEURAL')).toBeInTheDocument();
    expect(screen.getByText('SIGNAL')).toBeInTheDocument();
    expect(screen.getByText('CORTEX')).toBeInTheDocument();
  });

  it('calls onTabChange when a tab is clicked', () => {
    const handleTabChange = vi.fn();
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={handleTabChange} />);
    
    const tabSignal = screen.getByText('SIGNAL');
    fireEvent.click(tabSignal);
    
    expect(handleTabChange).toHaveBeenCalledWith('SIGNAL');
  });

  it('marks the active tab with aria-selected', () => {
    render(<TabNavigation tabs={tabs} activeTab="CORTEX" onTabChange={vi.fn()} />);
    const tabCortex = screen.getByRole('tab', { name: 'CORTEX' });
    expect(tabCortex).toHaveAttribute('aria-selected', 'true');
    
    const tabNeural = screen.getByRole('tab', { name: 'NEURAL' });
    expect(tabNeural).toHaveAttribute('aria-selected', 'false');
  });

  it('renders in dropdown mode and opens on click', async () => {
    render(<TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />);

    // In dropdown mode, active tab label is shown on the button
    const dropdownButton = screen.getByRole('button', { expanded: false });
    expect(dropdownButton).toHaveTextContent('NEURAL');

    fireEvent.click(dropdownButton);
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');

    // Tabs should now be visible in the dropdown menu
    expect(await screen.findByText('SIGNAL', { selector: 'button span' })).toBeInTheDocument();
  });

  it('does not update state after unmount from a pending tab-select close timer', () => {
    // Regression: selecting a tab (closeOnSelect) scheduled an untracked
    // setTimeout that fired setState even after the component unmounted.
    vi.useFakeTimers();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const { unmount } = render(
        <TabNavigation tabs={tabs} activeTab="NEURAL" onTabChange={vi.fn()} mode="dropdown" />
      );
      fireEvent.click(screen.getByRole('button', { expanded: false }));
      fireEvent.click(screen.getByText('SIGNAL', { selector: 'button span' }));

      unmount();
      vi.advanceTimersByTime(200);

      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
      vi.useRealTimers();
    }
  });
});
