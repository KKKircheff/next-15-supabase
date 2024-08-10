"use client"

import { Button } from "@mui/joy";
import { useActionState } from "react";
import { signOut } from "./action";
export default function SignOutButton() {

    const [state, formAction, isPending] = useActionState(signOut, null);

    return (
        <form action={formAction}>
            <Button type='submit' disabled={isPending}>
                {!isPending ? 'Sign out' : 'Logging out ..'}
            </Button>
        </form>
    )
}
