'use client'

import { useEffect } from 'react';
import Image from "next/image";
import Background from './welcome.background';

//Icons
import { MoveRight } from 'lucide-react';

export default function Welcome() {
  return (
      <section className="main__section welcome">
        <div className="container welcome__container">
          <h1 className="welcome__title">Sakura Sushi</h1>
          <p className="welcome__description">Место, где можно погрузиться в мир вкусов и ароматов Японии, ощутить гармонию и покой, насладиться блюдами, созданными с душой и профессионализмом.</p>
          <a className="button welcome__button" href='#menu'>
            <span className="welcome__button-text">Перейти к меню</span>
            <MoveRight className='welcome__button-icon'/>
          </a>
        </div>
        <Background/>
      </section>
  );
}
