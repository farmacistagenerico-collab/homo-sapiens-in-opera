// quartz/cfg.ts
// Minimal config helper for Quartz to provide a named export `defineConfig`.
// This mirrors common config factory patterns and ensures TypeScript typing support.

export type QuartzConfig<T = Record<string, any>> = T;

// Export as a const (ESM-friendly) so `import { defineConfig }` reliably resolves
export const defineConfig = <T extends Record<string, any>>(cfg: T): T => {
  return cfg;
};

// keep default export for consumers that import default
export default defineConfig;
