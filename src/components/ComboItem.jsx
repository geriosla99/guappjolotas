import React from 'react';
import { ComboItemContainer, ComboItemTitle, ComboItemPrice } from './combo/comboStyles';

const ComboItem = ({ flavor, img, price }) => {
  return (
    <ComboItemContainer>
      <label htmlFor={flavor}>
        <img src={img} alt={flavor} />
        <ComboItemTitle>{flavor}</ComboItemTitle>
        <ComboItemPrice>+ ${price} MXN</ComboItemPrice>
      </label>
      <input type='checkbox' name={flavor} id={flavor} />
    </ComboItemContainer>
  );
};

export default ComboItem;
