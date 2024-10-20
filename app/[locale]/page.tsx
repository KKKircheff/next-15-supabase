import 'server-only'
import SignOutButton from "@/components/buttons/SignOutButton/SignOutButton";
import { createClient } from "@/utils/supabase/server";
import { Paper, Stack, Typography } from "@mui/material";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Locale } from '@/utils/next-intl/routing';

export async function generateMetadata() {
    const locale = await getLocale() as Locale;
    const messages: any = await getMessages({ locale });
    const title = messages.NavbarLinks.HomeTitle;

    return {
        title,
        description: title,
    };
}

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
                    {!user && <Typography variant="subtitle1">Log in or Sign in to continue.</Typography>}
                    {user ? <Typography variant="subtitle1">You are signed in {user.email}. Browse protected routes.</Typography> : null}
                    {user ? <SignOutButton /> : null}
                </Stack>
            </Paper>
        </Paper>
    );
}