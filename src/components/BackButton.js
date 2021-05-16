import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

function BackButton() {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="flex fixed top-3 left-2" title="Retour à l'accueil">
            <Link to={ROUTES.MUSIC}>
                <button
                    onClick={() => scrollToTop()}
                    className="bg-black border-2 rounded-full px-3 py-2 border-gray-500 hover:border-white hover:text-gray-500 focus:outline-none"
                >
                    <i className="fas fa-arrow-left fa-2x"></i>
                </button>
            </Link>
        </div>
    );
}

export default BackButton;
