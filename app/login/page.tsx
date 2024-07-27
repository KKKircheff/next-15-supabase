import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
    searchParams,
}: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/protected");
    };

    const signUp = async (formData: FormData) => {
        "use server";

        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/login?message=Check email to continue sign in process");
    };

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', padding: '2rem', maxWidth: '28rem', justifyContent: 'center', gap: '0.5rem' }}>
            <Link
                href="/"
                style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '2rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                    color: 'currentColor', // Assuming text-foreground is similar to text color
                    backgroundColor: 'var(--btn-background)', // Assuming bg-btn-background is defined in your CSS variables
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.875rem',
                }}
                className="group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem', height: '1rem', width: '1rem', transition: 'transform 0.2s' }}
                    className="group-hover:transform group-hover:translate-x-[-0.25rem]"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>{" "}
                Back
            </Link>

            <form style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', gap: '0.5rem', color: 'currentColor' }}>
                <label style={{ fontSize: '1rem' }} htmlFor="email">
                    Email
                </label>
                <input
                    style={{
                        borderRadius: '0.375rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'inherit',
                        border: '1px solid',
                        marginBottom: '1.5rem',
                    }}
                    name="email"
                    placeholder="you@example.com"
                    required
                />
                <label style={{ fontSize: '1rem' }} htmlFor="password">
                    Password
                </label>
                <input
                    style={{
                        borderRadius: '0.375rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'inherit',
                        border: '1px solid',
                        marginBottom: '1.5rem',
                    }}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                />
                <SubmitButton
                    formAction={signIn}
                    style={{
                        backgroundColor: '#047857', // Assuming bg-green-700 is a green color
                        borderRadius: '0.375rem',
                        padding: '0.5rem 1rem',
                        color: 'currentColor',
                        marginBottom: '0.5rem',
                    }}
                    pendingText="Signing In..."
                >
                    Sign In
                </SubmitButton>
                <SubmitButton
                    formAction={signUp}
                    style={{
                        border: '1px solid rgba(31, 41, 55, 0.2)', // Assuming border-foreground/20 is a light gray border
                        borderRadius: '0.375rem',
                        padding: '0.5rem 1rem',
                        color: 'currentColor',
                        marginBottom: '0.5rem',
                    }}
                    pendingText="Signing Up..."
                >
                    Sign Up
                </SubmitButton>
                {searchParams?.message && (
                    <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(31, 41, 55, 0.1)', color: 'currentColor', textAlign: 'center' }}>
                        {searchParams.message}
                    </p>
                )}
            </form>
        </div>
    );
}