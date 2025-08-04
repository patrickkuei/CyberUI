import React from 'react';
import { CORPORATIONS } from '../../constants';

const ElementsTab: React.FC = () => {
  return (
    <div className="w-full max-w-4xl space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">
          UI Elements
        </h2>
        <p className="text-muted">
          Essential components for cyberpunk interfaces
        </p>
      </div>

      {/* Form Controls Group */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Form Controls
        </h3>

        {/* Dropdown with better layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-sm font-medium text-default mb-2">
              Corporate Faction
            </label>
            <div className="relative">
              <select className="appearance-none w-full bg-surface border border-border-default text-default px-4 py-3 pr-10 rounded-lg shadow-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300">
                {CORPORATIONS.map((corp) => (
                  <option key={corp} value={corp}>
                    {corp}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-accent">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Toggle Switch with better styling */}
          <div>
            <label className="block text-sm font-medium text-default mb-2">
              Stealth Protocol
            </label>
            <div className="flex items-center justify-between bg-surface border border-border-default rounded-lg p-3">
              <span className="text-default">Enable Ghost Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-linear-(--gradient-accent)"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators Group */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Status Indicators
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Security Clearance Chips */}
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Security Clearance Levels
            </label>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-base bg-primary shadow-lg hover:shadow-primary transition-shadow cursor-pointer">
                <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                Administrator
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-base bg-secondary shadow-lg hover:shadow-secondary transition-shadow cursor-pointer">
                <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                Operator
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-base bg-accent shadow-lg hover:shadow-lg-accent transition-shadow cursor-pointer">
                <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                Guest Access
              </span>
            </div>
          </div>

          {/* Connection Status */}
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Network Status
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-surface border border-border-default rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-default">Mainframe Link</span>
                </div>
                <span className="text-xs text-primary font-mono">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between bg-surface border border-border-default rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-default">Secure Channel</span>
                </div>
                <span className="text-xs text-secondary font-mono">
                  STANDBY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsTab;
