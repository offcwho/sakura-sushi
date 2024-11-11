'use client'

import intlTelInput from "intl-tel-input";
import IMask from 'imask';
import { useEffect, useState } from "react"

import 'intl-tel-input/build/css/intlTelInput.css';
import {DatePicker} from "@nextui-org/date-picker";
import {Button} from "@nextui-org/react";
import {now, getLocalTimeZone} from "@internationalized/date";

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
        <section className="main__section reservation dark" id="reservation">
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
                        <DatePicker
                            label="Дата и Время"
                            variant="bordered"
                            hideTimeZone
                            showMonthAndYearPickers
                            defaultValue={now(getLocalTimeZone())}
                        />
                    </div>
                    <textarea name="abc" id="textarea" className="reservation__textarea" placeholder="Примечание"></textarea>
                    <Button color="primary" className='button reservation__button button-background'> Забронировать</Button>
                </div>
            </div>
        </section>
    )
}