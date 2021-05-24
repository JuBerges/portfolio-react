import { Link } from "react-router-dom";
import { Button } from "../components/index";
import * as ROUTES from "../constants/routes";

export default function LinkBar() {
    return (
        <div className="w-full glass h-20 border-blue-500 border-t border-b flex justify-center items-center">
            <Link to={ROUTES.PORTFOLIO}>
                <Button>Portfolio</Button>
            </Link>
            <a href="https://julien-berges.fr/cv.pdf" rel="noreferrer" target="_blank" className="self-center">
                <Button>Mon CV</Button>
            </a>
        </div>
    );
}
