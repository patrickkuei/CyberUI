import React from "react";
import { useAnimatedProgress } from "../../hooks/useAnimatedProgress";
import { PROGRESS_CONFIG } from "../../constants";
import CircularProgress from "../CircularProgress";
import SegmentedProgress from "../SegmentedProgress";
import Notification from "../Notification";
import LinearProgress from "../LinearProgress";
import Skeleton from "../Skeleton";

const FeedbackTab: React.FC = () => {
  const progress = useAnimatedProgress();

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl space-y-8 md:space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
          User Feedback
        </h2>
        <p className="text-muted">System responses and loading states</p>
      </div>

      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          System Notifications
        </h3>

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
      </div>

      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Loading States
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>

      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Loading Placeholder
        </h3>
        <Skeleton variant="card" size="md" />
      </div>
    </div>
  );
};

export default FeedbackTab;
