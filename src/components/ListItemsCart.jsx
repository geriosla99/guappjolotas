import React from 'react';
import ItemCart from './ItemCart';
import { Container, Total, Text, PriceTotal } from './list-items-cart/ListItemsCartStyles';

const ListItemsCart = ({cart, setShowModal, setDatamodal}) => {
    return (
        <>
        <Container>
            {
            cart.items.map((item, index) => (
                <ItemCart 
                    key= {index}
                    item= {item}
                    setShowModal= {setShowModal}
                    setDatamodal = {setDatamodal}
                />
            ))
            }
            <Total>
                <Text>Total</Text>
                <PriceTotal>{`$${cart.total} MXN`}</PriceTotal>
            </Total>
        </Container>
        </>
    )
}

export default ListItemsCart
