import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

function NavBar() {
    return (
        <div className="flex">
            <Link to={ROUTES.ABOUT}>
                <button className="ent-left focus:outline-none hover:text-red-600 text-gray-300 blackops">INFOS</button>
            </Link>
            <Link to={ROUTES.MUSIC}>
                <button className="ent-down focus:outline-none hover:text-red-600 text-gray-300 blackops">MUSIQUE</button>
            </Link>
            <Link to={ROUTES.CONTACT}>
                <button className="ent-right focus:outline-none hover:text-red-600 text-gray-300 blackops">CONTACT</button>
            </Link>
        </div>
    );
}

export default NavBar;
