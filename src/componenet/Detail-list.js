import React,{useEffect,useState} from 'react'
import Search from './Search';
function DetailList() {
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
      <>
       <Search searchText={(text) => setTerm(text)} />
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
     
      <div className=" mt-8 mx-10 grid grid-cols-3 gap-4">
      
          {recipes.map((item) => (
             <div key={item.recipe.uri} className="card-1 hover:shadow-inner transform hover:scale-110 hover:bg-opacity-40 transition ease-out duration-300">
              <div className="w-full h-32  sm:h-48 ">
                <img
                  src={item.recipe.image}
                  alt=""
                  className=" w-full rounded-none object-cover lg:rounded-lg shadow-2xl hidden lg:block "
                />
              </div>
              <div className="w-full lg:w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                <div className="p-4 md:p-12 text-center lg:text-left">
                  <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
                  <h1  className="text-3xl font-bold pt-8 lg:pt-0">
                    {item.recipe.label}
                    
                  </h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                  {item.recipe.ingredients.map((menu) => (
                    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                      {menu.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
       
      </div>
      </>
    );
}

export default DetailList
