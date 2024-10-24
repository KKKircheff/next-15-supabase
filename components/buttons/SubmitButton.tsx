"use client";


import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps<"button"> & {
    isPending: boolean;
    pendingText?: string;
};

export function SubmitButton({ children, isPending, pendingText, ...props }: Props) {
    return (
        <Button {...props} type="submit" disabled={isPending} aria-disabled={isPending}>
            {isPending ? pendingText : children}
        </Button>
    );
}
