import React from 'react'
import {Link} from 'react-router-dom'
function List ({title,calories,image,uid}) {

        const str = uid.slice(51, 83);
      
        return (
          <div className="card hover:shadow-inner transform hover:scale-110 hover:bg-opacity-40 transition ease-out duration-300">
            <img
              src={image}
              alt=""
              className="w-full h-32  sm:h-48 object-cover"
            />
            <div className="m-4">
              <Link to={`/recipes/${str}`}>
              <span className="font-bold">{title}</span>
              <span className="block text-gray-500 text-sm" >
                Calories:{calories}          
              </span>
              </Link>
            </div>
          </div>
        );
    
}

export default List
