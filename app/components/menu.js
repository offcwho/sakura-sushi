import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from 'lucide-react';

export default function Menu(){
    return(
        <section className="main__section menu" id="menu">
            <div className="container menu__container">
                <h2 className="menu__title">Меню</h2>
                <ul className="menu__list">
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll1.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Калифорния с креветкой</h3>
                        <p className="menu__item-desc">8 шт / 200 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">370 ₽</span>
                                <span className="menu__item-cost">360 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll2.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Вега</h3>
                        <p className="menu__item-desc">8 шт / 215 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">300 ₽</span>
                                <span className="menu__item-cost">285 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll3.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Шиитаке сыр</h3>
                        <p className="menu__item-desc">8 шт / 190 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">275 ₽</span>
                                <span className="menu__item-cost">245 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll4.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Синай</h3>
                        <p className="menu__item-desc">8 шт / 205 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">450 ₽</span>
                                <span className="menu__item-cost">429 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll5.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Калифорния с лососем</h3>
                        <p className="menu__item-desc">8 шт / 200 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">410 ₽</span>
                                <span className="menu__item-cost">385 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll6.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Филадельфия с креветкой</h3>
                        <p className="menu__item-desc">8 шт / 225 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">500 ₽</span>
                                <span className="menu__item-cost">480 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__color"></div>
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/rolls/roll7.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Ролл Чиз лосось</h3>
                        <p className="menu__item-desc">8 шт / 210 г</p>
                        <div className="menu__item-actions">
                            <div className="menu__item-costs">
                                <span className="menu__item-oldcost">485 ₽</span>
                                <span className="menu__item-cost">455 ₽</span>
                            </div>
                            <button className="menu__item-button">
                                <ShoppingCart />
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="menu__more">
                    <Link href="#!" className="menu__more-btn">Показать ещё...</Link>
                </div>
            </div>
        </section>
    )
}