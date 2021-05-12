import { useEffect } from "react";

import Input from "./Input";

export default function ContactForm() {
    useEffect(() => {
        const form = document.getElementById("form");
        const result = document.getElementById("result");

        form.addEventListener("submit", function (e) {
            const formData = new FormData(form);
            e.preventDefault();
            var object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            result.innerHTML = "Patientez svp...";

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status === 200) {
                        result.innerHTML = "Votre message à bien été envoyé";
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-green-500");
                        document.title = "DEA - message envoyé";
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-red-500");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    result.innerHTML = "Il semble y avoir un problême, veuillez retenter plus tard svp!";
                })
                .then(function () {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 5000);
                });
        });
    }, []);
    return (
        <div className="flex flex-col justify-center items-center w-full mb-5">
            <h1 className="m-4 blackops text-4xl md:text-7xl">CONTACT</h1>
            <form id="form" action="https://api.web3forms.com/submit" method="POST" className=" border border-red-600 rounded-xl p-2 w-11/12 md:w-2/4 mb-10">
                <input type="hidden" name="apikey" value="9393c877-26c2-4c53-9da3-fa7e5c1aeb52" />
                <input type="hidden" name="subject" value="DEA - Nouveau message sur votre site" />
                <Input regex label="Nom" id="lastName" placeholder="Nom" required></Input>
                <Input regex label="Prénom" id="name" placeholder="Prénom" required></Input>
                <Input type="email" label="Email" id="email" placeholder="Email" required />
                <Input label="Téléphone(facultatif)" id="phone" type="phone" placeholder="Téléphone"></Input>
                <Input textArea label="Message" id="message" placeholder="Message" required />
                <div className="flex flex-col p-4">
                    <button className="w-full px-3 py-4 text-white border-2 border-red-500 bg-red-700 rounded-md focus:bg-red-800 focus:outline-none blackops" type="submit">
                        ENVOYER
                    </button>
                    <div id="result"></div>
                </div>
            </form>
        </div>
    );
}
