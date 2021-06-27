import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Foods from "../components/Foods";
import Data from "../db/Data";

const data = new Data();

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background: #F2F2F2;
    }
    
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: 1,
      foods: [],
      categories: [],
      visible: true,
      foodVisible: false,
      valueSearch: "",
      textSearch: "Realiza una búsqueda",
      visibleMagnify: false
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  getFoods = async () => {
    const listFoods = await data.getFoodsByCategory(this.state.categoryId);
    this.setState({ foods: listFoods });
  }

  getCategories = async () => {
    const listCategories = await data.getCategories();
    this.setState({ categories: listCategories });
  }

  componentDidMount() {
    this.getFoods();
    this.getCategories();
  }

  async handleCategoryChange(categoryId) {
    //Wait until set State
    this.setState({ categoryId: categoryId }, () => {
      this.getFoods();
    });
  }

  changeVisible = (status) => {
    this.setState({
      visible: status,
      foodVisible: status,
      categoryId: 1,
      valueSearch: "",
      textSearch: "Realiza una búsqueda",
      visibleMagnify: true
    }, () => {
      this.getFoods();
    })
  }

  changeValue = (value) => {
    this.setState({valueSearch: value})
  }

  searchFood = async () => {
    const listFoods = await data.getFoods();
    const filter = listFoods.filter((food) => food.flavor.toLowerCase().includes(this.state.valueSearch.toLowerCase()))
    this.setState({foods: filter, foodVisible: true}, () => {
      if(this.state.foods.length === 0) {
        this.setState({textSearch: "No hay Resultados"})
        this.setState({visibleMagnify: true})
      }else {
        this.setState({visibleMagnify: false})
      }
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header 
          visible={this.state.visible}
        />
        <SearchBar
          visible={this.state.visible}
          changeVisible = {this.changeVisible}
          searchFood = {this.searchFood}
          valueSearch = {this.state.valueSearch}
          changeValue = {this.changeValue}
          textSearch = {this.state.textSearch}
          visibleMagnify = {this.state.visibleMagnify}
        />
        <Categories 
          visible={this.state.visible}
          onCategoryChange={this.handleCategoryChange} 
          categories={this.state.categories} 
        />
        <Foods 
          foodVisible = {this.state.foodVisible}
          visible={this.state.visible}
          foods={this.state.foods} 
        />
      </>
    );
  }
}

export default App;
