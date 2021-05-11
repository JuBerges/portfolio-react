import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1 className="text-7xl">404 NOT FOUND</h1>
            <Link to={"/"}>
                <h2>Home</h2>
            </Link>
        </div>
    );
}

export default NotFound;
