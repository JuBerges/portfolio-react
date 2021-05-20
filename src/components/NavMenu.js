import { NavBar, Mug, Footer } from "../components/index";

export default function NavMenu({ children }) {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div>{children}</div>
            <Mug />
            <Footer />
        </div>
    );
}
