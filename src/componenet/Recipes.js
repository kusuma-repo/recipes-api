
import React,{useEffect,useState} from 'react'
import List from './List'
import Search from './Search';

function Recipes() {
  const [recipes,SetRecipes] = useState([]);
  const [term, setTerm] = useState('chicken'); 
  
  useEffect(() => {
   const getRecipe = async () =>{
     const response = await fetch(`https://api.edamam.com/search?q=${term}&app_id=ea9dd75a&app_key=dba2a288d9bb7d7d73a757ac9ebeef24`);
     const data = await response.json();
     SetRecipes(data.hits);
     console.log(data.hits);
     

  }
   getRecipe();
  }, [term]);
  
    return (    
      <div>
        <Search searchText={(text) => setTerm(text)} />
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <div className="mt-8 mx-10 grid lg:grid-cols-4 gap-10">
          {recipes.map((recipe) => (
            
            <List
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              key={recipe.recipe.shareAs}
              uid={recipe.recipe.uri}
            />
          ))
          }
        </div>
      </div>
    );
}

export default Recipes
