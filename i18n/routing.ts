import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  localePrefix: "never",
  pathnames: {
    "/": "/",
    "/vets": {
      en: "/vets",
      pl: "/weterynarze",
    },
    "/vets/[slug]": {
      en: "/vets/[slug]",
      pl: "/weterynarze/[slug]",
    },
  },
});
