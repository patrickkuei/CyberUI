import React from 'react';

/**
 * Individual step item data.
 */
export interface StepItem {
  /**
   * Step title.
   */
  title: string;
  /**
   * Optional step description.
   */
  description?: string;
  /**
   * Step status for explicit control. If not provided, status is derived from `current` prop.
   */
  status?: 'pending' | 'current' | 'completed' | 'error';
}

/**
 * A horizontal stepper component for multi-step processes.
 *
 * Styled with half-diamond indicators for current step, gradient underlines for completed steps,
 * and animated chevron separators.
 *
 * @example
 * // Basic steps with current index
 * <Steps
 *   current={1}
 *   items={[
 *     { title: "Login" },
 *     { title: "Verify" },
 *     { title: "Complete" }
 *   ]}
 * />
 *
 * @example
 * // With descriptions and explicit status
 * <Steps
 *   items={[
 *     { title: "Login", description: "Enter credentials", status: "completed" },
 *     { title: "Verify", description: "2FA authentication", status: "current" },
 *     { title: "Complete", description: "Access granted", status: "pending" }
 *   ]}
 * />
 *
 * @example
 * // With error state
 * <Steps
 *   items={[
 *     { title: "Upload", status: "completed" },
 *     { title: "Process", status: "error" },
 *     { title: "Done", status: "pending" }
 *   ]}
 * />
 */
export interface StepsProps {
  /**
   * Array of step items to display.
   */
  items: StepItem[];
  /**
   * Current active step index (0-based). Used to derive status when individual step status is not set.
   * @default 0
   */
  current?: number;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const Steps: React.FC<StepsProps> = ({
  items,
  current = 0,
  className = '',
}) => {
  const getStepStatus = (item: StepItem, index: number): { isCompleted: boolean; isCurrent: boolean; isError: boolean } => {
    const isCompleted = item.status === 'completed' || (item.status === undefined && index < current);
    const isCurrent = item.status === 'current' || (item.status === undefined && index === current && current < items.length);
    const isError = item.status === 'error';
    return { isCompleted, isCurrent, isError };
  };

  const getTitleClasses = (isCompleted: boolean, isCurrent: boolean, isError: boolean): string => {
    const baseClasses = [
      'relative px-2 py-1 pb-2 font-bold text-sm transition-colors duration-200 whitespace-nowrap overflow-hidden',
      "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out",
      "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[3px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200",
    ].join(' ');

    if (isCompleted) {
      return `${baseClasses} text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100`;
    }
    if (isCurrent) {
      return `${baseClasses} text-secondary before:opacity-100`;
    }
    if (isError) {
      return `${baseClasses} text-error`;
    }
    return `${baseClasses} text-muted`;
  };

  const getChevronStyle = (
    isCompleted: boolean,
    nextStepCurrent: boolean,
    nextStepCompleted: boolean,
    chevronIndex: number
  ): React.CSSProperties => {
    return {
      color: 'var(--color-primary)',
      opacity: nextStepCompleted ? 0.8 : 0.3,
      filter: nextStepCompleted
        ? 'drop-shadow(0 0 4px color-mix(in srgb, var(--color-primary), transparent 40%))'
        : 'none',
      animation: nextStepCurrent && isCompleted
        ? `chevronFlow 1.5s ease-in-out infinite ${chevronIndex * 0.2}s`
        : 'none',
    };
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {items.map((item, index) => {
        const { isCompleted, isCurrent, isError } = getStepStatus(item, index);
        const nextStepCurrent = index < items.length - 1 &&
          (items[index + 1]?.status === 'current' || (items[index + 1]?.status === undefined && index + 1 === current && current < items.length));
        const nextStepCompleted = index < items.length - 1 &&
          (items[index + 1]?.status === 'completed' || (items[index + 1]?.status === undefined && index + 1 < current));

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={getTitleClasses(isCompleted, isCurrent, isError)}>
                {item.title}
              </div>
              {item.description && (
                <div className="text-xs text-muted mt-1 font-normal">{item.description}</div>
              )}
            </div>

            {index < items.length - 1 && (
              <div className="flex">
                {[0, 1, 2].map((chevronIndex) => (
                  <div
                    key={chevronIndex}
                    className="text-2xl font-bold transition-all duration-300"
                    style={getChevronStyle(isCompleted, nextStepCurrent, nextStepCompleted, chevronIndex)}
                  >
                    ›
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Steps;
