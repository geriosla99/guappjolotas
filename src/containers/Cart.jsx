import React from 'react'
import { createGlobalStyle } from 'styled-components';

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
            <h1>Soy el carrito</h1>
        </>
    )
}

export default Cart
