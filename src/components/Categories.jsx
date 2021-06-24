import React, {Component} from 'react';
import {CategoryStyle} from './categories/CategoriesStyles'

class Categories extends Component {

    constructor(props) {
        super(props);
        let status = {};
        this.props.categories.forEach((category) => {
            status[`category_status_${category.id}`] = false
        })
        this.state = status;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //Change category 
        this.props.onCategoryChange(e.target.id);
        //Delete status others
        let status = {}
        this.props.categories.forEach((category) => {
            status[`category_status_${category.id}`] = false
        })
        this.setState(status);
        //Set true status now
        this.setState({
            [`category_status_${e.target.id}`]: true
        })
    }

    render() {
        
        return (
            <div> 
                {
                    this.props.categories.map((category,index) => {
                    return (
                        <CategoryStyle
                        key = {index}
                        id = {category.id}
                        onClick = {this.handleClick}
                        status = {this.state[`category_status_${category.id}`]}
                        >{category.name}</CategoryStyle>                   
                    )                 
                    })
                }
            </div>
        )
    }    
}

export default Categories;