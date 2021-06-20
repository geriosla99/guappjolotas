import React, {Component} from 'react';
import Food from '../components/foods/Food'


class Foods extends Component {

    render() {
        return (
            <>
                {
                    this.props.foods.map((food) => {
                        return (
                            <Food 
                                key= {food.id}
                                food= {food}
                            />
                        )
                    })
                }
            </>
        )
    }

}


export default Foods;