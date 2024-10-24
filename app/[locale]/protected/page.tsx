import 'server-only';
import { Box, Stack, Typography, Paper, Divider, Container, Button, Link as MuiLink } from "@mui/material";
import DeployButton from "@/components/buttons/DeployButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import { getLocale, getTranslations } from "next-intl/server";
import { redirect } from "@/utils/next-intl/routing";
import ProtectectedSignOut from '@/components/forms/ProtectectedSignOut.form';



export default async function ProtectedPage() {
    const supabase = await createClient();
    const locale = await getLocale();
    const t = await getTranslations('Protected');

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect({
            href: {
                pathname: '/login',
                query: { 'message': 'No  user.' },
            },
            locale,
        });
    }

    return (
        <Stack flex={1} width="100%" gap="5rem" alignItems="center">
            <Box width="100%">
                <Paper
                    sx={{
                        padding: '1.5rem',
                        fontWeight: 'bold',
                        backgroundColor: '#5b21b6',
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    {t('pageHeroTitle')}
                </Paper>

                <Box
                    display="flex"
                    justifyContent="center"
                    borderBottom="1px solid rgba(31, 41, 55, 0.1)"
                    height="4rem"
                    width="100%"
                >
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        <DeployButton />
                        <ProtectectedSignOut user={user} />
                    </Container>
                </Box>
            </Box>

            <Stack flex={1} gap="5rem" maxWidth="64rem" padding="0.75rem">
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    marginBottom="1rem"
                    fontSize="2.25rem"
                >
                    Next steps
                </Typography>
                <FetchDataSteps />
            </Stack>

            <Divider sx={{ width: '100%' }} />
            <Box component="footer" padding="2rem" textAlign="center" fontSize="0.75rem">
                <Typography>
                    Powered by{" "}
                    <MuiLink
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        fontWeight="bold"
                        underline="hover"
                        rel="noreferrer"
                    >
                        Supabase
                    </MuiLink>
                </Typography>
            </Box>
        </Stack>
    );
}
