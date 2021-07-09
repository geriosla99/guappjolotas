import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import SearchEmpty from "../components/SearchEmpty";
import {ButtonBack, TitleCar, HeadCart, ButtonPay, DivButtonPay, ContainerButton, Container} from '../components/CartEmpty/CartEmpty';
import { useHistory } from "react-router-dom";
import ListItemsCart from '../components/ListItemsCart';
import Modal from "../components/Modal"

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background-color: ${props => props.showModal ? "rgba(0,0,0,0.5)" : "#F2F2F2"};
    }
`;

const Cart = () => {

    const [active, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDatamodal] = useState({});

    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    let value = cartLocal ? true : false;

    useEffect(() => {
        setActive(value)
    }, [])

    const history = useHistory();
    const handleClick = (e) => {
       history.goBack()
       console.log('estoy devolviendome')
    }

    return (
        <>
            <GlobalStyle showModal= {showModal} />
            <Container 
                showModal= {showModal}
            >
                <HeadCart>
                    <ButtonBack src="https://i.imgur.com/usmRDrf.png" alt="" onClick={handleClick}/>
                    <TitleCar>Carrito</TitleCar>
                </HeadCart>
                {!active ? <SearchEmpty
                    image= "https://i.imgur.com/SjPSRoQ.png"
                    alt= "Carrito"
                    text="No hay productos"
                />
                :
                <ListItemsCart 
                    cart = {cartLocal}
                    setShowModal= {setShowModal}
                    setDatamodal = {setDatamodal}
                />
                }

                <ContainerButton>
                <ButtonPay
                    active= {active}
                >
                    <DivButtonPay>
                            <span>Pagar</span>
                    </DivButtonPay>
                </ButtonPay>
                </ContainerButton>
            </Container>
            {
            showModal ? <Modal value = {dataModal} setShowModal={setShowModal} />: null
            }
        </>
    )
}

export default Cart
