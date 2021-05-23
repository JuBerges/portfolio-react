import { useEffect } from "react";

import { ContactHome, HomeContent, LinkBar, Mug, Tech } from "../components/index";

export default function Home() {
    useEffect(() => {
        document.title = "Julien Bergès | Développeur Web";
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative">
            <HomeContent />
            <Tech />
            <LinkBar />
            <ContactHome />
            <Mug />
        </main>
    );
}
