import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Force disable SSR since your original config had it as false
  // This will prevent the SSR rendering errors
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "MSC Pharmaceuticals",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content:
            "MSC Pharmaceuticals - Your trusted online pharmacy for quality medications, healthcare products, and pharmaceutical supplies with fast delivery across Africa",
        },
        {
          name: "keywords",
          content:
            "pharmacy, pharmaceuticals, online pharmacy, medications, healthcare products, medical supplies, prescription drugs, MSC, Africa pharmacy, online medication delivery",
        },
        { name: "author", content: "MSC Pharmaceuticals" },
        { property: "og:title", content: "MSC Pharmaceuticals - Online Pharmacy" },
        {
          property: "og:description",
          content:
            "Your trusted online pharmacy for quality medications, healthcare products, and pharmaceutical supplies with fast delivery across Africa",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mscpharmaceuticals.com" },
        { property: "og:image", content: "https://mscpharmaceuticals.com/msc-logo.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://mscpharmaceuticals.com" },
        { name: "twitter:title", content: "MSC Pharmaceuticals" },
        {
          name: "twitter:description",
          content:
            "Your trusted online pharmacy for quality medications, healthcare products, and pharmaceutical supplies with fast delivery across Africa",
        },
        {
          name: "twitter:image",
          content: "https://mscpharmaceuticals.com/msc-logo.jpg",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://mscpharmaceuticals.com" },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap'
        }
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  build: {
    transpile: ["lucide-vue-next"],
  },
  // Remove problematic modules and keep only essential ones
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  transpile: [],
  axios: {
    timeout: 10000,
  },
  // Set public runtime config
  runtimeConfig: {
    public: {
      siteUrl: "https://mscpharmaceuticals.com",
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