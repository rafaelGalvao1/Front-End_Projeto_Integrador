import React from 'react';
// instalar o swiper versão 6
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// Colocando o Navigation e Pagination:
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Aqui estou instalando os Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import './CarouselHome.css';
import { Link } from 'react-router-dom';

import banner1 from '../../assets/frutasHome.png';

function CarouselHome() {

    return (

        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className='swiper-container'
        >
            <SwiperSlide className='slide-item'>
                <Link to='/'>
                <img src={banner1} alt="" width="500px" height="300px" />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" width="500px" height="300px" />
            </SwiperSlide>

        </Swiper>

    )
}

export default CarouselHome


