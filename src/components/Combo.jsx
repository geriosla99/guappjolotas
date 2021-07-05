import React, {useState} from 'react';
import ComboItem from './ComboItem';
import { ComboFoodContainer, ComboMainTitle, ComboMainText } from './combo/comboStyles';

const Combo = ({ food }) => {
  const initialState = Array.from(food, item => { return { id: item.id, isChecked: false } } );
  console.log("initialState", initialState);
  const [listChecked, setChecked] = useState(initialState);

  const checkIfChecked = (id) => {
    for (const item of listChecked) {
      if (item.id === id) {
        return item.isChecked ? 'checked' : '';
      }
    }
    return '';
  }

  const handleChecked = (e) => {
    const { id } = e.target.closest("div");
    for (const item of listChecked) {
      if (item.id !== parseInt(id)) {
        item.isChecked = false;
      } else {
        item.isChecked = !item.isChecked;
      }
    }
    setChecked(listChecked);
  }

  return (
    <>
      <ComboMainTitle>Guajalocombo</ComboMainTitle>
      <ComboMainText>Selecciona la torta que más te guste y disfruta de tu desayuno.</ComboMainText>
      <ComboFoodContainer>
        {food && food.length > 0 && food.map((element) => 
        <ComboItem 
          flavor={element.flavor} 
          img={element.image_main} 
          price={element.price}
          checked={checkIfChecked(element.id)}
          onClick={handleChecked}
          id={element.id} 
          key={`combo-${element.flavor}`} 
        />)}
      </ComboFoodContainer>
    </>
  );
};

export default Combo;
