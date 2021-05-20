import "../styles/Button.css";

export default function Button(props) {
    const { value = "click me", toggleNav = () => {}, scrollTop = () => {} } = props;

    return (
        <button
            onClick={() => {
                toggleNav();
                scrollTop();
            }}
            className="pushable mx-2"
        >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front p-2">{value}</span>
        </button>
    );
}
