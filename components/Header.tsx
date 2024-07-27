import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }}>
                <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SupabaseLogo />
                </a>
                <span style={{ borderLeft: "1px solid", transform: "rotate(45deg)", height: "6px" }} />
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    <NextLogo />
                </a>
            </div>
            <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: "0" }}>
                Supabase and Next.js Starter Template
            </h1>
            <p style={{
                fontSize: "24px",
                lineHeight: "1.25",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "640px",
                padding: "0px 16px"
            }}>
                The fastest way to build apps with{" "}
                <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    style={{ fontWeight: "bold", textDecoration: "none" }}
                    rel="noreferrer"
                >
                    Supabase
                </a>{" "}
                and{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    style={{ fontWeight: "bold", textDecoration: "none" }}
                    rel="noreferrer"
                >
                    Next.js
                </a>
            </p>
            <div style={{
                width: "100%",
                padding: "1px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))"
            }} />
        </div>
    );
}

