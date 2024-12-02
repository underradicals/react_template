/// <reference types="vite/client" />
/// <reference types="vitest" />

import { ConfigEnv, CSSOptions, defineConfig, PluginOption, ServerOptions, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { InlineConfig } from "vitest/node";

const ServerOptionProps: ServerOptions = {
  port: 3000,
  host: "127.0.0.1",
};

const CSSDevOptionProps: CSSOptions = {
  postcss: {
    plugins: [autoprefixer],
  },
  modules: {
    localsConvention: "camelCaseOnly",
    exportGlobals: true,
  },
}

const CSSOptionProps: CSSOptions = {
  postcss: {
    plugins: [autoprefixer, cssnano],
  },
  modules: {
    localsConvention: "camelCaseOnly",
    exportGlobals: true,
  },
}

const VitestConfig: InlineConfig = {
  environment: 'jsdom',
  globals: true,
  setupFiles: ['tests/setup.ts'],
  coverage: {
    reporter: ['json', 'html']
  }
}

const VitePluginArray: PluginOption[] | undefined = [react()]

function UserConfigFunction({ command }: ConfigEnv): UserConfig {
  if (command === "serve") {
    return {
      server: ServerOptionProps,
      css: CSSDevOptionProps,
      plugins: VitePluginArray,
      test: VitestConfig
    };
  } else {
    return {
      server: ServerOptionProps,
      css: CSSOptionProps,
      plugins: VitePluginArray,
    };
  }
}

/** @type {import('vite').UserConfig} */
export default defineConfig(UserConfigFunction);
