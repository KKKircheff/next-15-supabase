import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient();
            return true;
        } catch (e) {
            return false;
        }
    };

    const isSupabaseConnected = canInitSupabaseClient();
    console.log('IS:', isSupabaseConnected);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <nav
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(33, 37, 41, 0.1)",
                    height: "56px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "4xl",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px",
                    }}
                >      <DeployButton />
                    {isSupabaseConnected && <AuthButton />}
                </div>
            </nav>

            <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
                <Header />
                <main className="flex-1 flex flex-col gap-6">
                    <h2 className="font-bold text-4xl mb-4">Next steps</h2>
                    {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
                </main>
            </div>

            <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
                <p>
                    Powered by{" "}
                    <a
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        className="font-bold hover:underline"
                        rel="noreferrer"
                    >
                        Supabase
                    </a>
                </p>
            </footer>
        </div>
    );
}


