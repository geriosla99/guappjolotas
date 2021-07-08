import React from 'react'
import { DivBackCar, HoverButtons } from './Back-Carshop/ButtonsBsStyles'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ButtonsBS = (props) => {

   
   const history = useHistory();
   const handleClick = (e) => {
      history.goBack()
   }


   return (
      <DivBackCar>
         <HoverButtons src="https://i.imgur.com/usmRDrf.png" alt="back" onClick={handleClick} />
         <Link to="/cart"><HoverButtons src="https://i.imgur.com/zZXfVr5.png" alt="car-shop" /></Link>
      </DivBackCar>
   )

}

export default ButtonsBS