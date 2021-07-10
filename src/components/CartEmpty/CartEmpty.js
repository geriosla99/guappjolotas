import styled from "styled-components";

export const Container = styled.div`
    opacity: ${props => props.showModal ? 0.3 : 1};
`;

export const ButtonBack = styled.img`
    display: flex;
    cursor: pointer;
    width: 24px;
    height: 24px;
`;

export const ShoppingCart = styled.img`
    opacity:0.5;
    width: 146px;
    height: 152,99px;
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
    opacity: ${props => props.active ? 1 : 0.5};
    border-radius: 50px;
    width: 312px;
    padding: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-shrink: 1;
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

export const ContainerButton = styled.div`
    width: calc(100vw - 40px);
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;