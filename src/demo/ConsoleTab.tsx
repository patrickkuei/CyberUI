import React, { useState } from "react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Divider from "../components/Divider";
import Avatar from "../components/Avatar";
import FormField from "../components/FormField";
import RadioGroup from "../components/RadioGroup";
import DropdownMenu from "../components/DropdownMenu";
import Accordion from "../components/Accordion";
import Tooltip from "../components/Tooltip";
import Pagination from "../components/Pagination";
import TabNavigation from "../components/TabNavigation";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Table from "../components/Table";
import type { TableColumn } from "../components/Table";
import { useCyberNotifications } from "../hooks/useCyberNotifications";

const ARCHIVE_FILTERS = ["All", "Flagged", "Classified"] as const;

type ArchiveStatus = "Open" | "Flagged" | "Classified";

interface ArchiveRecord {
  id: string;
  subject: string;
  status: ArchiveStatus;
}

const ARCHIVE_STATUS_VARIANT = {
  Open: "success",
  Flagged: "warning",
  Classified: "error",
} as const;

const RECORD_TEMPLATES: ReadonlyArray<Pick<ArchiveRecord, "subject" | "status">> = [
  { subject: "Arasaka mainframe intrusion", status: "Flagged" },
  { subject: "Militech implant shipment", status: "Open" },
  { subject: "Blackwall breach — sector 7", status: "Classified" },
  { subject: "Netwatch ICE anomaly", status: "Open" },
  { subject: "Kabuki black-market ripperdoc", status: "Flagged" },
  { subject: "Maelstrom safehouse raid", status: "Classified" },
];

const ARCHIVE_RECORDS: ArchiveRecord[] = Array.from({ length: 36 }, (_, i) => ({
  id: `#${4400 + i}`,
  ...RECORD_TEMPLATES[i % RECORD_TEMPLATES.length],
}));

const RECORDS_PER_PAGE = 3;

const RECORD_COLUMNS: TableColumn<ArchiveRecord>[] = [
  { key: "id", header: "Case", width: "90px" },
  { key: "subject", header: "Subject" },
  {
    key: "status",
    header: "Status",
    align: "center",
    render: (row) => (
      <Badge variant={ARCHIVE_STATUS_VARIANT[row.status]} size="sm">
        {row.status}
      </Badge>
    ),
  },
];

const fieldClasses =
  "w-full resize-none rounded-lg bg-surface text-default placeholder-muted border-2 border-accent px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent";

