import React, { useState } from 'react';

const InteractiveTab: React.FC = () => {
  const [input, setInput] = useState('');

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
                : 'Awaiting neural input...'}
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
          <button
            className="group relative overflow-hidden py-2 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-linear-(--gradient-accent) text-base shadow-primary border-none transition-all duration-300 ease-in-out transform hover:shadow-lg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent active:scale-95 cursor-pointer"
            onClick={() => handleAlert('Initiating neural link protocol...')}
          >
            <span className="relative z-10">Execute Protocol</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {/* Secondary Action */}
          <button
            className="group py-2 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-secondary text-secondary shadow-secondary/30 transition-all duration-300 ease-in-out transform hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary active:scale-95 cursor-pointer"
            onClick={() => handleAlert('Running system diagnostics...')}
          >
            <span className="relative z-10">Scan System</span>
          </button>

          {/* Danger Action */}
          <button
            className="group py-2 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-error text-error shadow-error/30 transition-all duration-300 ease-in-out transform hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus:outline-none focus:ring-4 focus:ring-error active:scale-95 cursor-pointer"
            onClick={() =>
              handleAlert('Warning: Initiating shutdown sequence...')
            }
          >
            <span className="relative z-10">Emergency Stop</span>
          </button>

          <button
            onClick={() =>
              handleAlert('Loading system diagnostics interface...')
            }
            className="group relative overflow-hidden py-2 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-accent text-accent shadow-secondary transition-all duration-300 ease-in-out transform hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent active:scale-95"
          >
            <span className="relative z-10">Run Diagnostics</span>
          </button>
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
                Monitor and control your cybernetic enhancements through
                this interactive panel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-base rounded-lg p-3 border border-border-default">
                <div className="text-primary font-mono font-bold">
                  ONLINE
                </div>
                <div className="text-muted">Connection Status</div>
              </div>
              <div className="bg-base rounded-lg p-3 border border-border-default">
                <div className="text-secondary font-mono font-bold">
                  87%
                </div>
                <div className="text-muted">Neural Sync Rate</div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 py-2 px-4 rounded bg-primary text-base font-semibold hover:shadow-primary transition-all duration-300 cursor-pointer">
                Sync
              </button>
              <button className="flex-1 py-2 px-4 rounded bg-surface border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-base transition-all duration-300 cursor-pointer">
                Monitor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTab;
