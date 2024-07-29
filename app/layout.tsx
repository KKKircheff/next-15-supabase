import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout(props: any) {
    return (
        <html lang="en">
            <body>
                +        <AppRouterCacheProvider>
                    {props.children}
                    +        </AppRouterCacheProvider>
            </body>
        </html>
    );
}
