import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Button } from "../components/index";

function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl text-blue-500 coated text-center">404 PAGE INTROUVABLE</h1>
            <Link to={ROUTES.HOME}>
                <Button big>RETOUR</Button>
            </Link>
        </div>
    );
}

export default NotFound;
