'use client'

import intlTelInput from "intl-tel-input";
import IMask from 'imask';
import { useEffect, useState } from "react"

import 'intl-tel-input/build/css/intlTelInput.css';
import {DatePicker} from "@nextui-org/date-picker";
import {Button, Textarea, Input} from "@nextui-org/react";
import {now, getLocalTimeZone} from "@internationalized/date";

export default function Reservation(){

    useEffect(() => {
        const input = document.querySelector("#phone");
        IMask(
            document.getElementById('phone'),
            {
              mask: '+{7} (000)000-00-00'
            }
        )

    })
    return(
        <section className="main__section reservation dark" id="reservation">
            <div className="container reservation__container">
                <h2 className="reservation__title">Бронирование</h2>
                <div className="reservation__form">
                    <div className="reservation__container-input">
                        <Input
                            isRequired
                            type="text"
                            label="Имя"
                            variant="bordered"
                            defaultValue="junior@nextui.org"
                            className="reservation__input"
                        />
                    </div>
                    <div className="reservation__container-input">
                        <Input
                            isRequired
                            type="text"
                            label="Телефон"
                            variant="bordered"
                            className="reservation__input"
                            id="phone"
                            description="+7 (999)999-99-99"
                        />
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
                    <Textarea
                        variant="bordered"
                        label="Примечание"
                        labelPlacement="outside"
                        placeholder="(не обязательно)"
                        className="col-span-12 md:col-span-6 mb-6 md:mb-0 reservation__textarea"
                    />
                    <Button color="primary" className='button reservation__button button-background'> Забронировать</Button>
                </div>
            </div>
        </section>
    )
}