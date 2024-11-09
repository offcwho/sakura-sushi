'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

//Icons
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';
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
    })
    return(
        <header className="header" id="header">
            <div className="container header__container">
                <Link href="/" className="header__link-logo">
                    <Image
                        className=""
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </Link>
                <nav className="header__nav">
                    <menu className="header__menu">
                        <li className="header__item">
                            <Link className="header__link" href="/menu">Меню</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="/menu">Меню</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="/menu">Меню</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="/menu">Меню</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="/menu">Меню</Link>
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
            </div>
        </header>
    );
}