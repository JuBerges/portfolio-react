import { useEffect } from "react";
import { Title } from "../components/index";

function Music() {
    useEffect(() => {
        document.title = "Julien Bergès | Portfolio";
    }, []);

    return (
        <div className="flex flex-col justify-center items-center relative min-h-screen">
            <Title title="PORTFOLIO" />
        </div>
    );
}

export default Music;
