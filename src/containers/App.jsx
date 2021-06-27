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
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  async getFoods() {
    const listFoods = await data.getFoodsByCategory(this.state.categoryId);
    this.setState({ foods: listFoods });
  }

  async getCategories() {
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

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <SearchBar />
        <Categories onCategoryChange={this.handleCategoryChange} categories={this.state.categories} />
        <Foods foods={this.state.foods} />
      </>
    );
  }
}

export default App;
