'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import {Button} from "@nextui-org/react";

//Icons
import { MenuIcon, ShoppingCart, UserRound, X } from 'lucide-react';
//Icons

export default function Header(){
    useEffect(() => {
        window.addEventListener("scroll", function(){
            let 
                value = window.scrollY,
                header = document.getElementById('header');
            if(value > 0){
                header.classList.add('header--scrolled');
            }else{
                header.classList.remove('header--scrolled');
            }
        }) 
        const
            button = document.getElementById("open"),
            menu = document.getElementById("menu"),
            buttonMenu = document.getElementById("MenuIcon"),
            close = document.getElementById("Close");
        
        button.addEventListener("click", function(){
            menu.classList.toggle("header__nav--open")
            buttonMenu.classList.toggle("no-active")
            close.classList.toggle("active")
        })
        
        const link = document.querySelectorAll(".header__item");

        link.forEach(link_array => {
            link_array.addEventListener("click", function(){
                menu.classList.toggle("header__nav--open")
                buttonMenu.classList.toggle("no-active")
                close.classList.toggle("active")
            })
        })
    })
    return(
        <header className="header" id="header">
            <div className="container header__container">
                <Link href="/" className="header__link-logo">
                    <Image
                        className=""
                        src="/logo.svg"
                        alt="Next.js logo"
                        width={50}
                        height={38}
                        priority
                    />
                </Link>
                <nav className="header__nav" id="menu">
                    <menu className="header__menu">
                        <li className="header__item">
                            <Link className="header__link" href="#menu">Меню</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#reservation">Бронирование</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#about">О ресторане</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#reviews">Отзывы</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#galery">Галерея</Link>
                        </li>
                    </menu>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link href="/cart" className="header__list-link">
                                <ShoppingCart />
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link href="/user" className="header__list-link">
                                <UserRound />    
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Button color="primary" className='button header__button button-background' id="open"> 
                    <MenuIcon id="MenuIcon"/>
                    <X id="Close"/>
                </Button>
            </div>
        </header>
    );
}