import 'server-only'
import SignOutButton from "@/components/buttons/SignOutButton/SignOutButton";
import { createClient } from "@/utils/supabase/server";
import { Paper, Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
// import { Locale } from '@/utils/next-intl/routing';
// import { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//     params: {
//         locale: string
//     };
// };

// export async function generateMetadata(
//     { params }: Props,
// ): Promise<Metadata> {
//     const locale = (await params).locale;
//     const t = await getTranslations({ locale, namespace: 'MetadataMain' });
//     return {
//         title: t('title'),
//         description: t('description')
//     };
// }

export default async function Home() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser()

    const t = await getTranslations('Home');

    return (
        <Paper
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Paper
                sx={{
                    maxWidth: 500,
                    mx: 'auto', my: 4, py: 3, px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'lg', boxShadow: 'md',
                }}
                variant="outlined"
            >
                <Stack gap={3}>
                    <Typography variant="h4" component="h1">
                        <strong>{t("welcome")}</strong>👋
                    </Typography>
                    {!user && <Typography variant="subtitle1">{t("notLoggedMessage")}</Typography>}
                    {user ?
                        <>
                            <Typography variant="subtitle1">{t('signedInAs')} {user.email} {t('browseRoutes')} </Typography>
                            <SignOutButton />
                        </>
                        : null}
                </Stack>
            </Paper>
        </Paper>
    );
}