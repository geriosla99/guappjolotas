import React, { Component } from "react";
import { SearchBarContainer, SearchInput, SearchIcon, BtnCancel, SearchGroupContainer } from "./search-bar/searchBarStyles";
import SearchEmpty from "./SearchEmpty";

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.changeValue(e.target.value);
    this.props.searchFood();
  };

  handleClick = () => {
    this.props.changeVisible(false);
  };

  render() {
    return (
      <>
        <SearchGroupContainer>
          <SearchBarContainer status={this.props.visible}>
            <SearchIcon src="https://i.imgur.com/tB9uhDh.png" alt="Icono de búsqueda" />
            <SearchInput onChange={this.handleChange} onClick={this.handleClick} value={this.props.valueSearch} type="text" placeholder="Sabor de guajolota, bebida..." />
          </SearchBarContainer>
          {this.props.visible === false && <BtnCancel onClick={() => this.props.changeVisible(true)}>Cancelar</BtnCancel>}
        </SearchGroupContainer>

        {this.props.visible === false && this.props.visibleMagnify === true ? 
        <SearchEmpty image="https://i.imgur.com/aGCaGFj.png" alt="Búsqueda" text={this.props.textSearch} /> : ""}
      </>
    );
  }
}

export default SearchBar;
