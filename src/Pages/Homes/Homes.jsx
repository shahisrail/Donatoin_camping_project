import React, { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Homes = () => {
  const cards = useLoaderData();
  const [full, setFull] = useState(cards);

  const [search, setSearch] = useState(cards);

  const handleSearch = () => {
    const input = document.getElementById("default_search");
    const search = input.value.toLowerCase(); // Convert the search query to lowercase

    if (search.length > 0) {
      const newData = full.filter(
        (item) => item.category_name.toLowerCase() === search
      ); // Convert category name to lowercase for comparison

      if (newData) {
        setSearch(newData);
      }
    } else {
      setSearch(full);
    }
    console.log(search);
  };

  return (
    <div>
      <div className="">
        <div
          className="hero h-[70vh] "
          style={{
            backgroundImage: "url(https://i.imgur.com/kv06mZL.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>
              <div>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default_search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    onClick={handleSearch}
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards cards={search}></Cards>
    </div>
  );
};

export default Homes;
