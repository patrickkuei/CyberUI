export const TABS = ['Home', 'Interactive', 'Elements', 'Feedback'] as const;

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

export type Tab = typeof TABS[number];
