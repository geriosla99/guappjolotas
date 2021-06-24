import React from 'react';
import { ContainerFood, ImageFoodMain, DescriptionFood, FlavorFood, PriceFood } from './FoodStyles';

const handleClick = () => {
    console.log('object')
}

const Food = ( {food} ) => {

    return (
        <ContainerFood
            onClick= {handleClick}
        >
            <ImageFoodMain 
                src= {food.image_main}
                alt= {food.flavor}
            />
            <DescriptionFood>
                <FlavorFood 
                    flavor = {food.flavor}
                />
                <PriceFood 
                    price = {food.price}
                />
            </DescriptionFood>
        </ContainerFood>
    )

}

export default Food;