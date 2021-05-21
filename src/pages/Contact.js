import { useEffect } from "react";

import { ContactForm } from "../components/index";

function Contact() {
    useEffect(() => {
        document.title = "Julien Bergès | Contact";
    }, []);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative">
            <ContactForm />
        </div>
    );
}

export default Contact;
