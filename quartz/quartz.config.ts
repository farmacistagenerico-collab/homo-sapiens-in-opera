import { defineConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"

export default defineConfig({
  configuration: {
    pageTitle: "Homo Sapiens in Opera",
    pageTitleSuffix: " — Homo Sapiens in Opera",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
      domain: "homo-sapiens.in-opera.com",
    },
    locale: "it-IT",
    baseUrl: "https://homo-sapiens.in-opera.com",
    ignorePatterns: ["00-sistema", "templates", "*.md", "!content"],
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
      Plugin.ExplicitPublish(),
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
      Plugin.Favicon(),
      Plugin.CNAME(),
      Plugin.CustomOgImages(),
    ],
  },
  components: {
    head: [
      Component.NotFound(),
      Component.Redirect(),
      Component.SocialImages(),
      Component.Theme(),
      Component.MobileOnly(),
      Component.Links({
        links: [
          { href: "/curriculum", title: "Curriculum" },
          { href: "/tags", title: "Tag" },
          { href: "https://github.com/utente/homo-sapiens-in-opera", title: "GitHub", external: true },
        ],
      }),
    ],
    header: [
      Component.PageTitle(),
      Component.Search(),
      Component.Darkmode(),
      Component.DesktopOnly(Component.Explorer({
        title: "Rubriche",
        folderSortOrder: ["01-specchio", "02-bussola", "03-acciaio", "04-lettera", "05-bilancio", "06-libro-mese", "99-meta"],
        useSavedState: true,
      })),
    ],
    left: [
      Component.DesktopOnly(Component.TableOfContents()),
    ],
    right: [
      Component.Graph({
        localGraph: {
          showTags: true,
          maxDepth: 2,
        },
        globalGraph: {
          showTags: true,
          maxDepth: 1,
        },
      }),
    ],
    footer: [
      Component.Footer({
        links: {
          "GitHub": "https://github.com/utente/homo-sapiens-in-opera",
          "RSS": "/index.xml",
        },
      }),
    ],
  },
})