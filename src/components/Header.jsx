import React from "react";
import { Logopages, TextPages, ShoppingCar, TopImages } from "./header/Header";

const Header = (props) => {
  if (props.visible) {

      const handleClick = ()=>{
        console.log('yendo a carrito')
      }

    return (
      <>
        <TopImages>
          <Logopages src="https://i.imgur.com/nSkGKJ3.png" alt="Logo de guappjolotas" />
          <ShoppingCar src="https://i.imgur.com/TeEyXRv.png" alt="Carrito" onClick={handleClick} />
        </TopImages>
        <TextPages>Nada como una Guajolota para empezar el día</TextPages>
        
      </>
    );
  } else {
    return null;
  }
};

export default Header;
