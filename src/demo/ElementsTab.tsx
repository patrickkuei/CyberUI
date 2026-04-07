import React, { useState } from "react";
import { CORPORATIONS } from "../constants";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Toggle from "../components/Toggle";
import Select from "../components/Select";
import Image from "../components/Image";
import SectionTitle from "../components/SectionTitle";
import Checkbox from "../components/Checkbox";
import Divider from "../components/Divider";
import GradientText from "../components/GradientText";

const ElementsTab: React.FC = () => {
  const [stealthMode, setStealthMode] = useState(false);
  const [selectedCorporation, setSelectedCorporation] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [enableAlerts, setEnableAlerts] = useState(true);

  const corporationOptions = CORPORATIONS.map((corp) => ({
    value: corp.toLowerCase().replace(/\s+/g, "_"),
    label: corp,
  }));

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          UI Elements
        </h2>
        <p className="text-muted">
          Essential components for cyberpunk interfaces
        </p>
      </div>

      <SectionTitle>Form Controls</SectionTitle>
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-default mb-3">
              Agreement Options
            </label>
            <div className="space-y-3">
              <Checkbox
                label="I agree to the Corporate Terms of Service"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <Checkbox
                label="Enable security breach alerts"
                checked={enableAlerts}
                onChange={(e) => setEnableAlerts(e.target.checked)}
              />
              <Checkbox
                label="Subscribe to neural network updates"
              />
            </div>
          </div>
        </div>
      </Card>

      <Divider />

      <SectionTitle>Status Indicators</SectionTitle>
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <Divider />

      <SectionTitle>System Modules</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Primary Database">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">Records</span>
              <span className="text-sm text-default font-mono">2,847,392</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">Query Speed</span>
              <span className="text-sm text-success font-mono">0.003ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">Uptime</span>
              <span className="text-sm text-primary font-mono">99.98%</span>
            </div>
          </div>
        </Card>

        <Card title="Emergency Protocols" variant="accent">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
              <span className="text-sm text-default">Override Active</span>
            </div>
            <p className="text-sm text-muted">
              Critical access enabled.
            </p>
            <span className="text-xs text-muted font-mono">12h ago</span>
          </div>
        </Card>

        <Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-default">CPU</span>
              </div>
              <span className="text-sm text-success font-mono">12%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-default">Memory</span>
              </div>
              <span className="text-sm text-success font-mono">4.2GB</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                <span className="text-sm text-default">Storage</span>
              </div>
              <span className="text-sm text-warning font-mono">89%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <span className="text-sm text-default">Network</span>
              </div>
              <span className="text-sm text-info font-mono">1.2Gbps</span>
            </div>
          </div>
        </Card>
      </div>

      <Divider />

      <SectionTitle>Media Gallery</SectionTitle>
      <Card>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-default mb-3">
              Enhanced Visual Analysis System
            </label>
            <p className="text-muted text-sm mb-4">
              Access enhanced imaging protocol for detailed examination
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group">
                <div className="h-48 mb-3">
                  <Image
                    src="image_demo_1.jpg"
                    alt="Cyberpunk cityscape with neon lights reflecting on wet streets"
                    size="md"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center relative h-6">
                  <span className="text-sm font-bold text-default absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                    Neo-Tokyo District 7
                  </span>
                  <GradientText variant="primary" className="text-sm font-bold absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Neo-Tokyo District 7
                  </GradientText>
                </div>
              </div>

              <div className="group">
                <div className="h-48 mb-3">
                  <Image
                    src="image_demo_3.jpg"
                    alt="Holographic display showing system diagnostics"
                    size="md"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center relative h-6">
                  <span className="text-sm font-bold text-default absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                    Mainframe Core
                  </span>
                  <GradientText variant="secondary" className="text-sm font-bold absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Mainframe Core
                  </GradientText>
                </div>
              </div>

              <div className="group">
                <div className="h-48 mb-3">
                  <Image
                    src="noexist.jpg"
                    alt="Futuristic neural network interface with data streams"
                    size="md"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center relative h-6">
                  <span className="text-sm font-bold text-default absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                    Neural Interface
                  </span>
                  <GradientText variant="accent" className="text-sm font-bold absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Neural Interface
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ElementsTab;
