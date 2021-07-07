import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 190px;
    height: 72px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin: 0 auto;
`;

export const MinusImage = styled.img`
    margin: 0;
    opacity: ${props => props.quantity <= 1 ? 0.5 : 1 };
    &:hover {
        cursor: pointer;
    }
`;

export const PlusImage = styled.img`
    margin: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const Quantity = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #0D0D0D;
`;