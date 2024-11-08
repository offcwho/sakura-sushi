'use client'

import { useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', function(){
      const sushi1 = document.getElementById('sushi1'),
          sushi2 = document.getElementById('sushi2'),
          tobiko = document.getElementById('tobiko'),
          circle = document.getElementById('circle'),
          circle1 = document.getElementById('circle1'),
          circle2 = document.getElementById('circle2'),
          text = document.getElementById('text'),
          background = document.getElementById('bg');
      let value = window.scrollY;
    
      sushi1.style.bottom = value * 2 + 'px';
      sushi2.style.bottom = value * 1.5 + 'px';
      tobiko.style.bottom = value * 1.20 + 'px';
      circle.style.top = value * 1.5 + 'px';
      circle1.style.bottom = value * 1.01 + 'px';
      circle2.style.bottom = value * 1.15 + 'px';
      text.style.top = value * 2 + 'px';
      background.style.bottom = value * 1.35 + 'px';
    })
  })
  return (
      <section className="main__section welcome">
        <div className="container welcome__container">
            <div className="welcome__circle" id="circle">
              <div className="welcome__container-sushi1">
                <Image
                  className="welcome__sushi1"
                  id="sushi1"
                  src="/sushi/Sushi 1.png"
                  alt="Next.js logo"
                  width={150}
                  height={150}
                  priority
                />
              </div>
              <div className="welcome__container-text">
                <Image
                    className="welcome__text"
                    id="text"
                    src="/text.svg"
                    alt="Next.js logo"
                    width={550}
                    height={400}
                    priority
                />
              </div>
              <div className="welcome__container-sushi2">
                <Image
                  className="welcome__sushi2"
                  id="sushi2"
                  src="/sushi/Sushi 2.png"
                  alt="Next.js logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <div className="welcome__container-tobiko">
                <Image
                  className="welcome__tobiko"
                  id="tobiko"
                  src="/sushi/Tobiko.png"
                  alt="Next.js logo"
                  width={250}
                  height={250}
                  priority
                />
              </div>
              <div className="welcome__container-circle1">
                <Image
                  className="welcome__circle1"
                  id="circle1"
                  src="/sushi/circles/Circle 1.png"
                  alt="Next.js logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <div className="welcome__container-circle2">
                <Image
                  className="welcome__circle2"
                  id="circle2"
                  src="/sushi/circles/Circle 2.png"
                  alt="Next.js logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            <Image
                  className="welcome__background"
                  id="bg"
                  src="/bg.jpg"
                  alt="Next.js logo"
                  width={1920}
                  height={1080}
                  priority
                />
        </div>
      </section>
  );
}
