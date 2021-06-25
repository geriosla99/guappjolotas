import React from 'react';
import header from './header/header.css';

const Header = () => {
    return (
        <div>
            <span className="TopImages">
                <img className="Logopages" src="https://i.imgur.com/7me5AZ2.png" alt="Logo de guappjolotas" />
                <img className="ShoppingCar" src="https://i.imgur.com/TeEyXRv.png" alt="carrito" />
            </span>
                 <h1 className="TextPages">Nada como una 
                    Guajolota para 
                    empezar el día</h1>
        </div>
        
    )
}

export default Header;