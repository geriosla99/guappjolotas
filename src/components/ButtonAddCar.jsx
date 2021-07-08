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

    if (currentCart) {
      cart.quantityItems += currentCart.quantityItems;
      cart.total += currentCart.total;
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
