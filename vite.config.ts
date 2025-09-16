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
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

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
            fileName: (format) => `index.${format === "es" ? "es.js" : "js"}`,
          },
          sourcemap: true,
          rollupOptions: {
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
              assetFileNames: (assetInfo) => {
                if (assetInfo.name === "style.css") return "cyberui-2045.css";
                return assetInfo.name as string;
              },
            },
          },
          cssCodeSplit: false,
        }
      : undefined,
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
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
    ],
  },
}));
