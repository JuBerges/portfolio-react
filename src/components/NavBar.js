import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="flex">
            <Link to={"/about"}>
                <button className="ent-left focus:outline-none hover:text-red-600 text-gray-300 blackops">INFOS</button>
            </Link>
            <Link to={"/music"}>
                <button className="ent-down focus:outline-none hover:text-red-600 text-gray-300 blackops">MUSIQUE</button>
            </Link>
            <Link to={"/contact"}>
                <button className="ent-right focus:outline-none hover:text-red-600 text-gray-300 blackops">CONTACT</button>
            </Link>
        </div>
    );
}

export default NavBar;
