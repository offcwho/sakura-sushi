'use client'

import Image from "next/image"
import { useEffect, useState } from "react";

export default function Galery(){
    useEffect(() => {
    })
    
    return(
        <section className="main__section galery">
            <div className="container galery__container">
                <h2 className="galery__title">Галерея</h2>
                <ul className="galery__list">
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery2.jpg"
                            width={400}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery3.jpg"
                            width={350}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery4.jpg"
                            width={400}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery2.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery3.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery4.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery2.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery3.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                    <li className="galery__item">
                        <Image 
                            src="/galery/galery4.jpg"
                            width={300}
                            height={0}
                            alt="Galery"
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}