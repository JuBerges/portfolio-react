import { useEffect } from "react";
import { Mug, PortfolioDisplay } from "../components/index";

function Music() {
    useEffect(() => {
        document.title = "Julien Bergès | Portfolio";
    }, []);

    return (
        <div className="flex flex-col justify-center items-center relative min-h-screen">
            <h1 className="text-white glow font-extrabold text-6xl text-center mt-24 uppercase">PROJETS réalisés</h1>
            <PortfolioDisplay />
            <Mug />
        </div>
    );
}

export default Music;
