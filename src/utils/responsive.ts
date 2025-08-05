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
    const smClasses = classMap[prop.sm].split(' ').map(cls => `sm:${cls}`);
    classes.push(...smClasses);
  }

  if (prop.md && classMap[prop.md]) {
    const mdClasses = classMap[prop.md].split(' ').map(cls => `md:${cls}`);
    classes.push(...mdClasses);
  }

  if (prop.lg && classMap[prop.lg]) {
    const lgClasses = classMap[prop.lg].split(' ').map(cls => `lg:${cls}`);
    classes.push(...lgClasses);
  }

  if (prop.xl && classMap[prop.xl]) {
    const xlClasses = classMap[prop.xl].split(' ').map(cls => `xl:${cls}`);
    classes.push(...xlClasses);
  }

  if (prop['2xl'] && classMap[prop['2xl']]) {
    const xl2Classes = classMap[prop['2xl']].split(' ').map(cls => `2xl:${cls}`);
    classes.push(...xl2Classes);
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
  },
  linearProgress: {
    width: {
      sm: 'w-48',
      md: 'w-80',
      lg: 'w-96'
    },
    height: {
      sm: 'h-1.5',
      md: 'h-3',
      lg: 'h-4'
    }
  }
} as const;
