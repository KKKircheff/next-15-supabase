import 'server-only'
import { FormControl, FormLabel, Input, Paper, Stack, Typography } from "@mui/material";
import { SubmitButton } from "@/components/buttons/SubmitButton";
import { Link, } from "@/utils/next-intl/routing";
import { signIn } from '@/actions/signIn';


export default async function Login(
    props: {
        searchParams: Promise<{ message: string }>;
    }
) {
    const searchParams = await props.searchParams;

    return (
        <Stack>
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
                            <Typography variant="h4" component="h1">
                                <strong>Login here 👋</strong>
                            </Typography>
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
                            formAction={signIn}
                            color='primary'
                            pendingText="Signing In..."
                        >
                            Log In
                        </SubmitButton>
                        {searchParams?.message && (
                            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(31, 41, 55, 0.1)', color: 'currentColor', textAlign: 'center' }}>
                                {searchParams.message}
                            </p>
                        )}
                        <Typography
                            fontSize='sm'
                            sx={{ alignSelf: 'center' }}
                        >
                            Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
                        </Typography>
                    </Paper>
                </Paper>
            </form >
        </Stack>
    );
}