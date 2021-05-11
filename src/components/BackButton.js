import { Link } from "react-router-dom";
import "../styles/Button.css";

function Button(props) {
    let label = props.label || (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    );
    return (
        <div className="flex fixed top-3">
            <Link to={"/"}>
                <button className="bg-black border-2 border-red-600 rounded-full ml-2 py-2 px-4 hover:border-white hover:text-red-600 focus:outline-none">{label}</button>
            </Link>
        </div>
    );
}

export default Button;
