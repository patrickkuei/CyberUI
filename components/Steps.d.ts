import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
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
declare const Steps: React.FC<StepsProps>;
export default Steps;
