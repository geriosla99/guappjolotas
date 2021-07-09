import styled from "styled-components";

export const ModalDiv = styled.div`
    background-color: #F2F2F2;
    width: 300px;
    height: 400px;
    position: fixed;
    top: calc(50vh - 220px);
    left: calc(50vw - 170px);
    z-index: 100;
    border-radius: 25px;
    padding: 20px;
`;

export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageMain = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin: 16px 0px;
`;

export const Title = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #0D0D0D;
    margin: 8px 0;
`;

export const Subtotal = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FA4A0C;
    margin: 8px 0;
`;

export const BtnUpdate = styled.button`
    background: #FA4A0C;
    border-radius: 40px;
    width: 264px;
    margin: 16px 0px;
    padding: 12px 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #F6F6F9;
    border: none;
    cursor: ${props => props.quantityInitial === props.quantityState ? "auto" : "pointer"};
    opacity: ${props => props.quantityInitial === props.quantityState ? 0.5 : 1};
`;

export const BtnCancel = styled.span`
    cursor: pointer;
    padding: 0px 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #FA4A0C;
`;