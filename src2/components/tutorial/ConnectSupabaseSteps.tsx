import Step from "./Step";
import React from "react";

export default function ConnectSupabaseSteps() {
    return (
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Step title="Create Supabase project">
                <p>
                    Head over to{" "}
                    <a
                        href="https://app.supabase.com/project/_/settings/api"
                        target="_blank"
                        style={{ fontWeight: 'bold', color: 'rgba(31, 41, 55, 0.8)', textDecoration: 'underline' }}
                        rel="noreferrer"
                    >
                        database.new
                    </a>{" "}
                    and create a new Supabase project.
                </p>
            </Step>

            <Step title="Declare environment variables">
                <p>
                    Rename the{" "}
                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: 'rgba(31, 41, 55, 0.2)', color: 'rgba(31, 41, 55, 0.8)' }}>
                        .env.example
                    </span>{" "}
                    file in your Next.js app to{" "}
                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: 'rgba(31, 41, 55, 0.2)', color: 'rgba(31, 41, 55, 0.8)' }}>
                        .env.local
                    </span>{" "}
                    and populate with values from{" "}
                    <a
                        href="https://app.supabase.com/project/_/settings/api"
                        target="_blank"
                        style={{ fontWeight: 'bold', color: 'rgba(31, 41, 55, 0.8)', textDecoration: 'underline' }}
                        rel="noreferrer"
                    >
                        your Supabase project's API Settings
                    </a>
                    .
                </p>
            </Step>
            <Step title="Restart your Next.js development server">
                <p>
                    You may need to quit your Next.js development server and run{" "}
                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: 'rgba(31, 41, 55, 0.2)', color: 'rgba(31, 41, 55, 0.8)' }}>
                        npm run dev
                    </span>{" "}
                    again to load the new environment variables.
                </p>
            </Step>

            <Step title="Refresh the page">
                <p>
                    You may need to refresh the page for Next.js to load the new
                    environment variables.
                </p>
            </Step>
        </ol>
    );
}


