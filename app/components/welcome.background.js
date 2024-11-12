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
              if(yPos < 1080){
                    $(this).attr('style','transform: translate(0px, ' + yPos + 'px)');
              }
            });
          });
      })
    return(
        <div className="welcome__background">
            <Image
                className="welcome__image-background"
                src="/parallax2/bg.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="30"
            />
            <Image
                className="welcome__image-background"
                src="/parallax2/kontur.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="30"
            />
            <Image
                className="welcome__image-background"
                src="/parallax2/kusti2.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="-120"
            />
            <Image
                className="welcome__image-background"
                src="/parallax2/kusti1.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="-150"
            />
            <Image
                className="welcome__image-background"
                src="/parallax2/water.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="30"
            />
            <Image
                className="welcome__image-background"
                src="/parallax2/gate.svg"
                alt="Site Gate"
                width={10}
                height={10}
                id="Gate"
                data-speed="50"
            />
            <div id="water3" className="welcome__image-background" data-speed="32"></div>
        </div>
        )
}