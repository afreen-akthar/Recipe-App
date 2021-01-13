import React, {useEffect, useState} from "react"; 3.4K
import Recipe from './Recipe';
import "./App.css";

const App = () => {  

    const APP_ID = "96d1e1ee";
    const APP_KEY = "b1e4313625150d23c6a00a6d3297735b";


    const [recipes, setRecipes] = useState([]);
    const [search, setSeacrh] = useState(" ");
    const [query, setQuery] = useState('chicken');

    useEffect( () => {
        getRecipes();
        

    }, [query]);

    const getRecipes = async ()=> {
        const response = await fetch(
            'https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}'
            );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(Data.hits);
    };
        

     const updateSearch = e => {
         setSeacrh(e.target.value);
         
          

     };

     const getSearch = e => {
         e.preventDefault();
         setQuery(search);
         setSeacrh('');
     }





    return (
        <div className="App">
            <form onSubmit = {getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button
                className="search-button" type="submit">
                    Search </button>
                    
                
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe 
                key= {recipe.recipe.label}
                title={recipe,recipe,label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                /> 

            ))}
            </div>

        </div>
    );
};

export default App;