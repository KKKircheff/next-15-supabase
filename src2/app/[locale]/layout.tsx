
import * as React from 'react';
import "./globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import Header from '@/src2/components/ui/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import MyNextIntlClientProvider from '@/utils/next-intl/MyNextIntlClientProvider';

type Props = {
    children: React.ReactNode;
    params: { locale: string };
}

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: Props) {

    const messages = await getMessages();
    console.log('in local layout');

    return (
        <html lang={locale}>
            <body>
                <MyNextIntlClientProvider messages={messages}>
                    <ThemeRegistry>
                        <Header />
                        {children}
                    </ThemeRegistry>
                </MyNextIntlClientProvider>
            </body>
        </html>
    );
}

