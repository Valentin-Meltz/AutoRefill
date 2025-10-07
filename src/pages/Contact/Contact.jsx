import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Input from "components/Input/Input"

import "./Contact.css"

export default function Contact() {
    return (
        <div className="main">
            <Header />
            <section class="section-form-c">
                <div class="form-container-c">
                    <h4 class="title-form-c">Contactez-nous</h4>
                    <form>
                        <div class="form-group-name-c">
                            <div class="div-name-c">
                                <label class="form-label-c">Prénom</label>
                                <Input id={"firstname"} type={"text"} placeholder={"First Name..."} class="input-c" required></Input>
                            </div>
                            <div class="div-name-c">
                                <label class="form-label-c">Nom</label>
                                <Input id={"lastName"} type={"text"} placeholder={"Last Name..."} class="input-c" required></Input>
                            </div>
                        </div>
                        <div class="form-group-c">
                            <label class="form-label-c">E-mail</label>
                            <Input id={"email"} type={"email"} placeholder={"E-mail..."} class="input-c" required></Input>
                        </div>
                        <div class="form-group-c">
                            <label class="form-label-c">Objet</label>
                            <Input id={"objet"} type={"texte"} placeholder={"Objet..."} class="input-c" required></Input>
                        </div>
                        <div class="form-group-c">
                            <label class="form-label-c">Message</label>
                            <textarea id="message" name="message" class="input-message-c" placeholder="Votre Message..." required></textarea>
                        </div>
                        <div class="div-btn-c">
                            <button type="submit" id="btn-c" class="btn-c">J'envoie le message</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}