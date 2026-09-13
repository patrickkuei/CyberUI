import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Table from './Table';
import type { TableColumn, TableRowData } from './Table';

const COLUMNS: TableColumn[] = [
  { key: 'callsign', header: 'Callsign' },
  { key: 'status', header: 'Status', align: 'center' },
];

const DATA: TableRowData[] = [
  { callsign: 'Ghost', status: 'Online' },
  { callsign: 'Wraith', status: 'Offline' },
  { callsign: 'Case', status: 'Online' },
];

describe('Table', () => {
  it('renders headers and row cells without crashing', () => {
    render(<Table columns={COLUMNS} data={DATA} />);
    expect(screen.getByRole('columnheader', { name: 'Callsign' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Status' })).toBeInTheDocument();
    expect(screen.getByText('Ghost')).toBeInTheDocument();
    expect(screen.getByText('Wraith')).toBeInTheDocument();
    expect(screen.getByText('Case')).toBeInTheDocument();
  });

  it('renders one row per data entry', () => {
    render(<Table columns={COLUMNS} data={DATA} />);
    expect(screen.getAllByRole('row')).toHaveLength(DATA.length + 1); // + header row
  });

  it('uses a custom render function to compute cell content', () => {
    const columns: TableColumn[] = [
      { key: 'callsign', header: 'Callsign' },
      { key: 'status', header: 'Status', render: (row) => `[${row.status}]` },
    ];
    render(<Table columns={columns} data={DATA} />);
    expect(screen.getByText('[Offline]')).toBeInTheDocument();
    expect(screen.getAllByText('[Online]')).toHaveLength(2);
  });

  it('renders emptyMessage when data is empty', () => {
    render(<Table columns={COLUMNS} data={[]} />);
    expect(screen.getByText('No data available.')).toBeInTheDocument();
  });

  it('renders a custom emptyMessage', () => {
    render(<Table columns={COLUMNS} data={[]} emptyMessage="No operatives deployed." />);
    expect(screen.getByText('No operatives deployed.')).toBeInTheDocument();
  });

  it('renders a caption when provided', () => {
    render(<Table columns={COLUMNS} data={DATA} caption="Active Field Operatives" />);
    expect(screen.getByText('Active Field Operatives')).toBeInTheDocument();
  });

  it('sets aria-label on the table when no caption is given', () => {
    render(<Table columns={COLUMNS} data={DATA} ariaLabel="Operative roster" />);
    expect(screen.getByRole('table')).toHaveAttribute('aria-label', 'Operative roster');
  });

  it('does not set aria-label when a caption is present', () => {
    render(<Table columns={COLUMNS} data={DATA} caption="Roster" ariaLabel="Operative roster" />);
    expect(screen.getByRole('table')).not.toHaveAttribute('aria-label');
  });

  it('is not focusable and has no click handler by default', () => {
    render(<Table columns={COLUMNS} data={DATA} />);
    const dataRows = screen.getAllByRole('row').slice(1);
    for (const row of dataRows) {
      expect(row).not.toHaveAttribute('tabindex');
    }
  });

  it('fires onRowClick on click and makes rows keyboard-focusable', () => {
    const handleClick = vi.fn();
    render(<Table columns={COLUMNS} data={DATA} onRowClick={handleClick} />);
    const dataRows = screen.getAllByRole('row').slice(1);
    fireEvent.click(dataRows[0]);
    expect(handleClick).toHaveBeenCalledWith(DATA[0], 0);
    for (const row of dataRows) {
      expect(row).toHaveAttribute('tabindex', '0');
    }
  });

  it('fires onRowClick on Enter and Space when a row has focus', () => {
    const handleClick = vi.fn();
    render(<Table columns={COLUMNS} data={DATA} onRowClick={handleClick} />);
    const dataRows = screen.getAllByRole('row').slice(1);
    fireEvent.keyDown(dataRows[1], { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledWith(DATA[1], 1);
    fireEvent.keyDown(dataRows[2], { key: ' ' });
    expect(handleClick).toHaveBeenCalledWith(DATA[2], 2);
  });

  it('ignores other keys when onRowClick is set', () => {
    const handleClick = vi.fn();
    render(<Table columns={COLUMNS} data={DATA} onRowClick={handleClick} />);
    const dataRows = screen.getAllByRole('row').slice(1);
    fireEvent.keyDown(dataRows[0], { key: 'Tab' });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('uses getRowId for row keys instead of index when provided', () => {
    const getRowId = vi.fn((row: TableRowData) => row.callsign as string);
    render(<Table columns={COLUMNS} data={DATA} getRowId={getRowId} />);
    expect(getRowId).toHaveBeenCalledTimes(DATA.length);
  });

  it('applies responsive size prop without crashing', () => {
    render(<Table columns={COLUMNS} data={DATA} size={{ base: 'sm', md: 'lg' }} />);
    expect(screen.getByText('Ghost')).toBeInTheDocument();
  });

  it('renders scope="col" on header cells', () => {
    render(<Table columns={COLUMNS} data={DATA} />);
    expect(screen.getByRole('columnheader', { name: 'Callsign' })).toHaveAttribute('scope', 'col');
  });
});
