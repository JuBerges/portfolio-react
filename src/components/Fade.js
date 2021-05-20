export default function Fade({ toggle, children }) {
    return <div className={`fade ${!toggle ? "" : "out"}`}>{children}</div>;
}
