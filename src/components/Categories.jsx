import React, {Component} from 'react';
import {Category} from './categories/CategoriesStyles'

class Categories extends Component {

    render() {
        return (
            <div> 
                {
                    this.props.categories.map((category,index) => {
                    return (
                        <Category
                        key = {index}
                        category={category}
                        onCategoryChange= {this.props.onCategoryChange}
                        statusCategory = {this.props.statusCategory}
                        ></Category>                   
                    )                 
                    })
                }
            </div>
        )
    }    
}

export default Categories;