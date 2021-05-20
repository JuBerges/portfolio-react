import { useEffect } from "react";

import { Title } from "../components/index";

function Contact() {
    useEffect(() => {
        document.title = "Julien Bergès | Contact";
    }, []);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative">
            <Title title="CONTACT" />
        </div>
    );
}

export default Contact;
