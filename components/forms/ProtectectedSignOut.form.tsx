'use client'
import { signOut } from "@/actions/signOut";

import { Stack, Typography } from '@mui/material';
import { useActionState } from "react";
import { User } from "@supabase/supabase-js";
import SignoutButton from "../buttons/SignoutButton.button";

type Props = {
    user: User,
}

export default function ProtectectedSignOut({ user }: Props) {
    const [state, action, isPending] = useActionState(signOut, null);

    return (<Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="body1">Hey, {user.email}!</Typography>
        <form action={action} method="post">
            <SignoutButton isPending={isPending} />
        </form>
    </Stack>
    )
}