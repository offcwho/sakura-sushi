'use client'

import { useEffect } from 'react';
import Image from "next/image";
import Background from './welcome.background';
//Icons
import { MoveRight } from 'lucide-react';
import { Button } from '@nextui-org/react';

export default function Welcome() {
  return (
      <section className="main__section welcome">
        <div className="container welcome__container">
          <h1 className="welcome__title">Sakura Sushi</h1>
          <p className="welcome__description">Место, где можно погрузиться в мир вкусов и ароматов Японии, ощутить гармонию и покой, насладиться блюдами, созданными с душой и профессионализмом.</p>
          <Button color="primary" className='button reservation__button button-background welcome__button'> Перейти к меню</Button>
        </div>
        <Background/>
      </section>
  );
}
