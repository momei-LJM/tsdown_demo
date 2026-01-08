import { defineConfig } from "tsdown";
import Vue from "unplugin-vue/rolldown";

export default defineConfig({
  entry: [
    // "src/main/index.ts",
    // "src/bar/bar.ts",
    // "src/foo/foo.ts",
    "src/main/app.vue",
  ],
  plugins: [Vue({ isProduction: true })],
  external: ["vue"],
  unbundle: true,
  outDir: "dist",
  treeshake: false,
  outputOptions: {
    preserveModules: true,
    preserveModulesRoot: "src/main",
  },
  dts: {
    vue: true,
  },
  // dts: false,
});
