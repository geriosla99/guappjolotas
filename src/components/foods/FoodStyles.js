import React from 'react'
import styled from 'styled-components';

export const ContainerFood = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    height: 112px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin: 8px 0;
`;

export const ImageFoodMain = styled.img`
    width: 80px;
    height: 80px;
    margin: 0px 16px;
    object-fit: cover;
`;

export const DescriptionFood = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    margin: 0px 16px;
`;

const TextFlavorFood = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #0D0D0D;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const FlavorFood = ( { flavor } ) => <TextFlavorFood> { flavor } </TextFlavorFood>;

const TextPriceFood = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FA4A0C;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const PriceFood = ( { price } ) => <TextPriceFood> { `$${price} MXN` } </TextPriceFood>;