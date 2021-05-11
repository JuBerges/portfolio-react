import { Link } from "react-router-dom";
import Button from "../components/BackButton";

function Music() {
    return (
        <div>
            <h1>Music</h1>
            <Link to={"/"}>
                <Button label="Home" />
            </Link>
        </div>
    );
}

export default Music;
