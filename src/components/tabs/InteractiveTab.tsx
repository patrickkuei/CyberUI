import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Card from "../Card";

const InteractiveTab: React.FC = () => {
  const [input, setInput] = useState("");

  const handleAlert = (message: string) => {
    alert(message);
  };

  // Search Icon Component
  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          Interactive Components
        </h2>
        <p className="text-muted">
          Test input fields, buttons, and user interactions
        </p>
      </div>

            {/* Input & Controls Group */}
      <Card title="User Input">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Input */}
          <Input
            variant="primary"
            label="Neural Interface Command"
            placeholder="Enter command sequence..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            helperText={
              input.length > 0
                ? `Input: ${input.length} characters`
                : "Awaiting neural input..."
            }
          />

          {/* Search Input */}
          <Input
            variant="secondary"
            label="Database Query"
            placeholder="Search corporate database..."
            leftIcon={<SearchIcon />}
            helperText="Search through encrypted corporate files"
          />
        </div>
      </Card>

      {/* Action Buttons Group */}
      <Card title="System Actions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Primary Action */}
          <Button
            variant="primary"
            onClick={() => handleAlert("Initiating neural link protocol...")}
          >
            Execute Protocol
          </Button>

          {/* Secondary Action */}
          <Button
            variant="secondary"
            onClick={() => handleAlert("Running system diagnostics...")}
          >
            Scan System
          </Button>

          {/* Danger Action */}
          <Button
            variant="danger"
            onClick={() =>
              handleAlert("Warning: Initiating shutdown sequence...")
            }
          >
            Emergency Stop
          </Button>

          <Button
            variant="ghost"
            onClick={() =>
              handleAlert("Loading system diagnostics interface...")
            }
          >
            Run Diagnostics
          </Button>
        </div>

        {/* Disabled Button Demo */}
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          System Status: Offline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="primary" disabled>
            System Offline
          </Button>
          <Button variant="secondary" disabled>
            Access Denied
          </Button>
          <Button variant="danger" disabled>
            Critical Error
          </Button>
          <Button variant="ghost" disabled>
            Network Down
          </Button>
        </div>
      </Card>

      {/* Interactive Card Demo */}
      <Card title="Interactive Demo Card">
        <Card variant="accent" titleBorder={false}>
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-default">
                Neural Interface Status
              </h4>
              <p className="text-muted">
                Monitor and control your cybernetic enhancements through this
                interactive panel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <Card variant="small">
                <div className="text-primary font-mono font-bold">ONLINE</div>
                <div className="text-muted">Connection Status</div>
              </Card>
              <Card variant="small">
                <div className="text-secondary font-mono font-bold">87%</div>
                <div className="text-muted">Neural Sync Rate</div>
              </Card>
            </div>

            <div className="flex space-x-3">
              <Button variant="primary" size="sm" className="flex-1">
                Sync
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                Monitor
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default InteractiveTab;
