import Image from "next/image";
import Link from "next/link";

export default function Menu(){
    return(
        <section className="main__section menu">
            <div className="container menu__container">
                <h2 className="menu__title">Меню</h2>
                <ul className="menu__list">
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                    <li className="menu__item">
                        <div className="menu__image">
                            <Image
                                className="menu__item-image"
                                src="/card-sushi.png"
                                alt="Sushi Card"
                                height={150}
                                width={150}
                            />
                        </div>
                        <h3 className="menu__item-title">Крутые Роллы</h3>
                        <p className="menu__item-desc">Lorem ipsum dolor sit amet.</p>
                        <span className="menu__item-cost">$1.5</span>
                        <button className="menu__item-button">Add to Cart</button>
                    </li>
                </ul>
                <div className="menu__more">
                    <Link href="#!" className="menu__more-btn">Показать ещё...</Link>
                </div>
            </div>
        </section>
    )
}