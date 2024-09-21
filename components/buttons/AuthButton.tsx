import { Link, redirect } from "@/utils/next-intl/routing";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    return user ? (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        }}>
            Hey, {user.email}!
            <form action={signOut}>
                <button style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    backgroundColor: 'your-btn-background-color',
                }}>
                    Logout
                </button>
            </form>
        </div>
    ) : (
        <Link
            href="/login"
            style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                backgroundColor: 'your-btn-background-color',
            }}
        >
            Login
        </Link>
    );
}
