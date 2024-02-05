import "./kontakt.css";

import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import {useState} from "react";

export default function Kontakt() {
    const [succesMessage, setSuccesMessage] = useState("");
    const { register, handleSubmit, errors } = useForm(); 
    
    const serviceID = "service_cyaivbj";
    const templateID = "template_ID";
    const publicKEY = "ARyM-hIUWq4WIkf_S";

    const onSubmit = (data, r) => {
        sendEmail (
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            publicKEY
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, publicKEY) => {
        

        emailjs.send(serviceID, templateID, variables, publicKEY)
            .then(() => {
                setSuccesMessage("Wiadomość wysłana!");
            }).catch(err => console.error(`Coś poszło nie tak! ${err}`));
            
    };


    return (
        <div id="kontakt" className="contacts">
            <div className="text-center">
                <h1>Kontakt</h1>
                <p>Wypełnij Formularz. Przybliż swoje wymagania. Skontaktuję się z Toba najszybciej jak to będzie możliwe.</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <input
                                type="text"
                                className="formControl"
                                placeholder="Imię i nazwisko"
                                name="name"
                                ref={
                                    register({
                                        required: "Proszę wprowadzić Imię i nazwisko opcjonalnie",
                                        maxLenght: {
                                            value: 20,
                                            message: "Wprowadź krótszą nazwę"
                                        }
                                    })
                                }
                            />
                            <div className="line"></div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* Phone Input */}
                            <input
                                type="text"
                                className="formControl"
                                placeholder="Numer Telefonu"
                                name="phone"
                            />
                            {/* Email Input */}
                            <input
                                type="email"
                                className="formControl"
                                placeholder="Email"
                                name="email"
                            />
                            {/* Temat Input */}
                            <input
                                type="text"
                                className="formControl"
                                placeholder="Temat"
                                name="subject"
                            />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Opis */}
                            <textarea
                                type="text"
                                className="formControl"
                                placeholder="Przybliż swoje wymagania..."
                                name="description">
                            </textarea>
                            <button className="btnMainOffer contactBTN" type="submit">Wyślij</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}