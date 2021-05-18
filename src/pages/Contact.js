import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = "Julien Bergès | Contact";
    }, []);
    return <div className="flex flex-col relative"></div>;
}

export default Contact;
