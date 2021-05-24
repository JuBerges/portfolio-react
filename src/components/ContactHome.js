import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import coffee from "../assets/images/code-coffee.png";
import { Button } from "../components/index";

export default function ContactHome() {
    return (
        <section id="contact">
            <div className="flex justify-around flex-wrap jello-horizontal">
                <div className="flex-col mx-10 mt-16 flex-wrap">
                    <h1 className="text-4xl font-bold text-gray-100 self-center">
                        <span className="text-blue-500">Contactez</span> moi
                        <br />
                        afin de discuter <br />
                        de
                        <span className="text-blue-500">votre projet.</span>
                    </h1>
                    <div className="flex flex-col mt-5 items-center">
                        <Link to={ROUTES.CONTACT}>
                            <Button>CLIQUEZ ICI</Button>
                        </Link>
                    </div>
                </div>
                <div className="mx-5">
                    <img src={coffee} alt="illustration montrant une tasse de café" />
                </div>
            </div>
        </section>
    );
}
