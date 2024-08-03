import { createClient } from "@/utils/supabase/server";
import { Button } from "@mui/joy";
import { redirect } from "next/navigation";

export default async function SignOutButton() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/");
    };

    return (
        <form action={signOut}>
            <Button type='submit'>
                Sign out
            </Button>
        </form>
    )
}
