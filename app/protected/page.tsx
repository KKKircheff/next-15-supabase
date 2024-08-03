import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import { redirect } from "next/navigation";
import 'server-only'

export default async function ProtectedPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
                <div style={{ padding: '1.5rem', fontWeight: 'bold', backgroundColor: '#5b21b6', textAlign: 'center', color: 'white' }}>
                    This is a protected page that you can only see as an authenticated user
                </div>
                <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(31, 41, 55, 0.1)', height: '4rem' }}>
                    <div style={{ width: '100%', maxWidth: '64rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>
                        <DeployButton />
                        <AuthButton />
                    </div>
                </nav>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: '64rem', padding: '0.75rem' }}>
                <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '2.25rem', marginBottom: '1rem' }}>Next steps</h2>
                    <FetchDataSteps />
                </main>
            </div>

            <footer style={{ width: '100%', borderTop: '1px solid rgba(31, 41, 55, 0.1)', padding: '2rem', display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: '0.75rem' }}>
                <p>
                    Powered by{" "}
                    <a
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                        rel="noreferrer"
                    >
                        Supabase
                    </a>
                </p>
            </footer>
        </div>
    );
}
