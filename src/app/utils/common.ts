const createValueMap = <T, K extends keyof T>(
  items: T[],
  key: K
): Record<string, T[K]> => {
  return items.reduce((acc, item) => {
    acc[item[key] as unknown as string] = item[key];
    return acc;
  }, {} as Record<string, T[K]>);
};

export { createValueMap };
