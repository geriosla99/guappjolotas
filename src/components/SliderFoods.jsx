import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';

class SliderFoods extends Component {

    render() {

        this.slide = [];
        this.props.foods.forEach((food) => {
            let image = <img src={food.image_main} alt={food.flavor} />
            this.slide.push(image);
        })

        return (
            <Carousel slides={this.slide} autoplay={false} />
        )
    }

}

export default SliderFoods;