import BackButton from "../components/BackButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div className="flex flex-col relative">
            <BackButton />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Contact;
