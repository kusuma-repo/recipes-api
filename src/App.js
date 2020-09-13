import React from 'react';
import Recipes from './componenet/Recipes';
import Nav from './componenet/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import DetailList from './componenet/Detail-list';
function App() {
     
    
    
  return (
    
      <Router>
      
      <div className="grid md:grid-rows-3 grid-flow-col gap-4 ">
         <Nav />
      <main className="px-16 py-6 bg-gray-200 md:row-span-3 col-span-3 ">
        <Route path="/" exact component={Home}/>
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/recipes-ingredient" component={DetailList} />
       
      </main>
    </div>
    
    </Router>
   
    
    
  );
}
const Home = () =>(
  <div>
   <h1>Home Page</h1>
</div>
)
 
export default App;
