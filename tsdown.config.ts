import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/main/index.ts", "src/bar/bar.ts", "src/foo/foo.ts"],
  unbundle: true,
  outDir: "dist",
  outputOptions: {
    preserveModules: true,
    preserveModulesRoot: "src/main",
  },
});
