import { Button, Link, Stack } from "@mui/material";
import NextLogo from "../logos/NextLogo";
import SupabaseLogo from "../logos/SupabaseLogo";

export default function Header() {
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <NextLogo />
            <SupabaseLogo />
            <Link href="/">
                <Button color="primary" variant='text'>
                    Home
                </Button>
            </Link>
            <Link href="/login">
                <Button color="primary" variant='text'>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button color="primary" variant='text'>
                    Sign-up
                </Button>
            </Link>
            <Link href="/protected">
                <Button color="primary" variant='text'>
                    Protected route
                </Button>
            </Link>
        </Stack>
    );
}

