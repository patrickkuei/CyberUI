import React, { useState } from "react";
import Button from "../Button";

const InteractiveTab: React.FC = () => {
  const [input, setInput] = useState("");

  const handleAlert = (message: string) => {
    alert(message);
  };

  return (
    <div className="w-full max-w-4xl space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Interactive Components
        </h2>
        <p className="text-muted">
          Test input fields, buttons, and user interactions
        </p>
      </div>

      {/* Input & Controls Group */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-8">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          User Input
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Input */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-default mb-2">
              Neural Interface Command
            </label>
            <input
              type="text"
              placeholder="Enter command sequence..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-surface text-default placeholder-muted shadow-input-accent hover:shadow-lg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base"
            />
            <div className="text-xs text-muted font-mono">
              {input.length > 0
                ? `Input: ${input.length} characters`
                : "Awaiting neural input..."}
            </div>
          </div>

          {/* Search Input */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-default mb-2">
              Database Query
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search corporate database..."
                className="w-full px-4 py-3 pl-10 rounded-lg border-2 border-secondary bg-surface text-default placeholder-muted shadow-secondary/30 hover:shadow-secondary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs text-muted">
              Search through encrypted corporate files
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Group */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          System Actions
        </h3>

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
      </div>

      {/* Interactive Card Demo */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Interactive Demo Card
        </h3>

        <div className="bg-surface border-2 border-accent rounded-xl p-6 shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform">
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
              <div className="bg-base rounded-lg p-3 border border-border-default">
                <div className="text-primary font-mono font-bold">ONLINE</div>
                <div className="text-muted">Connection Status</div>
              </div>
              <div className="bg-base rounded-lg p-3 border border-border-default">
                <div className="text-secondary font-mono font-bold">87%</div>
                <div className="text-muted">Neural Sync Rate</div>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default InteractiveTab;
