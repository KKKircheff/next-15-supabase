import { ReactNode } from "react";
import "../globals.css";

import ThemeRegistry from '@/utils/mui/ThemeRegistry';

import { NextIntlClientProvider } from "next-intl"
import { getTranslations, getMessages } from "next-intl/server";
import { Locale, routing } from '@/utils/next-intl/routing';

import Navbar from '@/components/ui/Navbar';

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    children: ReactNode;
    params: { locale: Locale };
    searchParams?: { [key: string]: string | string[] | undefined }
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
    { params, searchParams }: Omit<Props, 'children'>,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'MetadataMain' });
    return {
        title: t('title'),
        description: t('description')
    };
}


export default async function LocaleLayout(
    props: Props
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

