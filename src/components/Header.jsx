import React from "react";
import { Logopages, TextPages, ShoppingCar, TopImages } from "./header/Header";

const Header = (props) => {
  if (props.visible) {
    return (
      <div>
        <TopImages>
          <Logopages src="https://i.imgur.com/nSkGKJ3.png" alt="Logo de guappjolotas" />
          <ShoppingCar src="https://i.imgur.com/TeEyXRv.png" alt="Carrito" />
        </TopImages>
        <TextPages>Nada como una Guajolota para empezar el día</TextPages>
      </div>
    );
  } else {
    return null;
  }
};

export default Header;
