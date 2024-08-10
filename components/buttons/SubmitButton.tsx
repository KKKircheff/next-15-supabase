"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { Button } from "@mui/joy";
import { ButtonProps } from "@mui/joy";

type Props = ButtonProps<"button"> & {
    pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
    const { pending, action } = useFormStatus();

    const isPending = pending && action === props.formAction;

    return (
        <Button {...props} type="submit" disabled={pending} aria-disabled={pending}>
            {isPending ? pendingText : children}
        </Button>
    );
}
