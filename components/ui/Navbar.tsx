"use client"
import { Button, Link, Stack } from "@mui/material";
import NextLogo from "../logos/NextLogo";
import SupabaseLogo from "../logos/SupabaseLogo";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    locale: string
}

export default function Navbar({ locale }: Props) {
    const t = useTranslations("NavbarLinks");
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
    };
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <NextLogo />
            <SupabaseLogo />
            <Link href={`/${locale}`}>
                <Button color="primary" variant='text'>
                    {t("Home")}
                </Button>
            </Link>
            <Link href={`/${locale}/login`}>
                <Button color="primary" variant='text'>
                    {t("Login")}
                </Button>
            </Link>
            <Link href={`/${locale}/sign-up`}>
                <Button color="primary" variant='text'>
                    {t("SignUp")}
                </Button>
            </Link>
            <Link href={`/${locale}/protected`}>
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

