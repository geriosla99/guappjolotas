import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import Data from '../db/Data';
import SliderFoods from '../components/SliderFoods';
import Combo from '../components/Combo';
import Flavors from "../components/Flavors";
import ButtonsAddCar from '../components/ButtonAddCar';
import ButtonsBS from '../components/ButtonsBS';

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
         foodComboCategory: [],
         comboCategory: this.getComboCategory(categoryId),
         temporalCart: {}
      };
   }

   componentDidMount() {
      this.getFoods().then(() => {
         const food = this.state.foods[0];
         const value = {
            item: food,
            quantity: 1,
            subtotal: 1 * food.price,
            additions: {},
         }
         this.setState({ temporalCart: value });
      })
   }

   //Function for order array
   moveArray(array, old_index, new_index) {
      if (new_index >= array.length) {
         let k = new_index - array.length;
         while ((k--) + 1) {
            array.push(undefined);
         }
      }
      array.splice(new_index, 0, array.splice(old_index, 1)[0]);
      return array;
   };

   getFoods = async () => {
      const listFoods = await data.getFoodsByCategory(this.state.categoryId);
      const listfoodComboCategory = await data.getFoodsByCategory(this.state.comboCategory);

      //Order array for selected food first
      const [foodElement] = await listFoods.filter((food) => food.flavor === this.food);
      const index = await listFoods.indexOf(foodElement);
      await this.moveArray(listFoods, index, 0);

      this.setState({ foods: listFoods, foodComboCategory: listfoodComboCategory })
   };

   getComboCategory = (categoryId) => {
      const comboCategories = {
         1: 2,
         2: 1,
         3: 2,
      };
      return comboCategories[categoryId];
   };

   getComboSelected = (param) => {
      let additionPrice = this.state.temporalCart.additions.price ? this.state.temporalCart.additions.price : 0;
      const subtotalEmpty = this.state.temporalCart.subtotal - additionPrice;
      this.setState({
         temporalCart: {
            ...this.state.temporalCart, additions: param,
            subtotal: Object.keys(param).length === 0 ? subtotalEmpty : subtotalEmpty + param.price
         }
      })
   }
   setTemporalCart = (value) => {
      this.setState({ temporalCart: { ...this.state.temporalCart, item: value.item } });
   }

   setQuantityTemporalCart = (quantity) => {
      this.setState({ temporalCart: { ...this.state.temporalCart, quantity: quantity } });
   }


   setTemporalCartFlavor = (value) => {
      this.setState({ temporalCart: { ...this.state.temporalCart, item: value.item } });
      const listFoods = this.state.foods;
      const index = listFoods.indexOf(value.item);
      const newArray = this.moveArray(listFoods, index, 0);
      this.setState({ foods: newArray });
   }

   setQuantityTemporalCart = (quantity) => {
      let itemPrice = this.state.temporalCart.item.price ? this.state.temporalCart.item.price : 0;
      this.setState({ temporalCart: { ...this.state.temporalCart, quantity: quantity, subtotal: itemPrice * quantity } });
   }


   render() {
      const foodComboCategory = this.state.foodComboCategory;
      const isLoaded = foodComboCategory.length > 0;
      const flavorsLoaded = this.state.foods.length > 0;
      return (
         <>
            <ButtonsBS />
            <GlobalStyle />
            <SliderFoods
               foods={this.state.foods}
               temporalCart={this.state.temporalCart}
               setTemporalCart={this.setTemporalCart}
               setQuantityTemporalCart={this.setQuantityTemporalCart}
            />
            <Flavors
               foods={this.state.foods}
               selectFood={this.food}
               isLoaded={flavorsLoaded}
               temporalCart={this.state.temporalCart}
               setTemporalCartFlavor={this.setTemporalCartFlavor}
            />
            {!isLoaded && (
               <span>Cargando...</span>
            )}
            {isLoaded &&
               <Combo
                  food={foodComboCategory}
                  isLoaded={isLoaded}
                  handler={this.getComboSelected} />
            }
            <ButtonsAddCar temporalCart={this.state.temporalCart}/>
         </>
      )
   }
}

export default withRouter(SelectFood);
