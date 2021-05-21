import { useState } from "react";
import * as DATA from "../constants/data";
import { Button } from "../components/index";
import ImageDisplay from "./ImageDisplay";

export default function PortfolioDisplay() {
    const [toggleModal, setToggleModal] = useState(false);
    const [project, setProject] = useState("");

    return DATA.PROJECTS.map((pro) => (
        <article key={pro.id}>
            <h2 className="mt-10 mb-4 text-center text-3xl sm:text-5xl text-blue-500 uppercase font-bold coated">
                <a href={pro.link} rel="noreferrer" target="_blank">
                    <i className="fas fa-chevron-left"></i> {pro.name} <i className="fas fa-chevron-right"></i>
                </a>
            </h2>
            <div className="bg-black bg-transparent bg-opacity-50 text-white mx-2 sm:w-2/3 sm:mx-auto border-4 border-blue-500 rounded-lg">
                <div className="p-2">
                    <p>
                        <span className="font-bold text-blue-500">
                            Description: <br />
                        </span>
                        {pro.text}
                    </p>
                    <p>
                        <span className="font-bold text-blue-500">
                            Technologies utilisées: <br />
                        </span>
                        {pro.tech}
                    </p>
                </div>
                <div className="h-1 bg-blue-500"></div>
                {pro.video ? (
                    <div>
                        <video controls src={pro.video} className="h-full w-full px-2"></video>
                        <p className="px-2 text-xs text-center">
                            Musique:{" "}
                            <a href="https://www.youtube.com/channel/UC7Lah4xMT_IFjq1axEcXcAA" rel="noreferrer" target="_blank" className="text-blue-500 uppercase font-bold">
                                Sphinks
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <img
                            onClick={() => {
                                setToggleModal(!toggleModal);
                                setProject(pro.images);
                            }}
                            src={pro.images[0]}
                            alt="illustation de projet"
                        />
                    </div>
                )}
                <div className="h-1 bg-blue-500"></div>
                {pro.images && (
                    <div>
                        {!toggleModal && (
                            <div>
                                <div className="p-2 bg-blue-500 w-full flex justify-center">
                                    <div
                                        onClick={() => {
                                            setToggleModal(!toggleModal);
                                            setProject(pro.images);
                                        }}
                                    >
                                        <Button value="Ouvrir Galerie" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* <!-- MODAL START --> */}
                        {toggleModal && (
                            <div className="modal h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 z-40">
                                {/* <!-- modal --> */}
                                <div className="bg-blue-500 rounded-lg shadow-lg w-full sm:w-2/3 mx-2 mt-10 border-4 border-white">
                                    {/* <!-- modal body --> */}
                                    <div className="flex">
                                        <div id="imageScroll" className="p-2 max-h-96 overflow-scroll text-white ">
                                            {/* <!-- ICI --> */}
                                            <ImageDisplay images={project} />
                                        </div>
                                        <div className="flex-col self-center">
                                            <i className="fas fa-arrow-up my-5"></i>
                                            <i className="fas fa-arrow-down my-5"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-2 bg-blue-500 w-full flex justify-center">
                                            <div onClick={() => setToggleModal(!toggleModal)}>
                                                <Button value="Fermer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    ));
}
