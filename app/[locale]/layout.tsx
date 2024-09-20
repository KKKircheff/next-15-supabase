import * as React from 'react';
import "../globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import Header from '@/components/ui/Header';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl"


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
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeRegistry>
                        <Header />
                        {children}
                    </ThemeRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

