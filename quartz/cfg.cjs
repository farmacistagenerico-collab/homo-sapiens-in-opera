// quartz/cfg.cjs - CommonJS runtime shim
// This shim ensures Quartz can import the config at runtime when it resolves CommonJS modules.
function defineConfig(cfg) {
  return cfg;
}
module.exports = { defineConfig, default: defineConfig };
