import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASEURL || "http://localhost:3000/",
    setupNodeEvents(on, config) {
      return config;
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN || "default-token-value",
    RESEND_API_KEY: process.env.RESEND_API_KEY || "",
    MARKNAD_EMAIL: process.env.MARKNAD_EMAIL || "",
  },
});
