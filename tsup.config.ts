import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true, // generate .d.ts
  sourcemap: true,
  treeshake: true,
  minify: true,
  clean: true,
  injectStyle: true,
  external: ["react", "react-dom", "styled-components"], // keep as peer dep
});
