import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { FormControl, FormLabel, Input, Sheet, Stack, Typography } from "@mui/joy";
import AuthButton from "@/components/AuthButton";
import { SubmitButton } from "@/components/SubmitButton";
import 'server-only'
export default function Login({
    searchParams,
}: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/protected");
    };

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
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/login?message=Check email to continue sign in process");
    };

    return (
        <form>
            <Sheet
                sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Sheet
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
                        <Typography level="h4" component="h1">
                            <strong>Welcome back 👋</strong>
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
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
                        endDecorator={<Link href="/login">Log in</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Alread have an account?
                    </Typography>
                </Sheet>
            </Sheet>
        </form>
    );
}