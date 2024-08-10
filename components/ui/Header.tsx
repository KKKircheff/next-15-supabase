import { Button, Link, Stack } from "@mui/joy";
import NextLogo from "../logos/NextLogo";
import SupabaseLogo from "../logos/SupabaseLogo";

export default function Header() {
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <NextLogo />
            <SupabaseLogo />
            <Link href="/">
                <Button color='neutral' variant='plain'>
                    Home
                </Button>
            </Link>
            <Link href="/login">
                <Button color='neutral' variant='plain'>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button color='neutral' variant='plain'>
                    Sign-up
                </Button>
            </Link>
            <Link href="/protected">
                <Button color='neutral' variant='plain'>
                    Protected route
                </Button>
            </Link>
        </Stack>
    );
}

