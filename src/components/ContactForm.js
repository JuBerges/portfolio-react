import { useEffect } from "react";

import { Input, Title } from "./index";

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
            <Title title="CONTACT" />
            <form id="form" action="https://api.web3forms.com/submit" method="POST" className=" border-8 border-gray-500 rounded-xl p-2 w-11/12 md:w-2/4 mb-10">
                <input type="hidden" name="apikey" value="1d3a0cf6-94b4-487e-95f8-5c962e575e2e" />
                <input type="hidden" name="subject" value="DEA - Nouveau message sur votre site" />
                <Input regex label="Nom" id="lastName" placeholder="Nom" required></Input>
                <Input regex label="Prénom" id="name" placeholder="Prénom" required></Input>
                <Input type="email" label="Email" id="email" placeholder="Email" required />
                <Input label="Téléphone(facultatif)" id="phone" type="phone" placeholder="Téléphone"></Input>
                <Input textArea label="Message" id="message" placeholder="Message" required lastOne />
                <div id="result" className="text-center text-xl blackops"></div>
                <p>
                    <span className="text-red-600">*</span> Champs obligatoires
                </p>
            </form>
        </div>
    );
}
