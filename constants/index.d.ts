export declare const DEMO_TABS: readonly ["Home", "Interactive", "Elements", "Feedback"];
export declare const PROGRESS_CONFIG: {
    readonly RADIUS: 20;
    readonly SEGMENT_COUNT: 20;
    readonly SEGMENT_ANGLE: number;
    readonly GAP_ANGLE: 4;
    readonly INNER_RADIUS: 18.5;
    readonly OUTER_RADIUS: 23.5;
    readonly OUTER_TICK_RADIUS: 30;
};
export declare const CORPORATIONS: readonly ["Arasaka Corporation", "Militech Industries", "Kang Tao Systems", "NetWatch Division"];
/**
 * @deprecated This export will be removed in v2.0.0.
 * Use your own custom tab names array instead. The TabNavigation component
 * now accepts any string[] for tabs, so you don't need predefined constants.
 */
export declare const TABS: readonly ["Home", "Interactive", "Elements", "Feedback"];
/**
 * @deprecated This export will be removed in v2.0.0.
 * Use 'string' type directly instead. The TabNavigation component now accepts
 * any string for tab names instead of being limited to predefined values.
 */
export type Tab = string;
