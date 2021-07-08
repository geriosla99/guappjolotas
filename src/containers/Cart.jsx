import React from 'react'
import { createGlobalStyle } from 'styled-components';
import CartEmpty from "../components/CartEmpty";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background: #F2F2F2;
    }
`;

const Cart = () => {
    return (
        <>
            <GlobalStyle />
            <CartEmpty/>
        </>
    )
}

export default Cart
