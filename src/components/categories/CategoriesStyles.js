import React, { Component } from 'react'
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
`;

export class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.statusCategory
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onCategoryChange(e.target.id);
        this.setState({status: true});
    }

    render() {
        return (
            <CategoryStyle
                id= {this.props.category.id}
                onClick= {this.handleClick}
                status = {this.state.status}
            >{this.props.category.name}</CategoryStyle>
        )
    }

}