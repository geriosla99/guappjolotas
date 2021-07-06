// import './Flavor/flavor.css'
import React, { useState} from 'react'
import SingleFlavor from "./Flavor/SingleFlavor";
import {FlavorContainer, FlavorTitle} from "./Flavor/Flavor";

const Flavors = ({foods, selectFood, isLoaded}) => {
    
    let initialState= Array.from(foods, item => 
        { return { flavor: item.flavor, isSelected: false } } );
        initialState.forEach(element => {
            element.isSelected = element.flavor === selectFood ? true : false;
        });


    const [selectedFlavor, setSelectedFlavor] = useState(initialState);
        //validacion para que mi estado no este vacio
        if (isLoaded && selectedFlavor.length === 0) {
            setSelectedFlavor(initialState);
          }

    const handleClick = (e) => {
        const { id } = e.target;
        const items = Array.from(selectedFlavor);
    for (const item of items) {
      item.isSelected = item.flavor === id ? true : false;
    }
    setSelectedFlavor(items);
    }      

    const checkIfSelected = (flavor) => {
        for (const item of selectedFlavor) {
          if (item.flavor === flavor) {
            return item.isSelected;
          }
        }
        return false;
      }

    return (
        <>
            <FlavorTitle>Sabor</FlavorTitle>
            <FlavorContainer>
            {foods && foods.length > 0 && foods.map(element => 
            {const selected = element.flavor === selectFood ? true:false
                return (<SingleFlavor key={element.flavor} 
                img={element.image_flavor} 
                flavor={element.flavor} selected={checkIfSelected(element.flavor)} onClick={handleClick}/>)
            } 
            
            )}
            </FlavorContainer>
        </>
    )
}

export default Flavors



//     export default class Flavor extends Component {

//         constructor(props){
//             super(props);
//             this.state={
//                 flavor:[]
//             }
//         }

//     handleClick(){
//         console.log('estamos intentando conseguir los flavors')
//     }
    
//     render() {
//         return (
//             <div className="content">
//                 <div onClick={this.handleClick} className="Flavor-position verde">verde</div>
//                 <div onClick={this.handleClick} className="Flavor-position mole">mole</div>
//                 <div onClick={this.handleClick} className="Flavor-position raja">raja</div>
//                 <div onClick={this.handleClick} className="Flavor-position piña">piña</div>
//                 <div onClick={this.handleClick} className="Flavor-position pasas">pasas</div>
//                 <div onClick={this.handleClick} className="Flavor-position guayaba">guayaba</div>
//             </div>
//         )
//     }
// }
