import 'server-only'
import SignOutButton from "@/components/buttons/SignOutButton/SignOutButton";
import { createClient } from "@/utils/supabase/server";
import { Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser()

    const t = await getTranslations('Home');

    return (
        <Stack justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} sx={{ flexFlow: 'row nowrap' }}>
            <Stack
                direction={'column'}
                mx={'auto'} my={4} p={4} gap={2}
                maxWidth={500}
                border={'1px solid lightgray'}
                borderRadius={'10px'}
                boxShadow={'md'}
            >
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
        </Stack>
    );
}