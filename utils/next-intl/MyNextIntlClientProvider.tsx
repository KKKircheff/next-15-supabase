"use client"
import * as React from 'react';
import { NextIntlClientProvider } from "next-intl"

const MyNextIntlClientProvider = ({ messages, children }: { messages: any, children: React.ReactNode }) => {
    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>

    )
}

export default MyNextIntlClientProvider;