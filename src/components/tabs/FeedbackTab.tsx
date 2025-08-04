import React from 'react';
import { useAnimatedProgress } from '../../hooks/useAnimatedProgress';
import { PROGRESS_CONFIG } from '../../constants';
import CircularProgress from '../CircularProgress';
import SegmentedProgress from '../SegmentedProgress';
import Notification from '../Notification';

const FeedbackTab: React.FC = () => {
  const progress = useAnimatedProgress();

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
          <Notification
            type="success"
            title="Neural Link Established"
            message="Successfully connected to the cybernet mainframe"
            onClose={() => {}}
          />

          <Notification
            type="warning"
            title="Security Protocol Warning"
            message="Unauthorized access attempt detected on port 2077"
            onClose={() => {}}
          />

          <Notification
            type="error"
            title="System Breach Detected"
            message="Critical firewall failure - immediate action required"
            onClose={() => {}}
          />
        </div>
      </div>

      {/* Progress Indicators Group */}
      <div className="bg-base border border-border-default rounded-xl p-6 space-y-6">
        <h3 className="text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2">
          Loading States
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Linear Progress */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-default font-medium">
                Data Transfer
              </span>
              <span className="text-accent font-mono text-sm">
                {progress}%
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-accent to-primary h-3 rounded-full shadow-lg-accent transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-muted">
              Uploading neural patterns...
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex flex-col items-center space-y-4">
            <CircularProgress
              progress={progress}
              radius={PROGRESS_CONFIG.RADIUS}
              className="w-20 h-20"
            >
              <span className="text-accent font-mono text-sm">
                {progress}%
              </span>
            </CircularProgress>
            <div className="text-center">
              <div className="text-default font-medium">System Scan</div>
              <div className="text-xs text-muted mt-1">
                Analyzing threat vectors...
              </div>
            </div>
          </div>

          {/* Segmented Progress */}
          <div className="flex flex-col items-center space-y-4">
            <SegmentedProgress
              progress={progress}
              className="w-28 h-28"
            >
              <span className="text-accent font-mono text-sm">
                {progress}%
              </span>
            </SegmentedProgress>
            <div className="text-center">
              <div className="text-default font-medium">
                Segmented Progress
              </div>
              <div className="text-xs text-muted mt-1">
                Monitoring segmented data flow...
              </div>
            </div>
          </div>
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
};

export default FeedbackTab;
