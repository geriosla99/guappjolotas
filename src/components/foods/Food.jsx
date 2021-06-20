import React from 'react';
import { ContainerFood, ImageFoodMain, DescriptionFood, FlavorFood, PriceFood } from './FoodStyles';

const onClickListener = () => {
    console.log('object')
}

const Food = ( {food} ) => {

    return (
        <ContainerFood
            onClick= {onClickListener}
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