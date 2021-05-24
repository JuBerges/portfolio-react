import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "../components/index";
import scrollTop from "../utilities/scrollTop";
import * as ROUTES from "../constants/routes";
import logo from "../assets/images/logos/logo_white_large.png";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [music, setMusic] = useState(false);
    useEffect(() => {
        !music ? document.getElementById("musicTheme").pause() : document.getElementById("musicTheme").play();
    }, [music]);

    function toggleNav() {
        !toggle ? setToggle(true) : setToggle(false);
    }

    return (
        <header className=" fixed w-full z-50">
            <div id="nav" className="flex justify-between bg-blue-900 h-16 border-b-4 border-blue-500">
                <div className="mt-2 flex">
                    <div
                        className="ml-2 lg:ml-4 flex min-w-max"
                        onClick={() => {
                            scrollTop();
                            toggle && setToggle(!toggle);
                        }}
                    >
                        <Link to={ROUTES.HOME}>
                            <img className="h-11" src={logo} alt="logo de julien bergès" />
                        </Link>
                    </div>
                    <div>
                        <audio id="musicTheme" src="https://julien-berges.fr/music/sphinks-cybernight.mp3"></audio>
                    </div>
                    <div className="flex pb-2">
                        {music ? (
                            <button title="Arrêter la musique" className="mx-4 text-white hover:text-red-500 animate-pulse focus:outline-none" onClick={() => setMusic(!music)}>
                                <i className="fas fa-volume-up fa-lg"></i>
                            </button>
                        ) : (
                            <button title="Jouer la musique" className="mx-4 text-white hover:text-green-500 animate-pulse focus:outline-none" onClick={() => setMusic(!music)}>
                                <i className="fas fa-volume-mute fa-lg"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div className="hidden lg:flex mr-2 h-11 mt-2 lg:items-center">
                    <Link to={ROUTES.HOME}>
                        <Button>ACCUEIL</Button>
                    </Link>
                    <Link to={ROUTES.PORTFOLIO}>
                        <Button>PORTFOLIO</Button>
                    </Link>
                    <Link to={ROUTES.CONTACT}>
                        <Button>CONTACT</Button>
                    </Link>
                </div>
                <div onClick={() => toggleNav()} className="flex lg:hidden router bg-white p-2 items-center border-blue-500 border-l-4 px-6 cursor-pointer">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            {toggle && (
                <div className="lg:hidden h-16 bg-blue-900 flex justify-center items-center p-2 border-4 border-t-0  border-blue-500">
                    <div>
                        <Link to={ROUTES.HOME}>
                            <Button toggleNav={toggleNav}>ACCUEIL</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to={ROUTES.PORTFOLIO}>
                            <Button toggleNav={toggleNav}>PORTFOLIO</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to={ROUTES.CONTACT}>
                            <Button toggleNav={toggleNav}>CONTACT</Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
