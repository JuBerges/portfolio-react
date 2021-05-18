import { BackButton, Bio, Title, SocialNav } from "../components/index";

function About() {
    return (
        <div>
            <BackButton />
            <div className="flex flex-col justify-center items-center">
                <Title title="INFOS" />
                <Bio />
                <SocialNav />
            </div>
        </div>
    );
}

export default About;
