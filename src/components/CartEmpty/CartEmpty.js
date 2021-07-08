import styled from "styled-components";

export const ButtonBack = styled.img`
    display: flex;
    cursor: pointer;
`;

export const ShoppingCart = styled.img`
    opacity:0.5;
    width: 120px;
    height: 120px;
`;

export const HeadCart = styled.div`
    display: flex;
`;

export const TitleCar = styled.h2`
     text-align: center;
     margin: 0 auto;
`;

export const BodyCar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 103px);
`;

export const ButtonPay = styled.div`
    background: #FA4A0C;
    opacity: 0.5;
    border-radius: 50px;
    width: 312px;
    padding: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
   &:hover{
      cursor: pointer;
   }
`

export const DivButtonPay = styled.div`
    color: #F6F6F9;;
    display: flex;
    font-size: 17px;
    justify-content: center;
`;