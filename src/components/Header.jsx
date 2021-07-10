import React from "react";
import { Link } from "react-router-dom";
import { Logopages, TextPages, ShoppingCar, TopImages } from "./header/Header";

const Header = (props) => {
  if (props.visible) {

      const handleClick = ()=>{
        props.changeVisible(false);
      }


    return (
      <>
        <TopImages>
          <Logopages src="https://i.imgur.com/nSkGKJ3.png" alt="Logo de guappjolotas" />
          <Link to="/cart">
            <ShoppingCar src="https://i.imgur.com/TeEyXRv.png" alt="Carrito" onClick={handleClick} />
          </Link>
          
        </TopImages>
        <TextPages>Nada como una Guajolota para empezar el día</TextPages>
      </>
    );
  } else {
    return null;
  }
};

export default Header;
