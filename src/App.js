import React,{useEffect,useState} from 'react';
import Recipe from "./Recipes";
import './App.css';

const App = () => {

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('');

  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes =  async () => {

    const response = await fetch(`http://localhost:8080/api/resep?nama=${query}`);
    const data = await response.json();
    setRecipes(data);
    console.log(data);
  };

  const updateSearch  = e => {
    setSearch(e.target.value);

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
      <div className={"App"}>
        <form onSubmit={getSearch} className="Search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit" >Search</button>
        </form>
        <div className="recipe">
        {recipes.map(recipe => (
            <Recipe
                nama={recipe.nama}
                deskripsi={recipe.deskripsi}
                gambar={recipe.gambar}
            />
        ))}
        </div>
      </div>
  );
};

export default App;
