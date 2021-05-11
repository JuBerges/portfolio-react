import React, { useState } from "react";
function ContactForm() {
    return (
        <div className="flex flex-col justify-center items-center w-full mb-5">
            <h1 className="m-4 blackops text-4xl md:text-7xl">CONTACT</h1>
            <form action="" className=" border border-red-600 rounded-xl p-2 w-11/12 md:w-2/4 mb-10">
                <div className="flex flex-col p-2">
                    <label className="blackops" htmlFor="lastName">
                        Nom:
                    </label>
                    <input className="text-black p-2 rounded-md outline-none border-2 blackops focus:border-red-600" type="text" id="lastName" name="lastName" required />
                </div>
                <div className="flex flex-col p-2">
                    <label className="blackops" htmlFor="name">
                        Prénom:
                    </label>
                    <input className="text-black p-2 rounded-md outline-none border-2 blackops focus:border-red-600" type="text" id="name" name="name" required />
                </div>
                <div className="flex flex-col p-2">
                    <label className="blackops" htmlFor="email">
                        Email:
                    </label>
                    <input className="text-black p-2 rounded-md outline-none border-2 blackops focus:border-red-600" type="email" id="email" name="email" required />
                </div>
                <div className="flex flex-col p-2">
                    <label className="blackops" htmlFor="phone">
                        Téléphone (facultatif):
                    </label>
                    <input className="text-black p-2 rounded-md outline-none border-2 blackops focus:border-red-600" type="phone" id="phone" name="phone" />
                </div>
                <div className="flex flex-col p-2">
                    <label className="blackops" htmlFor="message">
                        Message:
                    </label>
                    <textarea className="text-black p-2 rounded-md outline-none border-2 blackops focus:border-red-600" rows="5" id="message" name="message" required />
                </div>
                <div className="flex flex-col p-4">
                    <button className="w-full px-3 py-4 text-white border-2 border-red-500 bg-red-700 rounded-md focus:bg-red-800 focus:outline-none blackops" type="submit">
                        ENVOYER
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ContactForm;
