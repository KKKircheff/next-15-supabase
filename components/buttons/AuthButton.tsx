import { signOut } from "@/actions/signOut";
import { Link } from "@/utils/next-intl/routing";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

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
