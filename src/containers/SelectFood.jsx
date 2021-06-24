import React, {Component} from 'react';
import { withRouter } from "react-router";

class SelectFood extends Component {

    constructor(props){
        super(props);
        this.category = this.props.match.params.category;
        this.food = this.props.match.params.food;
    }
    
    render() {
        return (
            <>
            <h1>Categoria: {this.category}</h1>
            <h1>Comida: {this.food}</h1>
            </>
        )
    }

}

export default withRouter(SelectFood);