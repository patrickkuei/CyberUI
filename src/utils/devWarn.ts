const warned = new Set<string>();

/**
 * Logs a `[cyberui-2045]`-prefixed console warning once per distinct `key` per
 * session, so a misconfigured component re-rendering doesn't spam the console.
 */
export function warnOnce(key: string, message: string): void {
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(`[cyberui-2045] ${message}`);
}
