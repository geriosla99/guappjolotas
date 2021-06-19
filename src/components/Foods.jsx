import React, {Component} from 'react';
import Data from '../db/Data';
import Food from '../components/foods/Food'

const data = new Data();


class Foods extends Component {

    constructor() {
        super();
        this.state = {
            foods: [],
            categoryId: 1
        }
    }

    componentDidMount() {
        const getData = async () => {
            const listFoods = await data.getFoodsByCategory(this.state.categoryId);
            this.setState({ foods: listFoods })
        }
        getData();
    }


    render() {
        return (
            <>
                {
                    this.state.foods.map((food) => {
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