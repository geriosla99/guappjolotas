import React, {Component} from 'react';
import Food from '../components/foods/Food'


class Foods extends Component {

    render() {
        if (this.props.visible || this.props.foodVisible) {
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
        }else {
            return(null)
        }
    }

}


export default Foods;