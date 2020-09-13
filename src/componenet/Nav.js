import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
      <div className="md:row-span-3">
        <nav>
          <div>
            <Link to="/">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
               <span>Blog Api</span>
              </h1>
            </Link>
          </div>
          <ul className="text-sm mt-6 hidden md:block">
            <Link to="/">
              <li className="text-gray-700 font-bold py-1">               
               
                  <span  className="px-4 flex justify-end border-r-4 border-primary">Home</span>
               
              </li>
            </Link>
            <Link to="/recipes">
              <li className="py-1">          
                  <span className="px-4 flex justify-end border-r-4 border-primary">Recipes</span>
              </li>
            </Link>
            <Link to="/recipes-ingredient">
              <li className="py-1">      
                  <span className="px-4 flex justify-end border-r-4 border-primary">Another One</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
}
 
export default Nav
