//import React, { Component } from 'react'
import styled from 'styled-components';

const textColorSelected = "#FA4A0C";
const textColor = "#9A9A9D";
const textDecoration = `underline solid ${textColorSelected} 3px`

export const CategoryStyle = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    
    text-decoration: ${props => props.status ? textDecoration : "none"};
    text-underline-position: under;

    text-align: center;
    margin-right: 10px;
    color: ${props => props.status ? textColorSelected : textColor};
    &:hover{
        cursor: pointer;
}
`;

export const Container = styled.div`
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    max-width: 500px;
`;