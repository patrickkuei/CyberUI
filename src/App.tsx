import React, { useState } from "react";
import "./index.css";

const tabs = ["Home", "Interactive", "Elements", "Feedback"];

const DemoPage = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="text-center">
            <h2 className="text-5xl font-bold text-primary tracking-wider">
              Glitch in the System
            </h2>
            <p className="text-muted mt-4 text-lg">
              A UI Kit for the dystopian future.
            </p>
          </div>
        );
      case "Interactive":
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
                    className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-surface text-default placeholder-muted shadow-input-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base"
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
                      className="w-full px-4 py-3 pl-10 rounded-lg border-2 border-secondary bg-surface text-default placeholder-muted shadow-secondary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base"
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Primary Action */}
                <button
                  className="group relative overflow-hidden py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-linear-(--gradient-accent) text-base shadow-primary border-none transition-all duration-300 ease-in-out transform hover:shadow-lg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent active:scale-95"
                  onClick={() => alert("Initiating neural link protocol...")}
                >
                  <span className="relative z-10">Execute Protocol</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                {/* Secondary Action */}
                <button
                  className="group py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-secondary text-secondary shadow-secondary/30 transition-all duration-300 ease-in-out transform hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary active:scale-95"
                  onClick={() => alert("Running system diagnostics...")}
                >
                  <span className="relative z-10">Scan System</span>
                </button>

                {/* Danger Action */}
                <button
                  className="group py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-error text-error shadow-error/30 transition-all duration-300 ease-in-out transform hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus:outline-none focus:ring-4 focus:ring-error active:scale-95"
                  onClick={() =>
                    alert("Warning: Initiating shutdown sequence...")
                  }
                >
                  <span className="relative z-10">Emergency Stop</span>
                </button>
              </div>
            </div>

            {/* Interactive Card Demo */}
            <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
                Interactive Demo Card
              </h3>

              <div className="bg-surface border-2 border-accent rounded-xl p-6 shadow-input-accent hover:shadow-lg-accent transition-all duration-300 transform hover:scale-[1.02]">
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
                    <button className="flex-1 py-2 px-4 rounded bg-primary text-base font-semibold hover:shadow-primary transition-all duration-300">
                      Sync
                    </button>
                    <button className="flex-1 py-2 px-4 rounded bg-surface border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-base transition-all duration-300">
                      Monitor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Elements":
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
                    <select className="appearance-none w-full bg-surface border-2 border-accent text-default px-4 py-3 pr-10 rounded-lg shadow-input-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-primary transition-all duration-300">
                      <option>Arasaka Corporation</option>
                      <option>Militech Industries</option>
                      <option>Kang Tao Systems</option>
                      <option>NetWatch Division</option>
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
                      <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-accent"></div>
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

      case "Feedback":
        return (
          <div className="w-full max-w-4xl space-y-12">
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-2">
                User Feedback
              </h2>
              <p className="text-muted">System responses and loading states</p>
            </div>

            {/* Notifications Group */}
            <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
                System Notifications
              </h3>

              <div className="space-y-4">
                {/* Success Notification */}
                <div className="flex items-start space-x-4 bg-linear-(--gradient-accent) rounded-lg p-4 shadow-lg-accent">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-base"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base">
                      Neural Link Established
                    </h4>
                    <p className="text-base/80 text-sm mt-1">
                      Successfully connected to the cybernet mainframe
                    </p>
                  </div>
                  <button className="flex-shrink-0 text-base hover:text-base/70 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Warning Notification */}
                <div className="flex items-start space-x-4 bg-surface border-l-4 border-secondary rounded-lg p-4 shadow-lg">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-default">
                      Security Protocol Warning
                    </h4>
                    <p className="text-muted text-sm mt-1">
                      Unauthorized access attempt detected on port 2077
                    </p>
                  </div>
                  <button className="flex-shrink-0 text-muted hover:text-default transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Error Notification */}
                <div className="flex items-start space-x-4 bg-error rounded-lg p-4 shadow-error">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-base"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base">
                      System Breach Detected
                    </h4>
                    <p className="text-base/80 text-sm mt-1">
                      Critical firewall failure - immediate action required
                    </p>
                  </div>
                  <button className="flex-shrink-0 text-base hover:text-base/70 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicators Group */}
            <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
                Loading States
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Linear Progress */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-default font-medium">
                      Data Transfer
                    </span>
                    <span className="text-accent font-mono text-sm">68%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-accent to-primary h-3 rounded-full w-[68%] shadow-lg-accent transition-all duration-500 ease-out"></div>
                  </div>
                  <div className="text-xs text-muted">
                    Uploading neural patterns...
                  </div>
                </div>

                {/* Circular Progress */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 animate-spin-slow">
                      <svg className="w-full h-full" viewBox="0 0 50 50">
                        <circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="31.416"
                          strokeDashoffset="7.854"
                          className="text-accent"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-accent font-mono text-sm">85%</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-default font-medium">System Scan</div>
                    <div className="text-xs text-muted mt-1">
                      Analyzing threat vectors...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Actions Group */}
            <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
                System Actions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    alert("Initiating neural interface protocol...")
                  }
                  className="group relative overflow-hidden py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-linear-(--gradient-accent) text-base shadow-primary border-none transition-all duration-300 ease-in-out transform hover:shadow-lg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent active:scale-95"
                >
                  <span className="relative z-10">Initialize Protocol</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <button
                  onClick={() =>
                    alert("Loading system diagnostics interface...")
                  }
                  className="group relative overflow-hidden py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider bg-surface border-2 border-accent text-accent shadow-secondary transition-all duration-300 ease-in-out transform hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent active:scale-95"
                >
                  <span className="relative z-10">Run Diagnostics</span>
                </button>
              </div>
            </div>

            {/* Data Loading Skeleton */}
            <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
                Loading Placeholder
              </h3>

              <div className="border border-border-default shadow rounded-lg p-6 bg-surface">
                <div className="animate-pulse space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-600 h-16 w-16"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-600 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-600 rounded w-4/6"></div>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <div className="h-8 bg-gray-600 rounded w-20"></div>
                    <div className="h-8 bg-gray-600 rounded w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 font-mono bg-base text-default space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Cyberpunk UI Demo
        </h1>
        <p className="text-muted">
          Experience the neon theme in a real interface.
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-2 font-bold text-lg transition-all duration-300 rounded-t-lg cursor-pointer
              ${
                activeTab === tab
                  ? "bg-surface text-secondary border-2 border-border-default border-b-0 shadow-secondary -mb-[2px] hover:shadow-lg-accent"
                  : "text-muted border-b-2 border-border-default hover:text-secondary hover:border-secondary"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl p-8 bg-surface rounded-b-lg rounded-tr-lg border-2 border-border-default min-h-[400px] flex flex-col items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default DemoPage;
