import React from "react";
import type { ResponsiveValue } from "../utils/responsive";
import {
  getResponsiveClasses,
  RESPONSIVE_SIZE_MAPS,
} from "../utils/responsive";

export interface SkeletonProps {
  variant?:
    | "text"
    | "circular"
    | "rectangular"
    | "card"
    | "avatar-text"
    | "button-group";
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number; // For text variant
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  size = "md",
  width,
  height,
  className = "",
  lines = 3,
  animate = true,
}) => {
  const getSizeClasses = (
    size: ResponsiveValue<"sm" | "md" | "lg">
  ): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.skeleton);
  };

  const baseClasses = [
    "bg-gray-600",
    animate ? "animate-pulse" : "",
    getSizeClasses(size),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const getCustomStyles = () => {
    const styles: React.CSSProperties = {};
    if (width) styles.width = typeof width === "number" ? `${width}px` : width;
    if (height)
      styles.height = typeof height === "number" ? `${height}px` : height;
    return styles;
  };

  // Text skeleton with multiple lines
  if (variant === "text") {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => {
          const isLastLine = index === lines - 1;
          const widthClass = isLastLine
            ? "w-2/3"
            : index % 2 === 0
            ? "w-full"
            : "w-5/6";

          return (
            <div
              key={index}
              className={`h-3 rounded ${baseClasses} ${widthClass}`}
              style={getCustomStyles()}
            />
          );
        })}
      </div>
    );
  }

  // Circular skeleton (avatars, profile pics)
  if (variant === "circular") {
    const sizeClass =
      size === "sm" ? "h-12 w-12" : size === "lg" ? "h-20 w-20" : "h-16 w-16";

    return (
      <div
        className={`rounded-full ${baseClasses} ${sizeClass}`}
        style={getCustomStyles()}
      />
    );
  }

  // Rectangular skeleton (images, cards)
  if (variant === "rectangular") {
    const defaultHeight =
      size === "sm" ? "h-20" : size === "lg" ? "h-40" : "h-32";

    return (
      <div
        className={`rounded-lg ${baseClasses} w-full ${defaultHeight}`}
        style={getCustomStyles()}
      />
    );
  }

  // Avatar + text combination (profile cards)
  if (variant === "avatar-text") {
    const avatarSize =
      size === "sm" ? "h-12 w-12" : size === "lg" ? "h-20 w-20" : "h-16 w-16";

    return (
      <div className={`flex items-center space-x-4 ${className}`}>
        <div className={`rounded-full ${baseClasses} ${avatarSize}`} />
        <div className="flex-1 space-y-3">
          <div className={`h-4 rounded w-3/4 ${baseClasses}`} />
          <div className={`h-3 rounded w-1/2 ${baseClasses}`} />
        </div>
      </div>
    );
  }

  // Button group skeleton
  if (variant === "button-group") {
    const buttonHeight =
      size === "sm" ? "h-8" : size === "lg" ? "h-12" : "h-10";

    return (
      <div className={`flex space-x-4 ${className}`}>
        <div className={`${buttonHeight} rounded w-20 ${baseClasses}`} />
        <div className={`${buttonHeight} rounded w-24 ${baseClasses}`} />
      </div>
    );
  }

  // Card skeleton (complex layout)
  if (variant === "card") {
    const paddingClass = size === "sm" ? "p-4" : size === "lg" ? "p-8" : "p-6";

    return (
      <div
        className={`border border-border-default rounded-lg bg-surface ${paddingClass} space-y-4 ${className}`}
      >
        {animate && (
          <div className="animate-pulse space-y-4">
            {/* Header with avatar */}
            <div className="flex items-center space-x-4">
              <div className={`rounded-full ${baseClasses} h-16 w-16`} />
              <div className="flex-1 space-y-3">
                <div className={`h-4 rounded w-3/4 ${baseClasses}`} />
                <div className={`h-3 rounded w-1/2 ${baseClasses}`} />
              </div>
            </div>

            {/* Content lines */}
            <div className="space-y-3">
              <div className={`h-3 rounded ${baseClasses}`} />
              <div className={`h-3 rounded w-5/6 ${baseClasses}`} />
              <div className={`h-3 rounded w-4/6 ${baseClasses}`} />
            </div>

            {/* Action buttons */}
            <div className="flex space-x-4 pt-4">
              <div className={`h-8 rounded w-20 ${baseClasses}`} />
              <div className={`h-8 rounded w-24 ${baseClasses}`} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default rectangular skeleton
  return (
    <div
      className={`h-4 rounded ${baseClasses} w-full`}
      style={getCustomStyles()}
    />
  );
};

export default Skeleton;
