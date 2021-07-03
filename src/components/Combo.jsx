import React from 'react';
import ComboItem from './ComboItem';
import { ComboFoodContainer } from './combo/comboStyles';

const Combo = ({ food }) => {
  return (
    <div>
      <h1>Guajalocombo</h1>
      <p>Selecciona la torta que más te guste y disfruta de tu desayuno.</p>
      <ComboFoodContainer>{food && food.length > 0 && food.map((element) => <ComboItem flavor={element.flavor} img={element.image_main} price={element.price} />)}</ComboFoodContainer>
    </div>
  );
};

export default Combo;
