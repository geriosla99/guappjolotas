import React, {Component} from 'react';
import {CategoryStyle} from './categories/CategoriesStyles'

class Categories extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            categoryStatus: false
        }
    }

    handleClick(e) {
        this.props.onCategoryChange(e.target.id);
        let status = this.state.categoryStatus;
        this.setState({categoryStatus: !status});
    }

    render() {
        console.log(this.categories);
        return (
            <div> 
                {
                    this.props.categories.map((category,index) => {
                    return (
                        <CategoryStyle
                        key = {index}
                        id={category.id}
                        onClick= {this.handleClick}
                        status = {this.state.categoryStatus}
                        >{category.name}</CategoryStyle>                   
                    )                 
                    })
                }
            </div>
        )
    }    
}

export default Categories;