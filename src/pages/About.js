import { useEffect } from "react";
import { BackButton, Bio, Title, SocialNav, Footer } from "../components/index";

function About() {
    useEffect(() => {
        document.title = "DEA - Infos";
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center relative min-h-screen">
                <BackButton />
                <Title title="INFOS" />
                <Bio />
                <SocialNav />
                <Footer />
            </div>
        </div>
    );
}

export default About;
