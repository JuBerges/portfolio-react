import "../styles/Button.css";
import scrollTop from "../utilities/scrollTop";

export default function Button(props) {
    const { value = "click me", big = "", toggleNav = () => {}, noScroll } = props;
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
            <span className={`front ${big ? "p-4" : "p-2"}`}>{value}</span>
        </button>
    );
}
