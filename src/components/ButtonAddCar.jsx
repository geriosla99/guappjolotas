import React from 'react'
import { ButtonAdd, DivButtonAdd } from './Back-Carshop/ButtonsBsStyles'

const ButtonsAddCar = ({temporalCart}) => {

   

   return (
      <DivButtonAdd>
         <ButtonAdd>Agregar {temporalCart.quantity} al carrito  <div>${temporalCart.subtotal}.00</div> 
         </ButtonAdd>
      </DivButtonAdd>
   )

}

export default ButtonsAddCar