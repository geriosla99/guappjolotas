import React, {Component} from 'react';


class Categories extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onCategoryChange(e.target.id);
    }

    render() {
        return (
            <>
                <h1
                    id={1}
                    onClick= {this.handleClick}
                >Guajolotas</h1>
                <h1
                    id={2}
                    onClick= {this.handleClick}
                >Bebidas</h1>
                <h1
                    id={3}
                    onClick= {this.handleClick}
                >Tamales</h1>
            </>
        )
    }

}

export default Categories;