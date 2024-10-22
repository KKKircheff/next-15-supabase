import 'server-only'
import DeployButton from "@/components/buttons/DeployButton";
import AuthButton from "@/components/buttons/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import { getLocale, getTranslations } from "next-intl/server";
import { redirect } from "@/utils/next-intl/routing";



export default async function ProtectedPage() {
    const supabase = await createClient();
    const locale = await getLocale();
    const t = await getTranslations('Protected');

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect({
            href: {
                pathname: '/login',
                query: { 'message': 'No  user.' },
            },
            locale,
        });
    }

    return (
        <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
                <div style={{ padding: '1.5rem', fontWeight: 'bold', backgroundColor: '#5b21b6', textAlign: 'center', color: 'white' }}>
                    {t('pageHeroTitle')}
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(31, 41, 55, 0.1)', height: '4rem' }}>
                    <div style={{ width: '100%', maxWidth: '64rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>
                        <DeployButton />
                        <AuthButton />
                    </div>
                </div>
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
