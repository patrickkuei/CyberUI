// Demo tabs for Storybook stories - not part of the component API
export const DEMO_TABS = ['Home', 'Interactive', 'Elements', 'Feedback'] as const;

export const PROGRESS_CONFIG = {
  RADIUS: 20,
  SEGMENT_COUNT: 20,
  SEGMENT_ANGLE: 360 / 20,
  GAP_ANGLE: 4,
  INNER_RADIUS: 18.5,
  OUTER_RADIUS: 23.5,
  OUTER_TICK_RADIUS: 30,
} as const;

export const CORPORATIONS = [
  'Arasaka Corporation',
  'Militech Industries',
  'Kang Tao Systems',
  'NetWatch Division',
] as const;

/**
 * @deprecated This export will be removed in v2.0.0.
 * Use your own custom tab names array instead. The TabNavigation component
 * now accepts any string[] for tabs, so you don't need predefined constants.
 */
export const TABS = DEMO_TABS;

/**
 * @deprecated This export will be removed in v2.0.0.
 * Use 'string' type directly instead. The TabNavigation component now accepts
 * any string for tab names instead of being limited to predefined values.
 */
export type Tab = string;
