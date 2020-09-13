import React, { useState } from 'react'

function Search ({searchText}) {

             const [search, SetSearch]  = useState('');
             const searcRecipe = (e) => {
               SetSearch(e.target.value);
             };
             const searchQuery = (e) => {
               e.preventDefault();
               searchText(search);
               SetSearch("");
             };
        return (
          <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={searchQuery} className=" w-full max-w-sm ">
              <div className="flex items-center  border-b border-teal-500 py-2 ">
                <input
                  className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                  value={search}
                  onChange={searcRecipe}
                />
                <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        );

}

export default Search
