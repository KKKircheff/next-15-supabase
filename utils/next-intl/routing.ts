import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/login': {
            en: 'en/login',
            nl: 'nl/login',
        },
        '/protected': {
            en: 'en/protected',
            nl: 'nl/protected',
        },
        '/sign-up': {
            en: 'en/sign-up',
            nl: 'nl/sign-up',
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

//don't use this useRouter !!! Not correct behaviour
export const {Link, getPathname, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation(routing);
