import React, { useEffect, useState } from 'react';
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
const SelectFood = (props) =>{
   console.log(props);
   const categoryId = props.match.params.category;
   const food = props.match.params.food;
   const getComboCategory = (categoryId) => {
      const comboCategories = {
         1: 2,
         2: 1,
         3: 2,
      };
      return comboCategories[categoryId];
   };

   const comboCategory = getComboCategory(categoryId);

   const [foods, setFoods] = useState([]);
   const [foodComboCategory, setFoodComboCategory] = useState([]);
   const [temporalCart, setTemporalCart] = useState({});

   const moveArray = (array, old_index, new_index) => {
      if (new_index >= array.length) {
         let k = new_index - array.length;
         while ((k--) + 1) {
            array.push(undefined);
         }
      }
      array.splice(new_index, 0, array.splice(old_index, 1)[0]);
      return array;
   };

   const getFoods = async () => {
      const listFoods = await data.getFoodsByCategory(categoryId);
      const listfoodComboCategory = await data.getFoodsByCategory(comboCategory);

      //Order array for selected food first
      const [foodElement] = await listFoods.filter((element) => element.flavor === food);
      const index = await listFoods.indexOf(foodElement);
      await moveArray(listFoods, index, 0);
      setFoods(listFoods);
      setFoodComboCategory(listfoodComboCategory);
      return listFoods;
   };

   useEffect(() => {
      getFoods().then((listFoods) => {
         const foodElement = listFoods[0];
         const value = {
            item: foodElement,
            quantity: 1,
            subtotal: 1 * foodElement.price,
            additions: {},
         }
         setTemporalCart(value);
      })
   }, [])

   const getComboSelected = (param) => {
      let additionPrice = temporalCart.additions.price ? temporalCart.additions.price : 0;
      const subtotalEmpty = temporalCart.subtotal - additionPrice;
      setTemporalCart({
            ...temporalCart, 
            additions: param,
            subtotal: Object.keys(param).length === 0 ? subtotalEmpty : subtotalEmpty + param.price
         }
      )
   }

   const settingTemporalCart = (value) => {
      setTemporalCart({ 
         ...temporalCart, 
         item: value.item 
      });
   }

   const setQuantityTemporalCart = (quantity) => {
      setTemporalCart({ 
         ...temporalCart, 
         quantity: quantity 
      });
   }

   const setTemporalCartFlavor = (value) => {
      setTemporalCart({ 
         ...temporalCart, 
         item: value.item 
      });

      const listFoods = foods;
      const index = listFoods.indexOf(value.item);
      const newArray = moveArray(listFoods, index, 0);
      setFoods(newArray);
   }

   const isLoaded = foodComboCategory.length > 0;
   const flavorsLoaded = foods.length > 0;
   return (
      <>
         <ButtonsBS />
         <GlobalStyle />
         <SliderFoods
            foods={foods}
            temporalCart={temporalCart}
            setTemporalCart={settingTemporalCart}
            setQuantityTemporalCart={setQuantityTemporalCart}
         />
         <Flavors
            foods={foods}
            selectFood={food}
            isLoaded={flavorsLoaded}
            temporalCart={temporalCart}
            setTemporalCartFlavor={setTemporalCartFlavor}
         />
         {!isLoaded && (
            <span>Cargando...</span>
         )}
         {isLoaded &&
            <Combo
               food={foodComboCategory}
               isLoaded={isLoaded}
               handler={getComboSelected} />
         }
         <ButtonsAddCar temporalCart={temporalCart}/>
      </>
   )
}
export default SelectFood;