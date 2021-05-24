import "../styles/Button.css";
import scrollTop from "../utilities/scrollTop";

export default function Button(props) {
    const { big = "", toggleNav = () => {}, noScroll } = props;
    return (
        <button
            onClick={() => {
                toggleNav();
                !noScroll && scrollTop();
            }}
            className="pushable mx-2"
        >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className={`front ${big ? "p-4" : "p-2"}`}>{props.children ? props.children : "Click me"}</span>
        </button>
    );
}
