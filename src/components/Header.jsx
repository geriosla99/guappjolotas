import React from "react";
import { Logopages, TextPages, ShoppingCar, TopImages } from "./header/Header";

const Header = (props) => {
  if (props.visible) {

      const handleClick = ()=>{
        console.log('yendo a carrito');
        props.changeVisible(false);
      }


    return (
      <>
        <TopImages>
          <Logopages src="https://i.imgur.com/nSkGKJ3.png" alt="Logo de guappjolotas" />
          <ShoppingCar src="https://i.imgur.com/TeEyXRv.png" alt="Carrito" onClick={handleClick} />
        </TopImages>
        <TextPages>Nada como una Guajolota para empezar el día</TextPages>
        {this.props.visible === false && this.props.visibleMagnify === true ? 
        <SearchEmpty image="https://i.imgur.com/TeEyXRv.png" alt="Carrito" text={this.props.textCar} /> : ""}
      </>
    );
  } else {
    return null;
  }
};

export default Header;
