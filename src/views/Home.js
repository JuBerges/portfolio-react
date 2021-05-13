import { useEffect } from "react";

import "../styles/Home.css";

import SocialNav from "../components/SocialNav";
import DeaLogo from "../components/DeaLogo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
