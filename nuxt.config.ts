import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Force disable SSR since your original config had it as false
  // This will prevent the SSR rendering errors
  ssr: false,
  target: "static",

  app: {
    head: {
      title:
        "MSC -  Medical Supply Chain | Pharmaceutical Distribution Platform",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: "MSC - Pharmaceutical Distribution Platform",
        },
        {
          name: "keywords",
          content: "Medical Supply Chain",
        },
        { name: "author", content: "MSC" },
        { property: "og:title", content: "MSC" },
        {
          property: "og:description",
          content:
            "Medical Supply Chain | Pharmaceutical Distribution Platform",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://olgnova.com" },
        { property: "og:image", content: "https://olgnova.com/icon.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://olgnova.com" },
        { name: "twitter:title", content: "olgnova" },
        {
          name: "twitter:description",
          content:
            "Medical Supply Chain | Pharmaceutical Distribution Platform",
        },
        {
          name: "twitter:image",
          content: "https://olgnova.com/icon.jpg",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://olgova.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  // Remove problematic modules and keep only essential ones
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],

  css: ["/assets/css/main.css"],

  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },

  transpile: ["@vueuse/motion"],

  axios: {
    timeout: 10000,
  },

  // Set public runtime config
  runtimeConfig: {
    public: {
      siteUrl: "https://OLGNova.com",
    },
  },

  // Disable prerendering to avoid the SSR errors
  nitro: {
    prerender: {
      enabled: false,
    },
  },

  compatibilityDate: "2025-02-01",
});
