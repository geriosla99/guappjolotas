import React, { Component } from 'react'
import { ButtonAdd, DivButtonAdd} from './Back-Carshop/ButtonsBsStyles'

class ButtonsAddCar extends Component {

   render() {
      return (
         <DivButtonAdd>
            <ButtonAdd>agregar {} al carrito </ButtonAdd>
         </DivButtonAdd>
      )
   }
}

export default ButtonsAddCar