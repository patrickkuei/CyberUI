import React, { useState } from "react";
import { CORPORATIONS } from "../../constants";
import Card from "../Card";
import Badge from "../Badge";
import Toggle from "../Toggle";
import Select from "../Select";
import Image from "../Image";

const ElementsTab: React.FC = () => {
  const [stealthMode, setStealthMode] = useState(false);
  const [selectedCorporation, setSelectedCorporation] = useState("");

  const corporationOptions = CORPORATIONS.map((corp) => ({
    value: corp.toLowerCase().replace(/\s+/g, "_"),
    label: corp,
  }));

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          UI Elements
        </h2>
        <p className="text-muted">
          Essential components for cyberpunk interfaces
        </p>
      </div>

      <Card title="Form Controls">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Select
              label="Corporate Faction"
              variant="primary"
              options={corporationOptions}
              placeholder="Select your faction..."
              value={selectedCorporation}
              onChange={(e) => setSelectedCorporation(e.target.value)}
            />
          </div>

          {/* Toggle Switch */}
          <div>
            <label className="block text-sm font-medium text-default mb-2">
              Stealth Protocol
            </label>
            <div className="bg-surface border border-border-default rounded-lg p-3">
              <Toggle
                label="Enable Ghost Mode"
                variant="primary"
                checked={stealthMode}
                onChange={setStealthMode}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Status Indicators Group */}
      <Card title="Status Indicators">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Security Clearance Chips */}
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Security Clearance Levels
            </label>
            <div className="flex flex-wrap gap-3">
              <Badge
                variant="primary"
                clickable
                leftIcon={
                  <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                }
              >
                Administrator
              </Badge>
              <Badge
                variant="secondary"
                clickable
                leftIcon={
                  <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                }
              >
                Operator
              </Badge>
              <Badge
                variant="accent"
                clickable
                leftIcon={
                  <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
                }
              >
                Guest Access
              </Badge>
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
                <span className="text-xs text-primary font-mono">ACTIVE</span>
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
      </Card>

      {/* Image Gallery Showcase */}
      <Card title="Media Gallery">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Enhanced Visual Analysis System
            </label>
            <p className="text-muted text-sm mb-4">
              Access enhanced imaging protocol for detailed examination
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-48">
                  <Image
                    src="image_demo_1.jpg"
                    alt="Cyberpunk cityscape with neon lights reflecting on wet streets"
                    size="md"
                    className="h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted text-center">Neon Cityscape</p>
              </div>

              <div className="space-y-2">
                <div className="h-48">
                  <Image
                    src="image_demo_3.jpg"
                    alt="Holographic display showing system diagnostics"
                    size="md"
                    className="h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted text-center">
                  System Diagnostics
                </p>
              </div>

              <div className="space-y-2">
                <div className="h-48">
                  <Image
                    src="noexist.jpg"
                    alt="Futuristic neural network interface with data streams"
                    size="md"
                    className="h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted text-center">
                  Neural Interface Offline
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ElementsTab;
