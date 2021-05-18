import { useEffect } from "react";

import "../styles/Home.css";
import { Footer } from "../components/index";

function Home() {
    useEffect(() => {
        document.title = "Julien Bergès | Développeur Web";
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative">
            <Footer />
        </main>
    );
}

export default Home;
