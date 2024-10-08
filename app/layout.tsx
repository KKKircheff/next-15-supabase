import * as React from 'react';
import "./globals.css";
import ThemeRegistry from '@/utils/mui/ThemeRegistry';
import Header from '@/components/ui/Header';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <Header />
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}

