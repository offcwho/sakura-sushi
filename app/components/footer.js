'use client'

import Image from "next/image"
import Link from "next/link"
import { Input, Textarea, Button } from "@nextui-org/react"
import { useEffect } from "react"
import { MailIcon } from "lucide-react"


export default function Footer(){
    useEffect(() => {

        
    })
    return(
        <footer className="application__footer footer dark">
            <div className="container footer__container">
                <nav className="footer__nav">
                    <Link href="#!" className="footer__link-logo" >
                        <Image 
                            className="footer__logo"
                            src="/logo.svg"
                            width={60}
                            height={60}
                            alt="Footer Logo"
                        />
                        <h3 className="footer__title">Sakura Sushi</h3>
                    </Link>
                    <div className="footer__block">
                        <menu className="footer__menu">
                            <li className="footer__item-title">Полезное</li>
                            <li className="footer__item">
                                <Link href="#!">Меню</Link>
                            </li>
                            <li className="footer__item">
                                <Link href="#!">Бронирование</Link>
                            </li>
                            <li className="footer__item">
                                <Link href="#!">О ресторане</Link>
                            </li>
                            <li className="footer__item">
                                <Link href="#!">Отзывы</Link>
                            </li>
                            <li className="footer__item">
                                <Link href="#!">Галерея</Link>
                            </li>
                        </menu>
                        <ul className="footer__list">
                            <li className="footer__item-title">Свяжитесь с нами</li>
                            <li className="footer__item">
                                <Link href="mailto:no-reply@sakura-sushi.ru">no-reply@sakura-sushi.ru</Link>
                            </li>
                            <li className="footer__item">
                                <Link href="tel:79375411598">+7 (937) 541-15-98</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__container-input">
                        <Input
                            label="Почта"
                            className="footer__input"
                            placeholder="email"
                            labelPlacement="outside"
                            variant="bordered"
                            startContent={
                              <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            endContent={
                              <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">@gmail.com</span>
                              </div>
                            }
                        />
                        <Textarea
                            variant="bordered"
                            label="Предложение"
                            labelPlacement="outside"
                            placeholder="Type..."
                            className="col-span-12 md:col-span-6 mb-6 md:mb-0 footer__textarea"
                        />
                        <Button color="primary" className='button reservation__button button-background footer__button'>Отправить</Button>
                    </div>
                </nav>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A64a0cfdb2fa43afdf7a77531bc85b7cfcfdc69dd76c9f153c2a1307884872e04&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
        </footer>
    )
}