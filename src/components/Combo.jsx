import React, { useState } from 'react';
import ComboItem from './ComboItem';
import { ComboFoodContainer, ComboMainTitle, ComboMainText } from './combo/comboStyles';

const Combo = ({ food, isLoaded, handler }) => {
  const initialState = Array.from(food, (item) => {
    return { id: item.id, isChecked: false };
  });
  const [listChecked, setChecked] = useState(initialState);

  const getOppositeFoodSelected = (id) => (id ? food.find((food) => food.id === id) : {});

  if (isLoaded && listChecked.length === 0) {
    setChecked(initialState);
  }

  const checkIfChecked = (id) => {
    for (const item of listChecked) {
      if (item.id === id) {
        return item.isChecked;
      }
    }
    return false;
  };

  const handleChecked = (e) => {
    const { id } = e.target.closest('div');
    const items = Array.from(listChecked);
    let checkedId = 0;
    for (const item of items) {
      item.isChecked = item.id === parseInt(id) ? !item.isChecked : false;
      if (item.isChecked) {
        checkedId = item.id;
      }
    }
    handler(getOppositeFoodSelected(checkedId));
    setChecked(items);
  };

  const comboCategory = (categoryid) => {
    const categories = {
      1: 'guajalota',
      2: 'bebida',
    };
    return categories[categoryid];
  };

  return (
    <>
      <ComboMainTitle>Guajalocombo</ComboMainTitle>
      {food && food.length > 0 && <ComboMainText>Selecciona la {comboCategory(food[0].category)} que más te guste y disfruta de tu desayuno.</ComboMainText>}
      <ComboFoodContainer>
        {food &&
          food.length > 0 &&
          food.map((element) => {
            const { flavor, image_main: img, price, id } = element;
            return <ComboItem flavor={flavor} img={img} price={price} checked={checkIfChecked(id)} onClick={handleChecked} id={id} key={`combo-${flavor}`} />;
          })}
      </ComboFoodContainer>
    </>
  );
};

export default Combo;
