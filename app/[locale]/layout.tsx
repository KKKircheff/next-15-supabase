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

// const defaultUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "http://localhost:3000";

// export const metadata = {
//     metadataBase: new URL(defaultUrl),
//     title: "Next.js 15 React 19 |  Supabase Auth & DB | Next-intl | Material UI Starter Kit",
//     description: "The ultimate boilerplate to start modern web app with Next.js, Supabase and MUI",
// };

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Refactor and use the function below for multilanguage metadata generation 

export async function generateMetadata({
    params
}: Omit<Props, 'children'>) {
    // Optionally integrate with static rendering in the 
    // Metadata API by passing an explicit locale.
    const { locale } = await params;
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

