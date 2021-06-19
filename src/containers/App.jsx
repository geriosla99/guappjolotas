import React from 'react';
import { createGlobalStyle } from "styled-components";
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Foods from '../components/Foods';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background: #F2F2F2;
    }
    
`;

const App = () => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Search />
            <Categories />
            <Foods />
        </>
    );

}

export default App;