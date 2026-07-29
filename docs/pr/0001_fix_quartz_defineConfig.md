---
title: "fix(quartz): export defineConfig as const to ensure named import resolution"
---

This pull request exports `defineConfig` as a named `const` from `quartz/cfg.ts` so Quartz can reliably resolve `import { defineConfig } from './quartz/cfg'` during the build. The file keeps the default export for backwards compatibility.

CI is expected to validate the fix.
