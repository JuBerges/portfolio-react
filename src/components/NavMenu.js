import { NavBar, Footer } from "../components/index";

export default function NavMenu({ children }) {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
