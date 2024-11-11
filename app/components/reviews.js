'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function Reviews(){

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <section className="main__section reviews" id="reviews">
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
                    mousewheel={{ invert: true}}
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
                    <SwiperSlide className='reviews__slide reviews__post dark'>
                            <div className="reviews__container-slide">
                                <h3 className="reviews__post-title" data-swiper-parallax="-100">Оставьте отзыв</h3>
                                <p className="reviews__post-desc" data-swiper-parallax="-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat ullam nulla nobis corporis, culpa tenetur ipsum exercitationem obcaecati quisquam!</p>
                                <Button onPress={onOpen} className='button-background'>Оставить отзыв</Button>
                                <Modal 
                                    isOpen={isOpen} 
                                    onOpenChange={onOpenChange}
                                    placement="center"
                                >
                                    <ModalContent className='modal-background'>
                                      {(onClose) => (
                                        <>
                                          <ModalHeader className="flex flex-col gap-1 modal-color">Отзыв</ModalHeader>
                                          <ModalBody>
                                            <Input
                                              autoFocus
                                              label="Имя"
                                              placeholder="Введите ваше имя"
                                              variant="bordered"
                                              className='modal-color'
                                            />
                                            <Input
                                              label="Отзыв"
                                              placeholder="Оставить отзыв"
                                              type="text"
                                              variant="bordered"
                                              className='modal-color'
                                            />
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" className='button-background' onPress={onClose}>
                                              Отправить
                                            </Button>
                                          </ModalFooter>
                                        </>
                                      )}
                                    </ModalContent>
                                </Modal>
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