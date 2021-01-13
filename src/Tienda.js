import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import "./App.css";

const App = () => {
 

  const [catalogo, setCatalogo] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    getRecipes();
  }, [producto]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://node-red-nxdup.mybluemix.net/productos/${producto}/${numeroPagina}`
    );

    const data = await response.json();
    setCatalogo(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {productos.map(producto => (
          <Producto
            
          />
        ))}
      </div>
    </div>
  );
};

export default App;
