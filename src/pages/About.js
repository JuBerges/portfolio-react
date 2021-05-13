import { BackButton, Bio } from "../components/index";

function About() {
    return (
        <div>
            <BackButton />
            <div className="text-center">
                <h1 className="blackops">INFOS</h1>
                <Bio />
            </div>
        </div>
    );
}

export default About;
