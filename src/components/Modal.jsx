import React, { useState } from 'react';
import { ModalDiv, ContainerModal, ImageMain, Title, Subtotal, BtnUpdate, BtnCancel } from "./modal/ModalStyles";
import QuantityDetails from './QuantityDetails';

const Modal = ({value, setShowModal, setCartState}) => {

    const [quantity, setQuantity] = useState(value.quantity);

    const handleQuantity = (operation) => {
        if (operation === "plus") {
            setQuantity(quantity + 1);
        }else if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const cart = JSON.parse(localStorage.getItem('cart'));

    const handleUpdate = () => {
        //Only execut when quantity is changed
        if(quantity !== value.quantity) {
            //Update quantity and subtotal of item
            let quantityItems = 0;
            let total = 0;
            cart.items.forEach(element => {
                if (element.flavor === value.flavor) {
                    element.quantity = quantity;
                    element.subtotal = quantity * element.price;
                }
                quantityItems += element.quantity;
                total += element.subtotal;
            });
            //Update QuantityItems and Total of Cart
            cart.quantityItems = quantityItems;
            cart.total = total;
            //Save at localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            setCartState(cart);
            //Close Modal
            setShowModal(false);
        }
    }

    return (
        <ModalDiv>
            <ContainerModal>
                <ImageMain 
                    src= {value.image_main}
                    alt= {value.flavor}
                />
                <Title>{value.flavor}</Title>
                <Subtotal>${value.subtotal} MXN</Subtotal>
                <QuantityDetails 
                    quantity={quantity}
                    handleQuantity={handleQuantity}
                />
                <BtnUpdate
                    quantityInitial = {value.quantity}
                    quantityState = {quantity}
                    onClick = {handleUpdate}
                >Actualizar</BtnUpdate>
                <BtnCancel
                    onClick={() => {setShowModal(false)}}
                >Cerrar</BtnCancel>
                </ContainerModal>
        </ModalDiv>
    )
}

export default Modal
