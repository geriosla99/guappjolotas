import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import Data from '../db/Data';
import SliderFoods from '../components/SliderFoods';
import Combo from '../components/Combo';

const data = new Data();

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background: #F2F2F2;
    }
`;

class SelectFood extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.match.params.food;
    const categoryId = this.props.match.params.category;
    this.state = {
      categoryId,
      foods: [],
      foodsOppositeCategory: [],
      oppositeCategory: this.getOppositeCategory(categoryId),
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.getFoods();
  }

  getFoods = async () => {
    const listFoods = await data.getFoodsByCategory(this.state.categoryId);
    const listFoodsOppositeCategory = await data.getFoodsByCategory(this.state.oppositeCategory);
    this.setState({ foods: listFoods, foodsOppositeCategory: listFoodsOppositeCategory });
    console.log('Listas opuestas:', listFoodsOppositeCategory);
  };

  getOppositeCategory = (categoryId) => {
    const oppositeCategories = {
      1: 2,
      2: 1,
      3: 2,
    };
    return oppositeCategories[categoryId];
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <SliderFoods foods={this.state.foods} />

        <Combo food={this.state.foodsOppositeCategory} />
      </>
    );
  }
}

export default withRouter(SelectFood);
