import { useEffect } from "react";

import { Input } from "./index";

export default function ContactForm() {
    useEffect(() => {
        const form = document.getElementById("form");
        const result = document.getElementById("result");

        form.addEventListener("submit", function (e) {
            const formData = new FormData(form);
            result.style.display = "block";
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
                        document.title = "Julien Bergès - message envoyé";
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
        <div className="mt-10 w-full flex justify-center">
            <div className="glass w-full sm:w-3/4 flex flex-col justify-center items-center my-10 bg-blue-900 bg-opacity-70 border border-blue-500 p-5 rounded-md shadow-sm">
                <div className="text-center">
                    <h1 className="mt-3 text-3xl font-semibold text-gray-200 uppercase">Contactez moi</h1>
                    <p className=" text-gray-100 mb-3">Afin de discuter de votre projet.</p>
                    <p className="text-gray-200">
                        (<span className="text-red-600">*</span>) Champs obligatoires
                    </p>
                </div>
                <form id="form" action="https://api.web3forms.com/submit" method="POST" className="rounded-xl p-2 w-11/12 md:w-2/4">
                    <input type="hidden" name="apikey" value="9393c877-26c2-4c53-9da3-fa7e5c1aeb52" />
                    <input type="hidden" name="subject" value="Julien - Nouveau message sur votre site" />
                    <Input regex label="Nom" id="lastName" placeholder="Nom" required></Input>
                    <Input regex label="Prénom" id="name" placeholder="Prénom" required></Input>
                    <Input type="email" label="Email" id="email" placeholder="Email" required />
                    <Input label="Téléphone(facultatif)" id="phone" type="phone" placeholder="Téléphone"></Input>
                    <Input textArea label="Message" id="message" placeholder="Message" required lastOne />
                    <div id="result" className="text-center text-xl"></div>
                </form>
            </div>
        </div>
    );
}
