import React from 'react'
import { OpacityFlavor } from "./Flavor";
const SingleFlavor = ({img, flavor, selected,onClick}) => {
    return (  
            <OpacityFlavor onClick={onClick} id={flavor} selected={selected} src={img} alt={flavor} />
    )
}

export default SingleFlavor
