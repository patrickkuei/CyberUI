import { useCallback, useEffect, useState } from "react";

export type ResponsiveObject<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
};

export type ResponsiveValue<T> = T | ResponsiveObject<T>;

// Type guard to safely narrow a ResponsiveValue<T> to the object shape
export const isResponsiveObject = <T>(
  v: ResponsiveValue<T>
): v is ResponsiveObject<T> => typeof v === "object" && v !== null;

export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export const getResponsiveClasses = <T extends string>(
  prop: ResponsiveValue<T>,
  classMap: Record<T, string>
): string => {
  if (!isResponsiveObject(prop)) {
    return classMap[prop] || "";
  }

  const classes: string[] = [];

  if (prop.base && classMap[prop.base]) {
    classes.push(classMap[prop.base]);
  }

  if (prop.sm && classMap[prop.sm]) {
    const smClasses = classMap[prop.sm].split(" ").map((cls) => `sm:${cls}`);
    classes.push(...smClasses);
  }

  if (prop.md && classMap[prop.md]) {
    const mdClasses = classMap[prop.md].split(" ").map((cls) => `md:${cls}`);
    classes.push(...mdClasses);
  }

  if (prop.lg && classMap[prop.lg]) {
    const lgClasses = classMap[prop.lg].split(" ").map((cls) => `lg:${cls}`);
    classes.push(...lgClasses);
  }

  if (prop.xl && classMap[prop.xl]) {
    const xlClasses = classMap[prop.xl].split(" ").map((cls) => `xl:${cls}`);
    classes.push(...xlClasses);
  }

  if (prop["2xl"] && classMap[prop["2xl"]]) {
    const xl2Classes = classMap[prop["2xl"]]
      .split(" ")
      .map((cls) => `2xl:${cls}`);
    classes.push(...xl2Classes);
  }

  return classes.join(" ");
};

export const combineResponsiveClasses = (
  ...classes: (string | undefined)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const RESPONSIVE_SIZE_MAPS = {
  button: {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-6 text-lg",
    lg: "py-3 px-8 text-xl",
  },
  badge: {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-3",
  },
  input: {
    sm: "py-2 text-sm",
    md: "py-3 text-base",
    lg: "py-4 text-lg",
  },
  card: {
    sm: "p-3 space-y-3 text-sm",
    md: "p-6 space-y-6 text-base",
    lg: "p-8 space-y-8 text-lg",
  },
  notification: {
    sm: "p-3 space-x-2",
    md: "p-4 space-x-4",
    lg: "p-6 space-x-6",
  },
  tabNavigation: {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-lg",
    lg: "px-8 py-3 text-xl",
  },
  linearProgress: {
    width: {
      sm: "w-48",
      md: "w-80",
      lg: "w-96",
    },
    height: {
      sm: "h-1.5",
      md: "h-3",
      lg: "h-4",
    },
  },
  skeleton: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
  carousel: {
    sm: "h-48",
    md: "h-64",
    lg: "h-80",
  },
} as const;

// Breakpoint pixel map aligned with Tailwind defaults
export const BREAKPOINT_PIXELS = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type BreakpointPixels = typeof BREAKPOINT_PIXELS;

// Resolve a ResponsiveValue<T> to a concrete value at a given viewport width
export const resolveResponsiveValue = <T>(
  prop: ResponsiveValue<T>,
  width: number,
  fallback: T
): T => {
  if (!isResponsiveObject<T>(prop)) {
    return (prop as T) ?? fallback;
  }

  let resolved: T = (prop.base ?? fallback) as T;
  const order: (keyof BreakpointPixels)[] = ["sm", "md", "lg", "xl", "2xl"];
  for (const key of order) {
    const min = BREAKPOINT_PIXELS[key];
    if (width >= min && prop[key] !== undefined) {
      resolved = prop[key] as T;
    }
  }
  return resolved;
};

// React hook to resolve a ResponsiveValue<T> and update on resize
export const useResponsiveValue = <T>(
  prop: ResponsiveValue<T>,
  fallback: T
): T => {
  const get = useCallback(
    () =>
      typeof window === "undefined"
        ? fallback
        : resolveResponsiveValue(prop, window.innerWidth, fallback),
    [fallback, prop]
  );

  const [value, setValue] = useState<T>(get);

  useEffect(() => {
    if (!isResponsiveObject<T>(prop)) {
      setValue((prop as T) ?? fallback);
      return;
    }
    const onResize = () => setValue(get());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fallback, get, prop]);

  return value;
};
