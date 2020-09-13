// import React,{useState,useEffect} from 'react';
// import Recipes from './componenet/Recipes'
// import './App.css';

// function App() {
//      const MY_APP_ID  = 'ea9dd75a'
//      const MY_APP_KEY = 'dba2a288d9bb7d7d73a757ac9ebeef24'
//      const [recipes,SetRecipes] = useState([]);
//      const [search, SetSearch]  = useState('');
//      const [query,SetQuery] = useState('chicken');

//     //  useEffect(() => {
//     //   getRecpe();
//     //  }, [query]);
//      const getRecpe = async () =>{
//         const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`);
//         const data = await response.json();
//         SetRecipes(data.hits);
//         console.log(data.hits);
//      }
//      const searcRecipe = (e) =>{
//       SetSearch(e.target.value);
//      }
//      const searchQuery = (e)=>{
//         e.preventDefault();
//         SetQuery(search);
//         SetSearch('');
//      }
//   return (
//<div className="App">
      
<form onSubmit={searchQuery} className=" w-full max-w-sm ">
<div class="flex items-center  border-b border-teal-500 py-2 ">

 <input class="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" 
 value={search}
 onChange={searcRecipe}
 />   
 <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
 Search
</button>
  </div>

</form>

<hr></hr>
<div className="flex flex-wrap">

{
  recipes.map(recipe => (
    <Recipes 
    title={recipe.recipe.label} 
    calories={recipe.recipe.calories}
    image={recipe.recipe.image}
    ingredient={recipe.recipe.ingredients}
    />
  ))
}
<img src={image} alt="" className="w-full"/>
                  <p className="text-gray-700 text-base">{calories}</p>
         {
             ingredient.map((item) =>(
            <ul className="list-decimal font-serif text-lg text-gray-800">
                <li>{item.text}</li>
             </ul>
             
             ))
         }
</div>        

//   );
// }

// export default App;
