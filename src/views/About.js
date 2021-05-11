import { Link } from "react-router-dom";
import Button from "../components/BackButton";

function About() {
    return (
        <div>
            <h1>ABOUT</h1>
            <Link to={"/"}>
                <Button label="Home" />
            </Link>
        </div>
    );
}

export default About;
