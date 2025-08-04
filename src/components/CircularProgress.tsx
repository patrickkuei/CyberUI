import React from 'react';

export interface CircularProgressProps {
  progress: number;
  radius: number;
  className?: string;
  children?: React.ReactNode;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  radius,
  className = '',
  children
}) => {
  const circumference = 2 * Math.PI * radius;
  const halfCircumference = circumference / 2;
  const leftOffset = halfCircumference * (1 - progress / 100);
  const rightOffset = halfCircumference * (1 - progress / 100);

  return (
    <div className={`relative ${className}`}>
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 50 50"
      >
        {/* Left half circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray={`${halfCircumference * 0.98} ${circumference}`}
          strokeDashoffset={leftOffset}
          transform="rotate(-90 25 25)"
          style={{
            filter: "drop-shadow(0 0 8px var(--color-accent))",
          }}
        />
        {/* Right half circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray={`${halfCircumference * 0.98} ${circumference}`}
          strokeDashoffset={rightOffset}
          transform="rotate(90 25 25)"
          style={{
            filter: "drop-shadow(0 0 8px var(--color-primary))",
          }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
