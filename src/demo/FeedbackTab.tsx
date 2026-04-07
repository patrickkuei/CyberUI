import React from "react";
import { useAnimatedProgress } from "../hooks/useAnimatedProgress";
import { PROGRESS_CONFIG } from "../constants";
import Card from "../components/Card";
import CircularProgress from "../components/CircularProgress";
import SegmentedProgress from "../components/SegmentedProgress";
import Notification from "../components/Notification";
import LinearProgress from "../components/LinearProgress";
import Skeleton from "../components/Skeleton";
import SectionTitle from "../components/SectionTitle";
import Timeline from "../components/Timeline";
import Divider from "../components/Divider";

const FeedbackTab: React.FC = () => {
  const progress = useAnimatedProgress();

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          User Feedback
        </h2>
        <p className="text-muted">System responses and loading states</p>
      </div>

      <SectionTitle>System Notifications</SectionTitle>
      <Card>
        <div className="space-y-4">
          <Notification
            type="success"
            title="Neural Link Established"
            message="Successfully connected to the cybernet mainframe"
            onClose={() => {}}
            size={{ base: "sm", md: "md", lg: "lg" }}
          />

          <Notification
            type="warning"
            title="Security Protocol Warning"
            message="Unauthorized access attempt detected on port 2077"
            onClose={() => {}}
            size={{ base: "sm", md: "md", lg: "lg" }}
          />

          <Notification
            type="error"
            title="System Breach Detected"
            message="Critical firewall failure - immediate action required"
            onClose={() => {}}
            size={{ base: "sm", md: "md", lg: "lg" }}
          />
        </div>
      </Card>

      <Divider />

      <SectionTitle>Loading States</SectionTitle>
      <Card>
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-default font-medium">Data Transfer</span>
              <span className="text-accent font-mono text-sm">{progress}%</span>
            </div>
            <LinearProgress progress={progress} className="w-full" />
            <div className="text-xs text-muted">
              Uploading neural patterns...
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <CircularProgress
              progress={progress}
              radius={PROGRESS_CONFIG.RADIUS}
              className="w-20 h-20"
            >
              <span className="text-accent font-mono text-sm">{progress}%</span>
            </CircularProgress>
            <div className="text-center">
              <div className="text-default font-medium">System Scan</div>
              <div className="text-xs text-muted mt-1">
                Analyzing threat vectors...
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <SegmentedProgress progress={progress} className="w-28 h-28">
              <span className="text-accent font-mono text-sm">{progress}%</span>
            </SegmentedProgress>
            <div className="text-center">
              <div className="text-default font-medium">Segmented Progress</div>
              <div className="text-xs text-muted mt-1">
                Monitoring segmented data flow...
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Divider />

      <SectionTitle>System Activity Log</SectionTitle>
      <Card>
        <Timeline
          events={[
            {
              title: "Neural Link Established",
              description: "Successfully synchronized with primary cortex module at maximum bandwidth.",
              time: "Just now",
              status: "success",
            },
            {
              title: "Security Scan Complete",
              description: "All 47 security protocols verified. No anomalies detected.",
              time: "2 min ago",
              status: "info",
            },
            {
              title: "Memory Usage Warning",
              description: "Neural cache approaching 85% capacity. Consider defragmentation.",
              time: "15 min ago",
              status: "warning",
            },
            {
              title: "Connection Interrupted",
              description: "Lost connection to backup server cluster. Failover initiated.",
              time: "1 hour ago",
              status: "error",
            },
          ]}
        />
      </Card>

      <Divider />

      <SectionTitle>Loading Placeholder</SectionTitle>
      <Card>
        <Skeleton variant="card" size="md" />
      </Card>
    </div>
  );
};

export default FeedbackTab;
