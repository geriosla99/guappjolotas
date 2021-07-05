import React, { Component } from 'react'
import './Flavor/flavor.css'
import Data from "../db/Data.js";

    const data = new Data();
    console.log(data);

    export default class Flavor extends Component {

        constructor(props){
            super(props);
            this.state={
                flavor:[]
            }
        }

    handleClick(){
        console.log('estamos intentando conseguir los flavors')
    }

    componentDidMount() {
        this.getFoods();
    }

    getFoods = async () =>{
        const findFlavor = await data.getFoods(this.state.URI);
        console.log(findFlavor);
        const getFlavor = this.props.findFlavor
        console.log(getFlavor);
    }

    
    render() {
        return (
            <div className="content">
                <div onClick={this.handleClick} className="Flavor-position verde">verde</div>
                <div onClick={this.handleClick} className="Flavor-position mole">mole</div>
                <div onClick={this.handleClick} className="Flavor-position raja">raja</div>
                <div onClick={this.handleClick} className="Flavor-position piña">piña</div>
                <div onClick={this.handleClick} className="Flavor-position pasas">pasas</div>
                <div onClick={this.handleClick} className="Flavor-position guayaba">guayaba</div>
            </div>
        )
    }
}
