import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/vets': {
      en: '/vets',
      pl: '/weterynarze',
    },
    '/vets/[slug]': {
      en: '/vets/[slug]',
      pl: '/weterynarze/[slug]',
    },
    '/dashboard': {
      en: '/dashboard',
      pl: '/panel',
    },
    '/dashboard/edit-vets': {
      en: '/dashboard/edit-vets',
      pl: '/panel/edycja-weterynarzy',
    },
    '/dashboard/edit-vets/[slug]': {
      en: '/dashboard/edit-vets/[slug]',
      pl: '/panel/edycja-weterynarzy/[slug]',
    },
  },
});
