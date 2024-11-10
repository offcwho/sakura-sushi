'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function Background(){

    useEffect(() => {
        const 
                background = document.getElementById('background'),
                mountain = document.getElementById('Mountain'),
                mountain2 = document.getElementById('Mountain2'),
                mountain3 = document.getElementById('Mountain3'),
                mountain4 = document.getElementById('Mountain4'),
                mountain5 = document.getElementById('Mountain5'),
                mountain6 = document.getElementById('Mountain6'),
                mountain7 = document.getElementById('Mountain7'),
                mountain8 = document.getElementById('Mountain8'),
                mountain9 = document.getElementById('Mountain9'),
                mountain10 = document.getElementById('Mountain10'),
                reflection = document.getElementById('reflection'),
                mountain_reflection = document.getElementById('Mountain_reflection'),
                mountain2_reflection = document.getElementById('Mountain2_reflection'),
                mountain3_reflection = document.getElementById('Mountain3_reflection'),
                mountain4_reflection = document.getElementById('Mountain4_reflection'),
                mountain5_reflection = document.getElementById('Mountain5_reflection'),
                mountain6_reflection = document.getElementById('Mountain6_reflection'),
                mountain7_reflection = document.getElementById('Mountain7_reflection'),
                mountain8_reflection = document.getElementById('Mountain8_reflection'),
                mountain9_reflection = document.getElementById('Mountain9_reflection'),
                mountain10_reflection = document.getElementById('Mountain10_reflection'),
                cloud = document.getElementById('Cloud'),
                cloud2 = document.getElementById('Cloud2'),
                gate = document.getElementById('Gate'),
                water = document.getElementById('water'),
                sun = document.getElementById('Sun');

        window.addEventListener('scroll', function() {
                let value = window.scrollY;

                //Mountains
                mountain.style.top = value * 0.15 + 'px';
                mountain2.style.top = value * 0.20 + 'px';
                mountain3.style.top = value * 0.25 + 'px';
                mountain4.style.top = value * 0.30 + 'px';
                mountain5.style.top = value * 0.35 + 'px';
                mountain6.style.top = value * 0.40 + 'px';
                mountain7.style.top = value * 0.45 + 'px';
                mountain8.style.top = value * 0.50 + 'px';
                mountain9.style.top = value * 0.55 + 'px';
                mountain10.style.top = value * 0.60 + 'px';

                //Reflections
                mountain_reflection.style.top = value * 0.60 + 'px';
                mountain2_reflection.style.top = value * 0.55 + 'px';
                mountain3_reflection.style.top = value * 0.50 + 'px';
                mountain4_reflection.style.top = value * 0.45 + 'px';
                mountain5_reflection.style.top = value * 0.40 + 'px';
                mountain6_reflection.style.top = value * 0.35 + 'px';
                mountain7_reflection.style.top = value * 0.30 + 'px';
                mountain8_reflection.style.top = value * 0.25 + 'px';
                mountain9_reflection.style.top = value * 0.20 + 'px';
                mountain10_reflection.style.top = value * 0.15 + 'px';
                reflection.style.top = value * 0.65 + 'px';

                //Other
                gate.style.top = value * 0.5 + 'px'
                water.style.top = value * 0.4 + 'px'
                cloud.style.top = value * 0.3 + 'px'
                cloud2.style.top = value * 0.4 + 'px'
                sun.style.left = value * 0.4 + 'px'
                background.style.top = value * 0.15 + 'px'
        })
      })

    return(
        <div className="welcome__background">
           <Image
                className="welcome__image-background z-index-0"
                src="/parallax/background.svg"
                alt="Site Background"
                width={10}
                height={10}
                id="background"
            />
            <Image
                className="welcome__image-background z-index-1"
                src="/parallax/cloud.svg"
                alt="Site Clouds"
                width={10}
                height={10}
                id="Cloud"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/cloud2.svg"
                alt="Site Clouds"
                width={10}
                height={10}
                id="Cloud2"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain2.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain2"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain3.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain3"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain4.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain4"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain5.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain5"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain6.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain6"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain7.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain7"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain8.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain8"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain9.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain9"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain10.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain10"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/water.svg"
                alt="Site Water"
                width={10}
                height={10}
                id="water"
            />
             <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain2_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain2_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain3_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain3_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain4_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain4_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain5_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain5_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain6_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain6_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain7_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain7_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain8_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain8_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain9_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain9_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain10_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain10_reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/reflection.svg"
                alt="Site Reflection"
                width={10}
                height={10}
                id="reflection"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/sun.svg"
                alt="Site Sun"
                width={10}
                height={10}
                id="Sun"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/gate.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
            />
        </div>
        )
}