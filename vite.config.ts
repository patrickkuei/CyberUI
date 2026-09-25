/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import pkg from "./package.json" with { type: "json" };
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Everything the consumer installs (dependencies + peerDependencies) must stay
// external, including subpaths like `react/jsx-runtime`. With preserveModules,
// anything bundled instead gets emitted under dist/node_modules/ or
// dist/_virtual/ — paths npm never publishes (issue #33).
const externalPackages = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];
const isExternal = (id: string) =>
  externalPackages.some((name) => id === name || id.startsWith(`${name}/`));

const umdGlobals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "ReactJSXRuntime",
  clsx: "clsx",
  "tailwind-merge": "tailwindMerge",
};

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => ({
  base: "/CyberUI/",
  plugins: [
    react(),
    tailwindcss(),
    ...(mode === "library"
      ? [
          dts({
            insertTypesEntry: true,
            entryRoot: 'src',
            copyDtsFiles: true,
            tsconfigPath: "./tsconfig.app.json",
            // Exclude Storybook story and test files from type output
            exclude: [
              '**/*.stories.*',
              '**/*.story.*',
              '**/*.test.*',
              '**/*.spec.*'
            ],
            compilerOptions: {
              noEmit: false,
              declaration: true,
              emitDeclarationOnly: true,
            },
          }),
        ]
      : []),
  ],
  build:
    mode === "library"
      ? {
          lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "CyberUI2045",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format === "es" ? "es.js" : "cjs"}`,
          },
          sourcemap: true,
          rollupOptions: {
            external: isExternal,
            output: [
              {
                format: "es",
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: (chunkInfo) => chunkInfo.name === "index" ? "index.es.js" : "[name].js",
                globals: umdGlobals,
                assetFileNames: (assetInfo) => {
                  if (assetInfo.name === "style.css") return "cyberui-2045.css";
                  return assetInfo.name as string;
                },
              },
              {
                format: "umd",
                entryFileNames: "index.cjs",
                name: "CyberUI2045",
                globals: umdGlobals,
                assetFileNames: (assetInfo) => {
                  if (assetInfo.name === "style.css") return "cyberui-2045.css";
                  return assetInfo.name as string;
                },
              },
            ],
          },
          cssCodeSplit: false,
        }
      : undefined,
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          setupFiles: ["src/test/setup.ts"],
          include: ["src/**/*.test.{ts,tsx}"],
        },
      },
    ],
  },
}));
