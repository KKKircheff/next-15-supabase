"use client"
import { Button, Stack } from "@mui/material";
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
    console.log('Locale:', locale, ' Path:', pathname,)
    const router = useRouter();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
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
            <select value={locale} onChange={(e) => handleLanguageChange(e)}>
                <option value='en'>EN</option>
                <option value='nl'>NL</option>
            </select>
        </Stack>
    );
}

