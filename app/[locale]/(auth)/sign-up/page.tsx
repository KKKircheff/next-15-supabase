import 'server-only'
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { FormControl, FormLabel, Input, Paper, Stack, Typography } from "@mui/material";
import AuthButton from "@/components/buttons/AuthButton";
import { SubmitButton } from "@/components/buttons/SubmitButton";
import { Link, redirect } from "@/utils/next-intl/routing";
export default function SignUp({
    searchParams,
}: {
    searchParams: { message: string };
}) {

    const signUp = async (formData: FormData) => {
        "use server";

        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            console.log(error);
            return redirect({
                pathname: '/sign-up',
                query: {
                    message: 'Error when creating user'
                }
            });
        }
        return redirect({
            pathname: '/login',
            query: {
                message: 'You can log in now with your new credentials'
            }
        });
    };

    return (
        <form>
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
                        width: 300,
                        mx: 'auto', my: 4, py: 3, px: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'lg', boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <Stack>
                        <Typography variant="h5" component="h1">
                            <strong>Create an account 👋</strong>
                        </Typography>
                        <Typography variant="subtitle1">Sign up here</Typography>
                    </Stack>

                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input name="email" type="email" placeholder="johndoe@email.com" required />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" placeholder="password" required />
                    </FormControl>
                    <SubmitButton
                        formAction={signUp}
                        color='success'
                        pendingText="Signing Up..."
                    >
                        Sign Up
                    </SubmitButton>
                    {searchParams?.message && (
                        <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(31, 41, 55, 0.1)', color: 'currentColor', textAlign: 'center' }}>
                            {searchParams.message}
                        </p>
                    )}
                    <Typography
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Alread have an account? <Link href="/login">Log in</Link>
                    </Typography>
                </Paper>
            </Paper>
        </form>
    );
}