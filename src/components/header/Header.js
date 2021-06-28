import styled from 'styled-components'

export const Logopages = styled.img`
    width: 62.81px;
    height: 54.18px;
`;

export const TextPages = styled.h1`
    font-weight: bold;
    font-size: 34px;
    @media (min-width: 500px) {
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  } 
`;

export const ShoppingCar = styled.img`
    width: 24px;
    height: 24px;
    @media (min-width: 768px) {
    width: 80px;
    height: auto;
  } 
`;

export const TopImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  } 
`;
