import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/login': {
            en: '/login',
            nl: '/login',
        },
        '/protected': {
            en: '/protected',
            nl: '/protected',
        },
        '/sign-up': {
            en: '/sign-up',
            nl: '/',
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation(routing);
