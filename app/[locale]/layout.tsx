import { ReactNode } from "react";
import "../globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl"
import Navbar from '@/components/ui/Navbar';
import { Locale, routing } from '@/utils/next-intl/routing';


type Props = {
    children: ReactNode;
    params: { locale: Locale };
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: Omit<Props, 'children'>) {
    const { locale } = await params;
    // Optionally integrate with static rendering in the 
    // Metadata API by passing an explicit locale.
    const t = await getTranslations({ locale, namespace: 'MetadataMain' });
    return {
        title: t('title'),
        description: t('description')
    };
}


export default async function LocaleLayout(
    props: Readonly<{
        children: React.ReactNode;
        params: { locale: Locale };
    }>
) {
    const params = await props.params;
    const messages = await getMessages();
    const { locale } = params;
    const { children } = props;

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeRegistry>
                        <Navbar locale={locale} />
                        {children}
                    </ThemeRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

