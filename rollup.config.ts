import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";

export default defineConfig([
  {
    input: ["src/main/index.ts", "src/bar/bar.ts", "src/foo/foo.ts"],
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src/main",
      entryFileNames: "[name].js",
    },
    plugins: [
      esbuild({
        target: "es2020",
      }),
    ],
    external: [/node_modules/],
  },
]);
