import {MetadataRoute} from 'next';
import {routing, getPathname, Locale} from '@/utils/next-intl/routing';
import {host} from '@/utils/next-intl/config';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        getEntry('/'),
        getEntry('/login'),
        getEntry('/sign-up'),
        getEntry('/protected'),
    ];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
    return {
        url: getUrl(href, routing.defaultLocale),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((locale) => [locale, getUrl(href, locale)])
            ),
        },
    };
}

function getUrl(href: Href, locale: Locale) {
    const pathname = getPathname({locale, href});
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
