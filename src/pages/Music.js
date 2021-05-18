import { useEffect } from "react";
import { BackButton, MusicVideo, SoundCloud, Footer } from "../components/index";

function Music() {
    useEffect(() => {
        document.title = "DEA - Music";
    }, []);

    return (
        <div className="flex flex-col relative min-h-screen">
            <BackButton />
            <MusicVideo />
            <SoundCloud />
            <Footer />
        </div>
    );
}

export default Music;
