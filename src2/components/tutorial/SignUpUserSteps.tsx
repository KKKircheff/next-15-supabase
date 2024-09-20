import Link from "next/link";
import Step from "./Step";

export default function SignUpUserSteps() {
    return (
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Step title="Sign up your first user">
                <p>
                    Head over to the{" "}
                    <Link
                        href="/login"
                        style={{ fontWeight: 'bold', color: 'rgba(31, 41, 55, 0.8)', textDecoration: 'underline' }}
                    >
                        Login
                    </Link>{" "}
                    page and sign up your first user. It's okay if this is just you for
                    now. Your awesome idea will have plenty of users later!
                </p>
            </Step>
        </ol>
    );
}