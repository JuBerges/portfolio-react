import mug from "../assets/images/code-coffee.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Mug() {
    function scrollTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <Link onClick={() => scrollTop()} to={ROUTES.CONTACT}>
                <img id="tilter" className="h-16 lg:h-20 cursor-pointer z-50 animate-wiggle" title="Contactez moi" src={mug} alt="Tasse à café" />
            </Link>
        </div>
    );
}
