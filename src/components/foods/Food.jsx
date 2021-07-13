import React from 'react';
import { Link } from 'react-router-dom';
import { LinkFoodContainer, ContainerFood, ImageFoodMain, DescriptionFood, FlavorFood, PriceFood } from './FoodStyles';

const Food = ({ food }) => {
  return (
    <LinkFoodContainer>
      <Link to={{pathname: `/${food.category}/${food.flavor}`, category: food.category, food: food }} style={{ textDecoration: 'none' }}>
        <ContainerFood>
          <ImageFoodMain src={food.image_main} alt={food.flavor} />
          <DescriptionFood>
            <FlavorFood flavor={food.flavor} />
            <PriceFood price={food.price} />
          </DescriptionFood>
        </ContainerFood>
      </Link>
    </LinkFoodContainer>
  );
};

export default Food;
