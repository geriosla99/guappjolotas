import React from 'react';
import { ButtonAdd, DivButtonAdd } from './Back-Carshop/ButtonsBsStyles';
import { useHistory } from 'react-router';

const ButtonsAddCar = ({ temporalCart }) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const history = useHistory();

  const handleClick = () => {
    let cart = {
      items: [
        {
          ...temporalCart.item,
          quantity: temporalCart.quantity,
          subtotal: temporalCart.item.price * temporalCart.quantity,
        },
      ],
      quantityItems: temporalCart.quantity,
      total: temporalCart.subtotal,
    };

    if (temporalCart.additions.price) {
      cart.items = [
        ...cart.items,
        {
          ...temporalCart.additions,
          quantity: 1,
          subtotal: temporalCart.additions.price,
        },
      ];
      cart.quantityItems += 1;
    }

    //If exist cart at LocalStorage
    if (currentCart) {
      cart.quantityItems += currentCart.quantityItems;
      cart.total += currentCart.total;
      //Foreach from cart in localStorage
      currentCart.items.forEach((item, index, array) => {
        //Foreach from cart new
        cart.items.forEach((element) => {
          if (item.flavor === element.flavor) {
            //If is equal add quantity and subtotal
            element.quantity += item.quantity;
            element.subtotal += item.subtotal;
            //Delete the element from array localStorage
            array.splice(index, 1);
          }
        })
      });
      //Includes to cart the cart in localStorage
      cart.items = [
        ...cart.items,
        ...currentCart.items
      ]
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    history.push('/cart');
  };

  return (
    <DivButtonAdd>
      <ButtonAdd onClick={handleClick}>
        Agregar {temporalCart.quantity} al carrito <div>${temporalCart.subtotal}.00</div>
      </ButtonAdd>
    </DivButtonAdd>
  );
};

export default ButtonsAddCar;
