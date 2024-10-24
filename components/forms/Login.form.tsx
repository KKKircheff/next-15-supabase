'use client'
import { FormControl, FormLabel, Input, Stack, Typography } from "@mui/material";
import { SubmitButton } from "@/components/buttons/SubmitButton";
import { signIn } from '@/actions/signIn';

import React, { useActionState } from 'react'
import { Link } from "@/utils/next-intl/routing";
type Props = {
    message: string
}

export const LoginForm = ({ message }: Props) => {
    const [state, action, isPending] = useActionState(signIn, null)

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
                <Typography variant="h4" component="h1">
                    <strong>Login here 👋</strong>
                </Typography>

                <Typography variant="body2" color="text.secondary">Please enter your credentials below.</Typography>

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
                    pendingText="Loggin in..."
                >
                    Log In
                </SubmitButton>
                {message && (
                    <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(31, 41, 55, 0.1)', color: 'currentColor', textAlign: 'center' }}>
                        {message}
                    </p>
                )}
                <Typography
                    fontSize='sm'
                    sx={{ alignSelf: 'center' }}
                >
                    Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
                </Typography>
            </Stack>
        </form >
    )
}
