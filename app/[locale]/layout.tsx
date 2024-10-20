// import * as React from 'react';
import { ReactNode } from "react";
import "../globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl"
import Navbar from '@/components/ui/Navbar';
import { Locale, routing } from '@/utils/next-intl/routing';


type Props = {
    children: ReactNode;
    params: { locale: string };
};

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//    params: { locale }
// }: Omit<Props, 'children'>) {
//     const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

//     return {
//         title: t('title')
//     };
// }


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

