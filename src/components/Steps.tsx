import React from 'react';
import type { ResponsiveValue } from "../utils/responsive";
import { useResponsiveValue } from "../utils/responsive";

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
 * // Responsive orientation (vertical on mobile, horizontal on desktop)
 * <Steps
 *   orientation={{ base: 'vertical', md: 'horizontal' }}
 *   items={[...]}
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
   * Layout orientation. Supports responsive values.
   * @default { base: 'vertical', md: 'horizontal' }
   */
  orientation?: ResponsiveValue<'horizontal' | 'vertical'>;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const Steps: React.FC<StepsProps> = ({
  items,
  current = 0,
  orientation = { base: 'vertical', md: 'horizontal' },
  className = '',
}) => {
  const currentOrientation = useResponsiveValue(orientation, 'vertical');
  const isVertical = currentOrientation === 'vertical';

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

  const containerClasses = isVertical
    ? `flex flex-col items-start gap-0 ${className}`
    : `flex items-center justify-center gap-4 ${className}`;

  // Triangle indicator classes for vertical mode (using unicode character)
  const getTriangleColorClass = (isCompleted: boolean, isCurrent: boolean, isError: boolean): string => {
    if (isCompleted) return 'text-secondary drop-shadow-[0_0_4px_var(--color-secondary)]';
    if (isCurrent) return 'text-accent drop-shadow-[0_0_6px_var(--color-accent)]';
    if (isError) return 'text-error drop-shadow-[0_0_4px_var(--color-error)]';
    return 'text-muted/50';
  };

  // Vertical title classes with animated underline (left-to-right animation)
  const getVerticalTitleClasses = (isCompleted: boolean, isCurrent: boolean, isError: boolean): string => {
    const baseClasses = [
      'relative font-bold text-sm transition-colors duration-200 pb-1 w-fit',
      "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out",
    ].join(' ');

    if (isCompleted) {
      return `${baseClasses} text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100`;
    }
    if (isCurrent) return `${baseClasses} text-secondary`;
    if (isError) return `${baseClasses} text-error`;
    return `${baseClasses} text-muted`;
  };

  return (
    <div className={containerClasses}>
      {items.map((item, index) => {
        const { isCompleted, isCurrent, isError } = getStepStatus(item, index);
        const nextStepCurrent = index < items.length - 1 &&
          (items[index + 1]?.status === 'current' || (items[index + 1]?.status === undefined && index + 1 === current && current < items.length));
        const nextStepCompleted = index < items.length - 1 &&
          (items[index + 1]?.status === 'completed' || (items[index + 1]?.status === undefined && index + 1 < current));

        return (
          <React.Fragment key={index}>
            {isVertical ? (
              // Vertical layout: step row + chevrons below
              <div className="flex flex-col w-full">
                {/* Step row: triangle + title/description */}
                <div className="flex items-start gap-1.5">
                  <span className={`text-xs leading-5 flex-shrink-0 ${getTriangleColorClass(isCompleted, isCurrent, isError)}`}>
                    ▸
                  </span>
                  <div className="flex flex-col">
                    <div className={getVerticalTitleClasses(isCompleted, isCurrent, isError)}>
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-xs text-muted mt-0.5 font-normal">{item.description}</div>
                    )}
                  </div>
                </div>
                {/* Chevrons aligned at fixed position */}
                {index < items.length - 1 && (
                  <div className="flex flex-col items-center py-0.5">
                    {[0, 1, 2].map((chevronIndex) => (
                      <div
                        key={chevronIndex}
                        className="text-sm font-bold transition-all duration-300 rotate-90 leading-[0.6]"
                        style={getChevronStyle(isCompleted, nextStepCurrent, nextStepCompleted, chevronIndex)}
                      >
                        ›
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Horizontal layout: title and description stacked with underline indicator
              <div className="flex flex-col items-center">
                <div className={getTitleClasses(isCompleted, isCurrent, isError)}>
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-xs text-muted mt-1 font-normal">{item.description}</div>
                )}
              </div>
            )}

            {/* Horizontal chevrons (only for horizontal mode) */}
            {!isVertical && index < items.length - 1 && (
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

