'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Reviews(){
    return(
        <section className="main__section reviews">
            <div className="container reviews__container">
                <h2 className="reviews__title">Отзывы</h2>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        '--swiper-pagination-bullet-inactive-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                          'background-image':
                            'url(/reviews.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide className='reviews__slide reviews__post'>
                            <div className="reviews__container-slide">
                                <h3 className="reviews__post-title" data-swiper-parallax="-100">Оставьте отзыв</h3>
                                <p className="reviews__post-desc" data-swiper-parallax="-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat ullam nulla nobis corporis, culpa tenetur ipsum exercitationem obcaecati quisquam!</p>
                                <button className="reviews__button" data-swiper-parallax="-150">
                                    <span className="reviews__button-text">Оставить отзыв</span>
                                </button>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews__slide'>
                        <div className="reviews__container-slide">
                            <Image 
                                src="/rating.svg"
                                width={150}
                                height={0}
                                alt='Rating'
                                className='reviews__rating'
                                data-swiper-parallax="-150"
                            />
                            <div className="reviews__slide-header" data-swiper-parallax="-100">
                                <Image
                                    src="/users/who_official.png"
                                    width={60}
                                    height={60}
                                    alt="User Image"
                                    className='reviews__userImage'
                                />
                                <h3 className="reviews__username">Username</h3>
                            </div>
                            <p className="reviews__review" data-swiper-parallax="-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, numquam quos nostrum rem ab.</p>
                            <div className="reviews__userPhoto-container">
                                <Image 
                                    className='reviews__userPhoto'
                                    src="/user-photo/review_user-photo.jpg"
                                    width={400}
                                    height={0}
                                    alt="Photo"
                                    data-swiper-parallax="-50"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews__slide'>
                        <div className="reviews__container-slide">
                            <Image 
                                src="/rating.svg"
                                width={150}
                                height={0}
                                alt='Rating'
                                className='reviews__rating'
                                data-swiper-parallax="-150"
                            />
                            <div className="reviews__slide-header" data-swiper-parallax="-100">
                                <Image
                                    src="/users/who_official.png"
                                    width={60}
                                    height={60}
                                    alt="User Image"
                                    className='reviews__userImage'
                                />
                                <h3 className="reviews__username">Username</h3>
                            </div>
                            <p className="reviews__review" data-swiper-parallax="-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, numquam quos nostrum rem ab.</p>
                            <div className="reviews__userPhoto-container">
                                <Image 
                                    className='reviews__userPhoto'
                                    src="/user-photo/review_user-photo.jpg"
                                    width={400}
                                    height={0}
                                    alt="Photo"
                                    data-swiper-parallax="-50"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews__slide'>
                        <div className="reviews__container-slide">
                            <Image 
                                src="/rating.svg"
                                width={150}
                                height={0}
                                alt='Rating'
                                className='reviews__rating'
                                data-swiper-parallax="-150"
                            />
                            <div className="reviews__slide-header" data-swiper-parallax="-100">
                                <Image
                                    src="/users/who_official.png"
                                    width={60}
                                    height={60}
                                    alt="User Image"
                                    className='reviews__userImage'
                                />
                                <h3 className="reviews__username">Username</h3>
                            </div>
                            <p className="reviews__review" data-swiper-parallax="-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, numquam quos nostrum rem ab.</p>
                            <div className="reviews__userPhoto-container">
                                <Image 
                                    className='reviews__userPhoto'
                                    src="/user-photo/review_user-photo.jpg"
                                    width={400}
                                    height={0}
                                    alt="Photo"
                                    data-swiper-parallax="-50"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews__slide'>
                        <div className="reviews__container-slide">
                            <Image 
                                src="/rating.svg"
                                width={150}
                                height={0}
                                alt='Rating'
                                className='reviews__rating'
                                data-swiper-parallax="-150"
                            />
                            <div className="reviews__slide-header" data-swiper-parallax="-100">
                                <Image
                                    src="/users/who_official.png"
                                    width={60}
                                    height={60}
                                    alt="User Image"
                                    className='reviews__userImage'
                                />
                                <h3 className="reviews__username">Username</h3>
                            </div>
                            <p className="reviews__review" data-swiper-parallax="-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, numquam quos nostrum rem ab.</p>
                            <div className="reviews__userPhoto-container">
                                <Image 
                                    className='reviews__userPhoto'
                                    src="/user-photo/review_user-photo.jpg"
                                    width={400}
                                    height={0}
                                    alt="Photo"
                                    data-swiper-parallax="-50"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
             </div>
        </section>
    )
}