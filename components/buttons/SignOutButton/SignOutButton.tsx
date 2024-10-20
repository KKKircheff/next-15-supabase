"use client"

import { Button } from "@mui/material";
import { useActionState } from "react";
import { signOut } from "../../../actions/signOut";

export default function SignOutButton() {

    const [state, formAction, isPending] = useActionState(signOut, null, '/login');

    return (
        <form action={formAction}>
            <Button type='submit' disabled={isPending}>
                {!isPending ? 'Sign out' : 'Logging out ..'}
            </Button>
        </form>
    )
}
