import { useEffect } from "react";

import { BackButton, ContactForm, SocialNav, Footer } from "../components/index";

function Contact() {
    useEffect(() => {
        document.title = "DEA - Contact";
    }, []);
    return (
        <div className="flex flex-col relative">
            <BackButton />
            <ContactForm />
            <SocialNav />
            <Footer />
        </div>
    );
}

export default Contact;
