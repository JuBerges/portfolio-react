import { useEffect } from "react";

import { BackButton, ContactForm, Footer } from "../components/index";

function Contact() {
    useEffect(() => {
        document.title = "DEA - Contact";
    }, []);
    return (
        <div className="flex flex-col relative">
            <BackButton />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Contact;
