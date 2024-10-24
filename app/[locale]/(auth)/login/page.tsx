import 'server-only'
import { FormControl, FormLabel, Input, Paper, Stack, Typography } from "@mui/material";
import { Link, Locale, } from "@/utils/next-intl/routing";
import { ReactNode } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LoginForm } from '@/components/forms/Login.form';

type Params = Promise<{ locale: Locale }>
type SearchParams = Promise<{
    [key: string]: string | string[] | undefined;
    message?: string;
}>;

export async function generateMetadata(props: {
    params: Params
    searchParams: SearchParams
}) {
    const { locale } = await props.params
    const t = await getTranslations({ locale, namespace: 'MetadataLogin' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function Login(props: {
    params: Params
    searchParams: SearchParams
}) {

    const { message } = await props.searchParams

    return (
        <Stack justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} sx={{ flexFlow: 'row nowrap' }}>
            <LoginForm message={message ?? ''} />
        </Stack>
    );
}
