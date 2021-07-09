import React, { useEffect, useRef, useState } from 'react';
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

const SliderFoods = ({foods, setTemporalCart, setQuantityTemporalCart}) => {

    const [quantity, setQuantity] = useState(1);

    const handleChange = (index) => {
        const selected = foods[index];
        const newCart = {
            item: selected,
            quantity: quantity,
            subtotal: quantity * selected.price
        }
        setTemporalCart(newCart);
    }

    const handleQuantity = (operation) => {
        if (operation === "plus") {
            setQuantity(quantity + 1);
        }else if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const firstRender = useRef(true);
    
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        setQuantityTemporalCart(quantity);
    }, [quantity])
    
    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 0,
                "stretch": 0,
                "depth": 100,
                "modifier": 3,
                "slideShadows": false
            }} pagination={false} className="mySwiper"
            onSlideChange={(e) => handleChange(e.realIndex)}
            initialSlide = {0}
            observer={true}
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
                handleQuantity={handleQuantity}
            />
        </>
    )
}

export default SliderFoods
