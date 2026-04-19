import { defineConfig } from "addfox";
import { pluginVue } from "@rsbuild/plugin-vue";

const manifest = {
  name: "SMUS Kairos",
  version: "1.0.0",
  manifest_version: 3,
  description: "Browser extension built with addfox",
  permissions: ["activeTab"],
  icons: {
    "16": "icons/sm.jpeg",
    "48": "icons/sm.jpeg",
    "128": "icons/sm.jpeg",
  },
  action: {
    default_icon: {
      "16": "icons/sm.jpeg",
      "48": "icons/sm.jpeg",
      "128": "icons/sm.jpeg",
    },
  },
};

export default defineConfig({
  manifest: { chromium: manifest, firefox: { ...manifest } },
  plugins: [pluginVue()],
  appDir: "app",
});
