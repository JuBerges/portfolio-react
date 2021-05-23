import mug from "../assets/images/code-coffee.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import scrollTop from "../utilities/scrollTop";

export default function Mug() {
    return (
        <div>
            <Link onClick={() => scrollTop()} to={ROUTES.CONTACT}>
                <img id="tilter" className="h-16 lg:h-20 cursor-pointer z-50 animate-wiggle" title="Contactez moi" src={mug} alt="Tasse à café" />
            </Link>
        </div>
    );
}
