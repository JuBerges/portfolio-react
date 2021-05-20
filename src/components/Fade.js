export default function Fade({ toggle, children }) {
    const className = `fade ${toggle ? "" : "out"}`.trim();
    return <div className={className}>{children}</div>;
}
