export type ResponsiveValue<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const getResponsiveClasses = <T extends string>(
  prop: ResponsiveValue<T>,
  classMap: Record<T, string>
): string => {
  if (typeof prop === 'string') {
    return classMap[prop] || '';
  }

  const classes: string[] = [];

  if (prop.base && classMap[prop.base]) {
    classes.push(classMap[prop.base]);
  }

  if (prop.sm && classMap[prop.sm]) {
    classes.push(`sm:${classMap[prop.sm]}`);
  }

  if (prop.md && classMap[prop.md]) {
    classes.push(`md:${classMap[prop.md]}`);
  }

  if (prop.lg && classMap[prop.lg]) {
    classes.push(`lg:${classMap[prop.lg]}`);
  }

  if (prop.xl && classMap[prop.xl]) {
    classes.push(`xl:${classMap[prop.xl]}`);
  }

  if (prop['2xl'] && classMap[prop['2xl']]) {
    classes.push(`2xl:${classMap[prop['2xl']]}`);
  }

  return classes.join(' ');
};

export const combineResponsiveClasses = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const RESPONSIVE_SIZE_MAPS = {
  button: {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-lg',
    lg: 'py-3 px-8 text-xl'
  },
  badge: {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-3'
  },
  input: {
    sm: 'py-2 text-sm',
    md: 'py-3 text-base',
    lg: 'py-4 text-lg'
  },
  card: {
    sm: 'p-3 space-y-3 text-sm',
    md: 'p-6 space-y-6 text-base',
    lg: 'p-8 space-y-8 text-lg'
  },
  notification: {
    sm: 'p-3 space-x-2',
    md: 'p-4 space-x-4',
    lg: 'p-6 space-x-6'
  },
  tabNavigation: {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-lg',
    lg: 'px-8 py-3 text-xl'
  }
} as const;