const ConsoleTab: React.FC = () => {
  const [missionNotes, setMissionNotes] = useState("");
  const [clearance, setClearance] = useState("gamma");
  const [archiveFilter, setArchiveFilter] = useState<string>(
    ARCHIVE_FILTERS[0]
  );
  const [archivePage, setArchivePage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState<ArchiveRecord | null>(
    null
  );

  const { showNotification } = useCyberNotifications();

  const filteredRecords =
    archiveFilter === "All"
      ? ARCHIVE_RECORDS
      : ARCHIVE_RECORDS.filter((record) => record.status === archiveFilter);
  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecords.length / RECORDS_PER_PAGE)
  );
  const pageRecords = filteredRecords.slice(
    (archivePage - 1) * RECORDS_PER_PAGE,
    archivePage * RECORDS_PER_PAGE
  );

  const handleFilterChange = (filter: string) => {
    setArchiveFilter(filter);
    setArchivePage(1);
  };

  const recordActions = [
    {
      label: "Flag Record",
      onClick: () =>
        showNotification(
          "warning",
          "ARCHIVE.SYS",
          "Record flagged for handler review"
        ),
    },
    {
      label: "Declassify",
      onClick: () =>
        showNotification(
          "success",
          "ARCHIVE.SYS",
          "Clearance requirement lowered to Delta"
        ),
    },
    {
      label: "Purge Entry",
      danger: true,
      onClick: () =>
        showNotification(
          "error",
          "ARCHIVE.SYS",
          "Record scheduled for permanent purge"
        ),
    },
  ];

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          Console
        </h2>
        <p className="text-muted">
          Operative processing and archive terminal
        </p>
      </div>

      <SectionTitle>Operative Dossier</SectionTitle>
      <Card>
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Known Contacts
            </label>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar alt="Handler V" status="online" size="lg" />
                <span className="text-xs text-muted">Handler</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar alt="Jackie Welles" status="away" size="lg" />
                <span className="text-xs text-muted">Field Contact</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar alt="Unregistered Contact" status="offline" size="lg" />
                <span className="text-xs text-muted">Unknown</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Mission Notes"
              helperText="Debrief summary — visible to your handler only."
              required
            >
              <textarea
                value={missionNotes}
                onChange={(e) => setMissionNotes(e.target.value)}
                rows={4}
                placeholder="Log field observations..."
                className={fieldClasses}
              />
            </FormField>

            <RadioGroup
              label="Security Clearance"
              value={clearance}
              onValueChange={setClearance}
              options={[
                { value: "delta", label: "Delta" },
                { value: "gamma", label: "Gamma" },
                { value: "omega", label: "Omega" },
              ]}
            />
          </div>
        </div>
      </Card>

      <Divider />

      <SectionTitle>Archive Navigation</SectionTitle>
      <Card>
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-default">
                Case File #4471
              </span>
              <Tooltip content="Actions apply to the entire record and cannot be undone once submitted.">
                <span
                  tabIndex={0}
                  className="inline-flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-border-default text-[10px] text-muted"
                  aria-label="Record action info"
                >
                  i
                </span>
              </Tooltip>
            </div>
            <DropdownMenu
              trigger={
                <Button variant="secondary" size="sm">
                  Actions
                </Button>
              }
              items={recordActions}
            />
          </div>

          <Accordion
            items={[
              {
                id: "case-4471",
                title: "Case File #4471 — Corporate Espionage",
                content: (
                  <p className="text-sm text-muted">
                    Subject accessed restricted Arasaka mainframe sectors on
                    three separate occasions. Surveillance footage archived
                    under encryption tier 3.
                  </p>
                ),
              },
              {
                id: "case-2098",
                title: "Case File #2098 — Cyberware Trafficking",
                content: (
                  <p className="text-sm text-muted">
                    Intercepted shipment of unregistered neural implants.
                    Origin traced to a Militech subcontractor. Investigation
                    ongoing.
                  </p>
                ),
              },
              {
                id: "case-0013",
                title: "Case File #0013 — Classified",
                content: (
                  <p className="text-sm text-muted">
                    Access restricted. Omega clearance required to view this
                    entry's contents.
                  </p>
                ),
                disabled: true,
              },
            ]}
          />

          <div>
            <span className="block text-sm font-medium text-default mb-3">
              Archive Filter
            </span>
            <TabNavigation
              tabs={ARCHIVE_FILTERS}
              activeTab={archiveFilter}
              onTabChange={handleFilterChange}
              mode="dropdown"
              size="sm"
            />
          </div>

          <div className="flex flex-col items-center gap-2 pt-2">
            <Pagination
              currentPage={archivePage}
              totalPages={totalPages}
              onPageChange={setArchivePage}
              size="sm"
            />
            <span className="text-xs text-muted">
              Showing {archiveFilter.toLowerCase()} results — page{" "}
              {archivePage} of {totalPages}
            </span>
          </div>
        </div>
      </Card>

      <SectionTitle>Operative Records</SectionTitle>
      <Card>
        <div className="space-y-4">
          <Table
            columns={RECORD_COLUMNS}
            data={pageRecords}
            getRowId={(row) => row.id}
            variant="striped"
            size="sm"
            caption="Archive records — driven by the filter and pager above"
            emptyMessage="No records match this clearance filter."
            onRowClick={setSelectedRecord}
          />
          <p className="text-xs text-muted" role="status">
            {selectedRecord
              ? `Decrypting ${selectedRecord.id} — ${selectedRecord.subject} [${selectedRecord.status.toUpperCase()}]`
              : "Select a record to decrypt its file."}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ConsoleTab;
