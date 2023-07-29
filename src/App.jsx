import React, { useState, useEffect } from "react";
import products from "./data/data.js";
import { MenuItem, Select } from "@mui/material";

const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("Recommended"); // Set initial value to "Recommended"
  const [sortOption, setSortOption] = useState("Sort"); // Set initial value to "Sort"
  const [productImages, setProductImages] = useState({});

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    const loadProductImages = async () => {
      const images = {};
      for (const product of products) {
        const imageModule = await import(`./assets/image${product.id}.jpg`);
        images[product.id] = imageModule.default;
      }
      setProductImages(images);
    };
    loadProductImages();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      categoryFilter === "Recommended" || product.category === categoryFilter
    );
  });

  let sortedProducts = [...filteredProducts];

  if (sortOption === "priceLowToHigh") {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <Select value={categoryFilter} onChange={handleCategoryFilterChange}>
          <MenuItem value="Recommended">Recommended</MenuItem>
          <MenuItem value="Keyboard">Keyboard</MenuItem>
        </Select>

        <Select value={sortOption} onChange={handleSortOptionChange}>
          <MenuItem value="Sort">Sort By</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col items-center mt-6">
        <ul className="grid grid-cols-2 gap-1 w-full">
          {sortedProducts.map((product) => (
            <li key={product.id} className="flex flex-col items-center">
              <img
                src={productImages[product.id]}
                alt={product.name}
                className="h-64 w-64 object-contain object-center rounded-md shadow-md mb-2 bg-gray-100 p-2 border-2 border-gray-200 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:bg-gray-200 hover:scale-105 transform hover:rotate-3"
              />
              <p>
                {product.name} -{" "}
                <span className="text-red-custom">${product.price}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
