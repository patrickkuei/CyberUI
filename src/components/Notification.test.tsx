import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Notification from './Notification';

describe('Notification Component', () => {
  it('renders success type correctly', () => {
    render(
      <Notification 
        type="success" 
        title="Protocol Alpha" 
        message="Neutral sync established." 
      />
    );
    expect(screen.getByText('Protocol Alpha')).toBeInTheDocument();
    expect(screen.getByText('Neutral sync established.')).toBeInTheDocument();
  });

  it('renders error type with alert role', () => {
    render(
      <Notification 
        type="error" 
        title="System Breach" 
        message="Firewall bypassed." 
      />
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Notification 
        type="warning" 
        title="Warning" 
        message="Low battery." 
        onClose={handleClose} 
      />
    );
    
    const closeButton = screen.getByLabelText('Close notification');
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render close button if onClose is not provided', () => {
    render(
      <Notification 
        type="success" 
        title="Title" 
        message="Message" 
      />
    );
    expect(screen.queryByLabelText('Close notification')).not.toBeInTheDocument();
  });
});
