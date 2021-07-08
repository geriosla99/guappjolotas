// import './Flavor/flavor.css'
import React, { useState } from 'react';
import SingleFlavor from './Flavor/SingleFlavor';
import { FlavorContainer, FlavorTitle } from './Flavor/Flavor';

const Flavors = ({ foods, selectFood, isLoaded, setTemporalCart }) => {
  let initialState = Array.from(foods, (item) => {
    return { flavor: item.flavor, isSelected: false };
  });

  initialState.forEach((element) => {
    element.isSelected = element.flavor === selectFood ? true : false;
  });

  const [selectedFlavor, setSelectedFlavor] = useState(initialState);
  //validacion para que mi estado no este vacio
  if (isLoaded && selectedFlavor.length === 0) {
    setSelectedFlavor(initialState);
  }

  const handleClick = (e) => {
    const { id } = e.target;
    const items = Array.from(selectedFlavor);
    const isSelectedFlavor = foods.find((food) => food.flavor === id);
    console.log(isSelectedFlavor);
    const newCart = {
      item: isSelectedFlavor,
      quantity: 1,
      subtotal: 1* isSelectedFlavor.price
  }
  setTemporalCart(newCart);
    for (const item of items) {
      item.isSelected = item.flavor === id ? true : false;
    }
    setSelectedFlavor(items);
  };

  const checkIfSelected = (flavor) => {
    for (const item of selectedFlavor) {
      if (item.flavor === flavor) {
        return item.isSelected;
      }
    }
    return false;
  };

  return (
    <>
      <FlavorTitle>Sabor</FlavorTitle>
      <FlavorContainer>
        {foods &&
          foods.length > 0 &&
          foods.map((element) => {
            return <SingleFlavor key={element.flavor} img={element.image_flavor} flavor={element.flavor} selected={checkIfSelected(element.flavor)} onClick={handleClick} />;
          })}
      </FlavorContainer>
    </>
  );
};

export default Flavors;
