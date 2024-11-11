'use client'

import intlTelInput from "intl-tel-input";
import IMask from 'imask';
import { useEffect, useState } from "react"

import 'intl-tel-input/build/css/intlTelInput.css';
import {DatePicker} from "@nextui-org/date-picker";

export default function Reservation(){

    useEffect(() => {
        const input = document.querySelector("#phone");
        intlTelInput(input, {
            initialCountry: "ru",
            loadUtilsOnInit: () => import("intl-tel-input/utils")
        });
        IMask(
            document.getElementById('phone'),
            {
              mask: '+{7}(000)000-00-00'
            }
        )

    })
    return(
        <section className="main__section reservation dark">
            <div className="container reservation__container">
                <h2 className="reservation__title">Бронирование</h2>
                <div className="reservation__form">
                    <div className="reservation__container-input">
                        <input type="text" className="reservation__input" placeholder="Имя"/>
                    </div>
                    <div className="reservation__container-input">
                        <input type="tel" className="reservation__input" id="phone" placeholder="(999) 999 99 99" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    </div>
                    <div className="reservation__container-input">
                            <DatePicker as="div" label="Birth date" className="max-w-[284px]" />
                    </div>
                    <textarea name="abc" id="textarea" className="reservation__textarea" placeholder="Примечание"></textarea>
                    <button className="button reservation__button">Забронировать</button>
                </div>
            </div>
        </section>
    )
}