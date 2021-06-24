import React from 'react'
import styled from 'styled-components';

const textColorSelected = "#FA4A0C";
const textColor = "#9A9A9D"

export const CategoryStyle = styled.span`
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 21px;

text-align: center;
margin-right: 10px;
color: ${props => props.status ? textColorSelected : textColor};
&:hover{
    cursor: pointer;
}
`