import React from 'react';
import ItemCart from './ItemCart';
import { Container, Total, Text, PriceTotal, DeleteIcon } from './list-items-cart/ListItemsCartStyles';

const ListItemsCart = ({setShowModal, setDatamodal, setActive, cartState, setCartState}) => {
    const handleClick = () =>{
        localStorage.removeItem('cart');
        setActive(false);
    }
    return (
        <>
        <Container>
            {
            cartState.items.map((item, index) => (
                <ItemCart 
                    key= {index}
                    item= {item}
                    setShowModal= {setShowModal}
                    setDatamodal = {setDatamodal}
                    setCartState = {setCartState}
                    setActive = {setActive}
                />
            ))
            }
            <Total>
                <Text>Total</Text>
                <PriceTotal>{`$${cartState.total} MXN`}
                    <DeleteIcon onClick={handleClick} className="bi bi-trash"></DeleteIcon>
                </PriceTotal>
            </Total>
        </Container>
        </>
    )
}

export default ListItemsCart
