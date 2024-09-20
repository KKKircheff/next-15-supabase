export default function Step({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <li style={{ margin: '0 1rem' }}>
            <input type="checkbox" id={title} style={{ marginRight: '0.5rem' }} className="peer" />
            <label
                htmlFor={title}
                style={{
                    fontSize: '1.125rem',
                    color: 'rgba(31, 41, 55, 0.9)',
                    fontWeight: '600',
                    cursor: 'pointer',
                }}
                className="peer-checked:line-through"
            >
                {title}
            </label>
            <div
                style={{
                    margin: '0 1.5rem',
                    color: 'rgba(31, 41, 55, 0.8)',
                    fontSize: '0.875rem',
                }}
                className="peer-checked:line-through"
            >
                {children}
            </div>
        </li>
    );
}
