// quartz/cfg.ts
// Minimal config helper for Quartz to provide a named export `defineConfig`.
// This mirrors common config factory patterns and ensures TypeScript typing support.

export type QuartzConfig<T = Record<string, any>> = T;

export function defineConfig<T extends Record<string, any>>(cfg: T): T {
  return cfg;
}

// Provide a default export as a convenience for consumers using default imports
export default defineConfig;
