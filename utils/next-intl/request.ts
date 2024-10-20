import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    // Validate that the incoming `locale` parameter is valid
    let locale = await requestLocale;
    if (!routing.locales.includes(locale as any)) notFound();

    return {
        messages: (
            await (locale === 'en'
                ? // When using Turbopack, this will enable HMR for `en`
                  import('../../messages/en.json')
                : import(`../../messages/${locale}.json`))
        ).default,
    };
});
