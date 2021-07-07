import React, { useState } from 'react';
import {Title, Price} from './slider/SliderStyles'
import QuantityDetails from './QuantityDetails';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

import "./slider/Style.css"

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

const SliderFoods = ({foods, setTemporalCart}) => {

    const [food, setFood] = useState([foods[0]]);
    const [quantity, setQuantity] = useState(1);

    const handleChange = (index) => {
        const selected = foods[index];
        setFood(selected);
        const newCart = {
            items: [
                food
            ],
            quantity: quantity,
            subtotal: quantity * food.price
        }
        setTemporalCart(newCart);
    }
    
    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 3,
                "slideShadows": true
            }} pagination={false} className="mySwiper"
            onSlideChange={(e) => handleChange(e.realIndex)}
            >

                {
                    foods.map((food) => (
                        <SwiperSlide
                            key={food.flavor}
                        >
                            <img src={food.image_main} alt={food.flavor} />
                            <Title>{food.flavor}</Title>
                            <Price>{`$ ${food.price} MXN`}</Price>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <QuantityDetails 
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </>
    )
}

export default SliderFoods
