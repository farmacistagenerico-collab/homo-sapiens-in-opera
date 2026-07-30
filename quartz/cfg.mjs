// quartz/cfg.mjs - ESM runtime shim
// This shim ensures Quartz can import the config at runtime when it resolves JS ESM modules.
export function defineConfig(cfg) {
  return cfg;
}
export default defineConfig;
