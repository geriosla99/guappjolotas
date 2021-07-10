import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import SearchEmpty from "../components/SearchEmpty";
import { ButtonBack, TitleCar, HeadCart, ButtonPay, DivButtonPay, ContainerButton, Container } from '../components/CartEmpty/CartEmpty';
import { useHistory, Link } from "react-router-dom";
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
   const [cartState, setCartState] = useState(cartLocal);
   let value = cartLocal ? true : false;

   useEffect(() => {
      setActive(value)
   }, [])

   const history = useHistory();
   const handleClick = (e) => {
      history.goBack();
   }

   return (
      <>
         <GlobalStyle showModal={showModal} />
         <Container
            showModal={showModal}
         >
            <HeadCart>
               <ButtonBack src="https://i.imgur.com/usmRDrf.png" alt="" onClick={handleClick} />
               <TitleCar>Carrito</TitleCar>
            </HeadCart>
            {!active ? <SearchEmpty
               image="https://i.imgur.com/SjPSRoQ.png"
               alt="Carrito"
               text="No hay productos"
            />
               :
               <ListItemsCart
                  setShowModal={setShowModal}
                  setDatamodal={setDatamodal}
                  setActive={setActive}
                  cartState={cartState}
                  setCartState={setCartState}
               />
            }


            <ContainerButton>
               <Link to={{ pathname : '/signup', actionPay:true}} style={{textDecoration:'none'}}>
                  <ButtonPay
                     active={active}
                  >
                     <DivButtonPay>
                        <span>Pagar</span>
                     </DivButtonPay>
                  </ButtonPay>
               </Link>
            </ContainerButton>
         </Container>
         {
            showModal ? <Modal value={dataModal} setShowModal={setShowModal} /> : null
         }
      </>
   )
}

export default Cart
