import BackButton from "../components/BackButton";
import Input from "../components/Input";

function Music() {
    return (
        <div>
            <BackButton />
            <div className="text-center">
                <form action="POST">
                    <Input regex label="Nom" id="lastName" placeholder="Nom" required="true"></Input>
                    <Input regex label="Prénom" id="name" placeholder="Prénom" required="true"></Input>
                    <Input label="Email" id="lastName" type="email" placeholder="Email" required="true"></Input>

                    <button type="submit">envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Music;
