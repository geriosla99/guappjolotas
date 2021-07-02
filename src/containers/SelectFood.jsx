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
    this.state = {
      categoryId: this.props.match.params.category,
      foods: [],
    };
  }

  componentDidMount() {
    this.getFoods();
  }

  getFoods = async () => {
    const listFoods = await data.getFoodsByCategory(this.state.categoryId);
    this.setState({ foods: listFoods });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <SliderFoods foods={this.state.foods} />

        <Combo />
      </>
    );
  }
}

export default withRouter(SelectFood);
