import React from 'react';
import { ComboItemContainer, ComboItemTitle, ComboItemPrice } from './combo/comboStyles';

const ComboItem = ({ id, flavor, img, price, checked, onClick }) => {
  return (
    <ComboItemContainer onClick={onClick} id={id}>
      <span>
        <img src={img} alt={flavor} />
        {flavor === 'Atole de Arroz con Leche' 
          ? <ComboItemTitle>Atole de Arroz</ComboItemTitle> 
          : <ComboItemTitle>{flavor}</ComboItemTitle>}
        <ComboItemPrice>+ ${price} MXN</ComboItemPrice>
      </span>
      <input type='checkbox' name={flavor} id={flavor} value={flavor} checked={checked} onChange={onClick} />
    </ComboItemContainer>
  );
};

export default ComboItem;
