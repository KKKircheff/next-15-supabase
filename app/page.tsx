import SignOutButton from "@/components/SignOutButton";
import { createClient } from "@/utils/supabase/server";
import { Button, Sheet, Stack, Typography } from "@mui/joy";
import { redirect } from "next/navigation";
import { userAgent } from "next/server";

export default async function Index() {

    const canInitSupabaseClient = async () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            return user;
        } catch (e) {
            return undefined;
        }
    };

    const supabase = createClient();
    const { data: { user }, } = await supabase.auth.getUser()

    const signOut = async () => {
        "use server";
        await supabase.auth.signOut();
        return redirect("/");
    };

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Sheet
                sx={{
                    maxWidth: 500,
                    mx: 'auto', my: 4, py: 3, px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'lg', boxShadow: 'md',
                }}
                variant="outlined"
            >
                <Stack gap={3}>
                    <Typography level="h4" component="h1">
                        <strong>Welcome back 👋</strong>
                    </Typography>
                    {!user && <Typography level="body-sm">Sign in to continue.</Typography>}
                    {user ? <Typography level="body-sm">You are signed in {user.email}. Browse protected routes.</Typography> : null}
                    {user ? <SignOutButton /> : null}
                </Stack>
            </Sheet>
        </Sheet>
    );
}