import { useEffect } from "react";

import "../styles/Home.css";
import { Title, Footer } from "../components/index";

export default function Home() {
    useEffect(() => {
        document.title = "Julien Bergès | Développeur Web";
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative">
            <Title title="HOME" />
            <Footer />
        </main>
    );
}
