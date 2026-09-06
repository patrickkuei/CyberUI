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
import { useCyberNotifications } from "../hooks/useCyberNotifications";

const ARCHIVE_FILTERS = ["All", "Flagged", "Classified"] as const;

const fieldClasses =
  "w-full resize-none rounded-lg bg-surface text-default placeholder-muted border-2 border-accent px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent";

const ConsoleTab: React.FC = () => {
  const [missionNotes, setMissionNotes] = useState("");
  const [clearance, setClearance] = useState("gamma");
  const [archiveFilter, setArchiveFilter] = useState<string>(
    ARCHIVE_FILTERS[0]
  );
  const [archivePage, setArchivePage] = useState(1);

  const { showNotification } = useCyberNotifications();

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
              onTabChange={setArchiveFilter}
              mode="dropdown"
              size="sm"
            />
          </div>

          <div className="flex flex-col items-center gap-2 pt-2">
            <Pagination
              currentPage={archivePage}
              totalPages={12}
              onPageChange={setArchivePage}
              size="sm"
            />
            <span className="text-xs text-muted">
              Showing {archiveFilter.toLowerCase()} results — page{" "}
              {archivePage} of 12
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ConsoleTab;
