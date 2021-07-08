import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerFood, ImageFoodMain, DescriptionFood, FlavorFood, PriceFood } from './FoodStyles';

const handleClick = () => {
  console.log('object');
};

const Food = ({ food }) => {
  return (
    <div>
      <Link to={`/${food.category}/${food.flavor}`} style={{ textDecoration: 'none' }}>
        <ContainerFood onClick={handleClick}>
          <ImageFoodMain src={food.image_main} alt={food.flavor} />
          <DescriptionFood>
            <FlavorFood flavor={food.flavor} />
            <PriceFood price={food.price} />
          </DescriptionFood>
        </ContainerFood>
      </Link>
    </div>
  );
};

export default Food;
