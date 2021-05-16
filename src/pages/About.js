import { BackButton, Bio, Title } from "../components/index";

function About() {
    return (
        <div>
            <BackButton />
            <div className="text-center">
                <Title title="INFOS" />
                <Bio />
            </div>
        </div>
    );
}

export default About;
