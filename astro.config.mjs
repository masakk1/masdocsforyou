// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://guides.ohmyiris.win/",
  integrations: [
    starlight({
      title: "Mas' Docs for You",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/masakk1/masdocsforyou",
        },
      ],
      plugins: [
        starlightThemeFlexoki({
          accentColor: "yellow",
        }),
      ],
      sidebar: [
        {
          label: "Linux",
          autogenerate: { directory: "linux" },
          // I can also do each item individually:
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Discover programs", slug: "linux/program_discovery" },
          // ],
        },
      ],
    }),
  ],
});
