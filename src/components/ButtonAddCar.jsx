import React from 'react'
import { ButtonAdd, DivButtonAdd } from './Back-Carshop/ButtonsBsStyles'
import { useHistory } from 'react-router';

const ButtonsAddCar = ({ temporalCart }) => {

   const currentCart = JSON.parse(localStorage.getItem('cart'));
   
   const history = useHistory();

   const handleClick = () => {

      let cart = {}
      if (temporalCart.additions.price) {
         cart = {
            items: [
               temporalCart.item,
               temporalCart.additions
            ]
         }
         cart.items[1].quantity = 1
         cart.items[1].subtotal = temporalCart.additions.price
         cart.items[0].quantity = temporalCart.quantity
         cart.items[0].subtotal = temporalCart.item.price * temporalCart.quantity

      } else {
         cart = {
            items: [
               temporalCart.item
            ]
         }
         cart.items[0].quantity = temporalCart.quantity
         cart.items[0].subtotal = temporalCart.item.price * temporalCart.quantity
      }
      cart.total = currentCart ? currentCart.total + temporalCart.subtotal : temporalCart.subtotal;
      if (currentCart) {
         cart.quantityItems = currentCart.quantityItems + temporalCart.additions.price ? temporalCart.quantity + 1 : temporalCart.quantity;
      } else {
        cart.quantityItems = temporalCart.additions.price ? temporalCart.quantity + 1 : temporalCart.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      history.push('/cart')
   }

   return (
      <DivButtonAdd >
         <ButtonAdd onClick={handleClick}>Agregar {temporalCart.quantity} al carrito  <div>${temporalCart.subtotal}.00</div>
         </ButtonAdd>
      </DivButtonAdd>
   )

}

export default ButtonsAddCar