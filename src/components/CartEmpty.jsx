import React from 'react'
import {ButtonBack, ShoppingCart, TitleCar, HeadCart, BodyCar, ButtonPay, DivButtonPay} from '../components/CartEmpty/CartEmpty';
import { useHistory } from "react-router-dom";

const CartEmpty = () => {

    const history = useHistory();
    const handleClick = (e) => {
       history.goBack()
       console.log('estoy devolviendome')
    }

    return (
        <>
            <HeadCart>
                <ButtonBack src="https://i.imgur.com/usmRDrf.png" alt="" onClick={handleClick}/>
                <TitleCar>Carrito</TitleCar>
            </HeadCart>
            <BodyCar>
                <ShoppingCart src="https://i.imgur.com/MhBGa2K.png" alt="" />
            </BodyCar>
            <ButtonPay>
                <DivButtonPay>
                        <p>Pagar</p>
                </DivButtonPay>
            </ButtonPay>
        </>
    )
}

export default CartEmpty
