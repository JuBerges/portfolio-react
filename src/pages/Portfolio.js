import { useEffect } from "react";

function Music() {
    useEffect(() => {
        document.title = "Julien Bergès | Portfolio";
    }, []);

    return <div className="flex flex-col relative min-h-screen"></div>;
}

export default Music;
