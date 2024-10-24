'use client'
import { FormControl, FormLabel, Input, Paper, Stack, Typography } from "@mui/material";
import { SubmitButton } from "@/components/buttons/SubmitButton";
import { Link } from "@/utils/next-intl/routing";
import { signUp } from "@/actions/signUp";
import { useActionState } from "react";

type Props = {
    message?: string;
}

export const SignupForm = ({ message }: Props) => {
    const [state, action, isPending] = useActionState(signUp, null)

    return (
        <form action={action}>
            <Stack
                direction={'column'}
                mx={'auto'} my={4} p={4} gap={2}
                maxWidth={500}
                border={'1px solid lightgray'}
                borderRadius={'10px'}
                boxShadow={'md'}
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
                    color='primary'
                    isPending={isPending}
                    pendingText="Signing Up..."
                >
                    Sign Up
                </SubmitButton>
                {message && (
                    <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(31, 41, 55, 0.1)', color: 'currentColor', textAlign: 'center' }}>
                        {message}
                    </p>
                )}
                <Typography
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Alread have an account? <Link href="/login">Log in</Link>
                </Typography>
            </Stack>
        </form>
    )
}
