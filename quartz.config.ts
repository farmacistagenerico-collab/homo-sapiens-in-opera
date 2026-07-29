import { defineConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"

export default defineConfig({
  configuration: {
    pageTitle: "Homo Sapiens in Opera",
    pageTitleSuffix: " — Homo Sapiens in Opera",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "farmacistagenerico-collab.github.io/homo-sapiens-in-opera",
    ignorePatterns: ["00-sistema", "templates", ".obsidian", "assets"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e5e5e5",
          gray: "#737373",
          darkgray: "#262626",
          dark: "#171717",
          secondary: "#2563eb",
          tertiary: "#16a34a",
          highlight: "rgba(37, 99, 235, 0.15)",
          textHighlight: "#fff3cd",
        },
        darkMode: {
          light: "#171717",
          lightgray: "#262626",
          gray: "#a3a3a3",
          darkgray: "#d4d4d4",
          dark: "#fafafa",
          secondary: "#60a5fa",
          tertiary: "#4ade80",
          highlight: "rgba(96, 165, 250, 0.15)",
          textHighlight: "#fff3cd",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // ExplicitPublish rimosso: tutti i .md vengono pubblicati
      // Aggiungilo di nuovo se vuoi pubblicare solo file con "publish: true"
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
})
