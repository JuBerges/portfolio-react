import { useEffect } from "react";

import "../styles/Home.css";
import { SocialNav, DeaLogo, NavBar, Footer } from "../components/index";

function Home() {
    useEffect(() => {
        document.title = "DEA - Accueil";
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative">
            <SocialNav />
            <DeaLogo />
            <NavBar />
            <Footer />
        </main>
    );
}

export default Home;
