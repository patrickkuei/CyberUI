import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Card from "../Card";
import Carousel from "../Carousel";
import Modal from "../Modal";
import { useCyberNotifications } from "../../hooks/useCyberNotifications";

const InteractiveTab: React.FC = () => {
  const [input, setInput] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modal states
  const [protocolModal, setProtocolModal] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  const [emergencyModal, setEmergencyModal] = useState(false);
  const [diagnosticsModal, setDiagnosticsModal] = useState(false);
  const [syncModal, setSyncModal] = useState(false);
  const [monitorModal, setMonitorModal] = useState(false);

  // Use the new notification hook
  const { showNotification } = useCyberNotifications();

  // Sample images for carousel
  const carouselImages = [
    {
      src: "image_demo_1.jpg",
      alt: "Cyberpunk cityscape with neon lights",
      caption: "Neo-Tokyo District 7",
    },
    {
      src: "image_demo_2.jpg",
      alt: "Futuristic architecture",
      caption: "Corporate Megastructure",
    },
    {
      src: "image_demo_3.jpg",
      alt: "Cyberpunk street scene",
      caption: "Underground Market",
    },
  ];

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
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          Interactive Components
        </h2>
        <p className="text-muted">
          Test input fields, buttons, and user interactions
        </p>
      </div>

      <Card title="User Input">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <Input
            variant="secondary"
            label="Database Query"
            placeholder="Search corporate database..."
            leftIcon={<SearchIcon />}
            helperText="Search through encrypted corporate files"
          />
        </div>
      </Card>

      <Card title="System Actions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="primary" onClick={() => setProtocolModal(true)}>
            Execute Protocol
          </Button>

          <Button variant="secondary" onClick={() => setScanModal(true)}>
            Scan System
          </Button>

          <Button variant="danger" onClick={() => setEmergencyModal(true)}>
            Emergency Stop
          </Button>

          <Button variant="ghost" onClick={() => setDiagnosticsModal(true)}>
            Run Diagnostics
          </Button>
        </div>

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

      <Card title="Visual Data Stream">
        <div className="space-y-4">
          <p className="text-muted text-center">
            Navigate through archived data streams
          </p>
          <Carousel
            images={carouselImages}
            currentIndex={currentSlide}
            onChange={setCurrentSlide}
            size="md"
            transition="signal-glitch"
            glitchRate={0.3}
            autoPlay={true}
            interval={4000}
            onBeforeChange={(from, to) =>
              showNotification(
                "warning",
                "SURVEILLANCE.SYS",
                `Switching surveillance feed ${from} → ${to}`
              )
            }
            onAfterChange={(index) =>
              showNotification(
                "success",
                "SURVEILLANCE.SYS",
                `Now monitoring sector ${index + 1}`
              )
            }
          />
          <div className="flex justify-between items-center text-sm text-muted">
            <span>
              Feed {currentSlide + 1} of {carouselImages.length}
            </span>
            <span className="font-mono">AUTO-SCAN: ACTIVE</span>
          </div>
        </div>
      </Card>

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
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => setSyncModal(true)}
              >
                Sync
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => setMonitorModal(true)}
              >
                Monitor
              </Button>
            </div>
          </div>
        </Card>
      </Card>

      {/* Neural Protocol Modal */}
      <Modal
        isOpen={protocolModal}
        onClose={() => setProtocolModal(false)}
        title="Neural Link Protocol"
        onCancel={() => setProtocolModal(false)}
        onConfirm={() => {
          showNotification(
            "success",
            "NEURAL.EXE",
            "Neural link protocol executed successfully"
          );
          setProtocolModal(false);
        }}
        cancelText="Abort"
        confirmText="Execute"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-primary font-semibold">
              Neural Interface Synchronization Initiated
            </p>
          </div>

          <div className="bg-surface/30 p-4 rounded border border-primary/30">
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-muted">Protocol:</span>
                <span className="text-accent">NEURALLINK_v2.45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Target Interface:</span>
                <span className="text-primary">CORTEX_PRIME</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Security Level:</span>
                <span className="text-success">AUTHORIZED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Data Transfer Rate:</span>
                <span className="text-secondary">2.4TB/s</span>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm">
            This protocol will establish a direct neural interface connection
            with the primary cortex module. All sensory data will be enhanced
            through cybernetic augmentation layers.
          </p>

          <div className="border-l-2 border-primary pl-4">
            <p className="text-primary text-sm font-mono">
              &gt; WARNING: Neural bandwidth at 87% capacity
              <br />
              &gt; Recommend defragmenting memory banks before execution
            </p>
          </div>
        </div>
      </Modal>

      {/* System Scan Modal */}
      <Modal
        isOpen={scanModal}
        onClose={() => setScanModal(false)}
        title="System Diagnostic Scan"
        onCancel={() => setScanModal(false)}
        onConfirm={() => {
          showNotification(
            "success",
            "DIAGNOSTIC.SYS",
            "Deep system scan initiated successfully"
          );
          setScanModal(false);
        }}
        cancelText="Cancel"
        confirmText="Start Scan"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <p className="text-secondary font-semibold">
              Deep System Analysis Ready
            </p>
          </div>

          <div className="bg-surface/30 p-4 rounded border border-secondary/30">
            <div className="space-y-3">
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted">CPU Cores:</span>
                  <span className="text-success">16/16 ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Memory Banks:</span>
                  <span className="text-warning">64TB (73% USED)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Neural Networks:</span>
                  <span className="text-success">STABLE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Firewall Status:</span>
                  <span className="text-error">3 INTRUSION ATTEMPTS</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm">
            Comprehensive scan will analyze all system components, neural
            pathways, and security protocols. Estimated scan time: 47 seconds.
          </p>

          <div className="border-l-2 border-secondary pl-4">
            <p className="text-secondary text-sm font-mono">
              &gt; Scanning priority: Critical vulnerabilities
              <br />
              &gt; Background processes will be temporarily suspended
            </p>
          </div>
        </div>
      </Modal>

      {/* Emergency Stop Modal */}
      <Modal
        isOpen={emergencyModal}
        onClose={() => setEmergencyModal(false)}
        title="⚠️ EMERGENCY SHUTDOWN"
        onCancel={() => setEmergencyModal(false)}
        onConfirm={() => {
          showNotification(
            "error",
            "EMERGENCY.SYS",
            "Critical shutdown sequence initiated"
          );
          setEmergencyModal(false);
        }}
        cancelText="Abort"
        confirmText="SHUTDOWN NOW"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
            <p className="text-error font-semibold">CRITICAL SYSTEM ALERT</p>
          </div>

          <div className="bg-error/10 p-4 rounded border border-error/50">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Alert Level:</span>
                <span className="text-error font-mono">DEFCON 1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Threat Source:</span>
                <span className="text-error font-mono">UNKNOWN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Systems Affected:</span>
                <span className="text-error font-mono">ALL MODULES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Time to Breach:</span>
                <span className="text-error font-mono">00:00:47</span>
              </div>
            </div>
          </div>

          <p className="text-error text-sm">
            <strong>WARNING:</strong> Emergency shutdown will immediately
            terminate all neural connections and cybernetic processes. This
            action cannot be undone and may result in temporary disorientation
            or memory fragments.
          </p>

          <div className="border-l-2 border-error pl-4">
            <p className="text-error text-sm font-mono">
              &gt; ALL DATA WILL BE PRESERVED IN EMERGENCY CACHE
              <br />
              &gt; NEURAL INTERFACE WILL BE FORCIBLY DISCONNECTED
              <br />
              &gt; AUTOMATIC REBOOT IN SAFE MODE WILL COMMENCE
            </p>
          </div>
        </div>
      </Modal>

      {/* Diagnostics Modal */}
      <Modal
        isOpen={diagnosticsModal}
        onClose={() => setDiagnosticsModal(false)}
        title="Advanced Diagnostics"
        onCancel={() => setDiagnosticsModal(false)}
        onConfirm={() => {
          showNotification(
            "success",
            "DIAGNOSTICS.EXE",
            "Comprehensive system analysis started"
          );
          setDiagnosticsModal(false);
        }}
        cancelText="Skip"
        confirmText="Run Tests"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-accent font-semibold">
              Comprehensive System Analysis
            </p>
          </div>

          <div className="bg-surface/30 p-4 rounded border border-accent/30">
            <div className="space-y-3">
              <p className="text-accent font-mono text-sm">
                DIAGNOSTIC MODULES AVAILABLE:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="text-success">✓ Memory Integrity</div>
                <div className="text-success">✓ Neural Pathways</div>
                <div className="text-success">✓ Cybernetic Sync</div>
                <div className="text-warning">⚠ Security Layers</div>
                <div className="text-success">✓ Data Streams</div>
                <div className="text-error">✗ Quantum Encryption</div>
                <div className="text-success">✓ Bio-signatures</div>
                <div className="text-success">✓ Network Protocols</div>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm">
            Advanced diagnostics will perform deep analysis on all system
            components including neural interface stability, cybernetic implant
            functionality, and quantum encryption matrices.
          </p>

          <div className="border-l-2 border-accent pl-4">
            <p className="text-accent text-sm font-mono">
              &gt; Estimated completion time: 2 minutes 34 seconds
              <br />
              &gt; System performance may be temporarily reduced
              <br />
              &gt; All anomalies will be logged for review
            </p>
          </div>
        </div>
      </Modal>

      {/* Neural Sync Modal */}
      <Modal
        isOpen={syncModal}
        onClose={() => setSyncModal(false)}
        title="Neural Synchronization"
        onCancel={() => setSyncModal(false)}
        onConfirm={() => {
          showNotification(
            "success",
            "NEURAL.SYS",
            "Neural interface synchronization completed"
          );
          setSyncModal(false);
        }}
        cancelText="Cancel"
        confirmText="Synchronize"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-primary font-semibold">
              Neural Interface Calibration
            </p>
          </div>

          <div className="bg-surface/30 p-4 rounded border border-primary/30">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Current Sync Rate:</span>
                <span className="text-primary font-mono">87.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Target Sync Rate:</span>
                <span className="text-success font-mono">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Latency:</span>
                <span className="text-accent font-mono">0.003ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Neural Bandwidth:</span>
                <span className="text-secondary font-mono">2.4 PB/s</span>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm">
            Neural synchronization will optimize the connection between your
            biological neural networks and cybernetic augmentations for maximum
            efficiency and response time.
          </p>

          <div className="border-l-2 border-primary pl-4">
            <p className="text-primary text-sm font-mono">
              &gt; Backup neural patterns before sync
              <br />
              &gt; Calibrating synaptic response timing
              <br />
              &gt; Optimizing data flow protocols
            </p>
          </div>
        </div>
      </Modal>

      {/* Monitor Modal */}
      <Modal
        isOpen={monitorModal}
        onClose={() => setMonitorModal(false)}
        title="Real-time System Monitor"
        onCancel={() => setMonitorModal(false)}
        onConfirm={() => {
          showNotification(
            "success",
            "MONITOR.SYS",
            "Real-time monitoring activated successfully"
          );
          setMonitorModal(false);
        }}
        cancelText="Close"
        confirmText="Enable Monitoring"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <p className="text-secondary font-semibold">Live System Metrics</p>
          </div>

          <div className="bg-surface/30 p-4 rounded border border-secondary/30">
            <div className="grid grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <div className="text-muted">CPU Usage</div>
                <div className="text-success">23.7%</div>
              </div>
              <div>
                <div className="text-muted">Memory Load</div>
                <div className="text-warning">73.2%</div>
              </div>
              <div>
                <div className="text-muted">Neural Activity</div>
                <div className="text-primary">High</div>
              </div>
              <div>
                <div className="text-muted">Network I/O</div>
                <div className="text-accent">847 MB/s</div>
              </div>
              <div>
                <div className="text-muted">Power Draw</div>
                <div className="text-success">67.4 kW</div>
              </div>
              <div>
                <div className="text-muted">Heat Index</div>
                <div className="text-error">94.1°C</div>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm">
            Real-time monitoring provides continuous oversight of all system
            functions, neural activity patterns, and cybernetic implant
            performance metrics.
          </p>

          <div className="border-l-2 border-secondary pl-4">
            <p className="text-secondary text-sm font-mono">
              &gt; Auto-refresh every 100ms
              <br />
              &gt; Alert thresholds configured
              <br />
              &gt; Logging all anomalies to secure buffer
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InteractiveTab;
