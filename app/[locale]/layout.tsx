import * as React from 'react';
import "../globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl"
import Navbar from '@/components/ui/Navbar';
import { Locale } from '@/utils/next-intl/routing';


const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    const locale = await getLocale() as Locale;
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeRegistry>
                        <Navbar locale={locale} />
                        {children}
                    </ThemeRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

