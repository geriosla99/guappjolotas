import React from "react";
import { ContainerSearchBar, SearchInput, SearchIcon } from "./search-bar/searchBarStyles";

const SearchBar = () => {
  return (
    <ContainerSearchBar>
      <SearchIcon src="https://i.imgur.com/tB9uhDh.png" alt="Icono de búsqueda" />
      <SearchInput type="text" placeholder="Sabor de guajolota, bebida..." />
    </ContainerSearchBar>
  );
};

export default SearchBar;
