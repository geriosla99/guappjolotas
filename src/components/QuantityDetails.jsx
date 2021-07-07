import React from 'react';
import { Container, MinusImage, PlusImage, Quantity } from './quantity-details/QuantityStyles';

const QuantityDetails = ({quantity, handleQuantity}) => {

    const handleClick = (operation) => {
        handleQuantity(operation);
    }

    return (
        <Container>
            <MinusImage 
                src="https://i.imgur.com/wOg4Q1N.png"
                onClick={() => {handleClick('minus')}}
                quantity={quantity}
            />
            <Quantity>{quantity}</Quantity>
            <PlusImage 
                src="https://i.imgur.com/nOLWgi7.png"
                onClick={() => {handleClick('plus')}}
            />
        </Container>
    )
}

export default QuantityDetails
