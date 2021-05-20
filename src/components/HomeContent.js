import prog from "../assets/images/prog.png";
import mockup from "../assets/images/mockup.png";
import responsive from "../assets/images/responsive.png";
import seo from "../assets/images/seo_2.png";

export default function HomeContent() {
    return (
        <div className="mt-20">
            {/* HERO PART */}
            <div className="flex flex-wrap items-center">
                <div className="home-text">
                    <h1 className="glow uppercase text-blue-500 font-extrabold text-4xl xl:text-7xl align-middle">bienvenue</h1>
                    <p className="text-white text-3xl xl:text-4xl font-extrabold">Je suis</p>
                    <h2 className="coated uppercase text-blue-500 font-extrabold text-4xl xl:text-7xl">julien bergès</h2>
                    <p className="text-white text-3xl xl:text-4xl font-extrabold">Développeur Web</p>
                </div>
                <div className="w-full xl:w-1/2 flex justify-center">
                    <img className="self-center" src={prog} alt="illustration montrant un développeur web" />
                </div>
            </div>
            {/* MOCKUP PART */}
            <div className="flex flex-wrap-reverse mt-5">
                <div className="w-full xl:w-1/2 flex justify-center">
                    <img src={mockup} alt="illustration intégration de maquette" />
                </div>
                <div className="home-text pt-12">
                    <p className="text-4xl xl:text-7xl font-bold text-gray-100">
                        <span className="text-blue-500">
                            Transformation <br />{" "}
                        </span>
                        de maquette <br />
                        en
                        <span className="text-blue-500"> site web</span>
                    </p>
                </div>
            </div>
            {/* RESPONSIVE PART */}
            <div className="flex flex-wrap mt-5">
                <div className="home-text pt-4">
                    <p className="text-4xl xl:text-7xl font-bold text-gray-100">
                        <span className="text-blue-500">Des sites </span>adaptés <br />
                        pour <span className="text-blue-500">tous</span> <br />
                        les
                        <span className="text-blue-500"> formats</span>
                    </p>
                </div>
                <div className="w-full xl:w-1/2 flex justify-center">
                    <img src={responsive} alt="illustration de site responsive" />
                </div>
            </div>
            {/* SEO PART */}
            <div className="flex flex-wrap-reverse mt-5">
                <div className="w-full xl:w-1/2 flex justify-center">
                    <img src={seo} alt="illustration amélioration du réferencement" />
                </div>
                <div className="home-text pt-16">
                    <p className="text-4xl xl:text-7xl font-bold text-gray-100">
                        <span className="text-blue-500">Amélioration</span>
                        <br />
                        de la <span className="text-blue-500">visibilité</span> <br />
                        de votre <span className="text-blue-500">site web</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
