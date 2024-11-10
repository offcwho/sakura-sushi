'use client'

import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";

export default function Background(){

    useEffect(() => {
        window.addEventListener("scroll", function(event){

            var top = this.pageYOffset;
        
            var layers = $(".welcome__image-background");
            var speed, yPos;
            layers.each(function() {
              speed = $(this).attr('data-speed');
              var yPos = -(top * speed / 100);
              $(this).attr('style','transform: translate(0px, ' + yPos + 'px)');
            });
          });
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
                data-speed="30"
            />
            <Image
                className="welcome__image-background z-index-1"
                src="/parallax/cloud.svg"
                alt="Site Clouds"
                width={10}
                height={10}
                id="Cloud"
                data-speed="10"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/cloud2.svg"
                alt="Site Clouds"
                width={10}
                height={10}
                id="Cloud2"
                data-speed="10"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain"
                data-speed="40"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain2.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain2"
                data-speed="50"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain3.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain3"
                data-speed="60"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain4.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain4"
                data-speed="70"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain5.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain5"
                data-speed="80"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain6.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain6"
                data-speed="90"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain7.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain7"
                data-speed="100"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain8.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain8"
                data-speed="110"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain9.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain9"
                data-speed="120"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain10.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain10"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/water3.svg"
                alt="Site Water"
                width={10}
                height={10}
                id="water3"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/water.svg"
                alt="Site Water"
                width={10}
                height={10}
                id="water"
                data-speed="130"
            />
             <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain2_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain2_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain3_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain3_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain4_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain4_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain5_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain5_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain6_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain6_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain7_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain7_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain8_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain8_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain9_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain9_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/mountain10_reflection.svg"
                alt="Site Mountain"
                width={10}
                height={10}
                id="Mountain10_reflection"
                data-speed="130"
            />
            <Image
                className="welcome__image-background z-index-2"
                src="/parallax/reflection.svg"
                alt="Site Reflection"
                width={10}
                height={10}
                id="reflection"
                data-speed="130"
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
                data-speed="140"
            />
        </div>
        )
}