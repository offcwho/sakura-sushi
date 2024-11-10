import Image from "next/image";

export default function About(){
    return(
        <section className="main__section about">
            <div className="container container__about">
                <h2 className="about__title">О ресторане</h2>
                <ul className="about__list">
                    <li className="about__item">
                        <div className="about__item-left">
                            <Image
                                className="about__image"
                                id="sushi1"
                                src="/Frame 17.png"
                                alt="About First Image"
                                width={500}
                                height={450}
                                priority
                            />
                        </div>
                        <div className="about__item-right">
                            <p className="about__item-description">
                            История Sakura Sushi началась с молодого японского повара по имени Такэши, который мечтал создать уникальное место, где гости смогут насладиться аутентичными блюдами японской кухни. Он провел много времени в изучении искусства приготовления суши и сашими, путешествуя по Японии и изучая мастерство старших поваров. После многих лет обучения и опыта работы в лучших ресторанах Токио, Такэши решил открыть свое заведение, которое назвал Sakura Sushi - в честь весеннего цветения сакуры в Японии, символизирующей красоту и гармонию.
                            </p>
                        </div>
                    </li>
                    <li className="about__item">
                        <div className="about__item-left about__item-leftOrder">
                            <p className="about__item-description">
                                Концепция ресторана Sakura Sushi основана на передаче настоящей японской культуры и традиций через блюда и атмосферу. Интерьер заведения выполнен в стиле японской дзен-философии, с использованием натуральных материалов и минималистичного дизайна. Гости могут насладиться не только вкусными блюдами, но и погрузиться в умиротворяющую атмосферу и гармонию, которые ценятся в японской культуре.
                            </p>
                        </div>
                        <div className="about__item-right about__item-rightOrder">
                            <Image
                                className="about__image"
                                id="sushi1"
                                src="/Frame 17.png"
                                alt="About First Image"
                                width={500}
                                height={450}
                                priority
                            />
                        </div>
                    </li>
                    <li className="about__item">
                        <div className="about__item-left">
                            <Image
                                className="about__image"
                                id="sushi1"
                                src="/Frame 17.png"
                                alt="About First Image"
                                width={500}
                                height={450}
                                priority
                            />
                        </div>
                        <div className="about__item-right">
                            <p className="about__item-description">
                            История Sakura Sushi началась с молодого японского повара по имени Такэши, который мечтал создать уникальное место, где гости смогут насладиться аутентичными блюдами японской кухни. Он провел много времени в изучении искусства приготовления суши и сашими, путешествуя по Японии и изучая мастерство старших поваров. После многих лет обучения и опыта работы в лучших ресторанах Токио, Такэши решил открыть свое заведение, которое назвал Sakura Sushi - в честь весеннего цветения сакуры в Японии, символизирующей красоту и гармонию.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}