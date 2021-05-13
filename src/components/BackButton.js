import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

function BackButton() {
    return (
        <div className="flex fixed top-3 left-2">
            <Link to={ROUTES.HOME}>
                <button className="bg-black border-2 rounded-full px-3 py-2 border-red-600 hover:border-white hover:text-red-600 focus:outline-none">
                    <i className="fas fa-arrow-left fa-2x"></i>
                </button>
            </Link>
        </div>
    );
}

export default BackButton;
