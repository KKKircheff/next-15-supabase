"use client"
import { Button, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import NextLogo from "../logos/NextLogo";
import SupabaseLogo from "../logos/SupabaseLogo";
import { useTranslations } from "next-intl";
import { Link, Locale, usePathname } from "@/utils/next-intl/routing";
import { useRouter } from "next/navigation";

type Props = {
    locale: Locale
}

export default function Navbar({ locale }: Props) {
    const t = useTranslations("NavbarLinks");
    const pathname = usePathname()
    const router = useRouter();

    const handleLanguageChange = (e: SelectChangeEvent<Locale>) => {
        const newLocale = e.target.value as Locale;
        router.push(`/${newLocale}/${pathname}`);
    };
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <Link href='/'>
                <NextLogo />
            </Link>
            <Link href='/'>
                <SupabaseLogo />
            </Link>
            <Link href='/'>
                <Button color="primary" variant='text'>
                    {t("Home")}
                </Button>
            </Link>
            <Link href='/login'>
                <Button color="primary" variant='text'>
                    {t("Login")}
                </Button>
            </Link>
            <Link href='/sign-up'>
                <Button color="primary" variant='text'>
                    {t("SignUp")}
                </Button>
            </Link>
            <Link href='/protected'>
                <Button color="primary" variant='text'>
                    {t("Protected")}
                </Button>
            </Link>
            <Select
                variant="standard"
                size="small"
                value={locale}
                color="primary"
                onChange={(e) => handleLanguageChange(e)}>
                <MenuItem value='en'>EN</MenuItem>
                <MenuItem value='nl'>NL</MenuItem>
            </Select>
        </Stack>
    );
}

