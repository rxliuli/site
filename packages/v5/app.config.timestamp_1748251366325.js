// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import markdownPlugin from "unplugin-markdown/vite";
var config = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"]
      }),
      tailwindcss(),
      markdownPlugin()
      // analyzer({
      //   analyzerMode: 'static',
      //   fileName: 'stats.html',
      // }),
    ]
  },
  server: {
    prerender: {
      routes: ["/", "/ping/privacy", "/webstore/privacy"],
      crawlLinks: true
    }
  }
});
var app_config_default = config;
export {
  app_config_default as default
};
