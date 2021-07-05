import React from 'react';
import { ComboItemContainer, ComboItemTitle, ComboItemPrice, HiddenInput, ImgInput } from './combo/comboStyles';

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
      <HiddenInput type='checkbox' name={flavor} id={flavor} value={flavor} checked={checked} onChange={onClick} />
      {checked
        ?<ImgInput src="https://i.imgur.com/Zf7kg3n.png" alt="checked" />
        :<ImgInput src="https://i.imgur.com/dfrVWzx.png" alt="unchecked" />
    }
      
    </ComboItemContainer>
  );
};

export default ComboItem;
