import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import products from "./data/data.js";

const BlackButton = styled(Button)({
  color: "#000000",
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#eeeeee",
  },
  padding: "0.5rem 1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
});

const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("Recommended");
  const [sortOption, setSortOption] = useState("Sort");
  const [productImages, setProductImages] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(2);
  const productsPerPage = 2;

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const loadProductImages = async () => {
      const images = {};
      for (const product of products) {
        const imageExtension = product.imageType === "jpg" ? "jpg" : "png";
        if (product.category === "Switches") {
          const imageModule = await import(
            `./assets/MXSwitches/${product.name}.${imageExtension}`
          );
          images[product.id] = imageModule.default;
          continue;
        }
        const imageModule = await import(
          `./assets/image${product.id}.${imageExtension}`
        );
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

  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + productsPerPage);
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4 my-4">
        <Select value={categoryFilter} onChange={handleCategoryFilterChange}>
          <MenuItem value="Recommended">Recommended</MenuItem>
          <MenuItem value="Keyboard">Keyboard</MenuItem>
          <MenuItem value="Switches">Switches</MenuItem>
        </Select>

        <Select value={sortOption} onChange={handleSortOptionChange}>
          <MenuItem value="Sort">Sort By</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col items-center mt-6">
        <ul className="grid grid-cols-2 gap-1 w-full">
          {sortedProducts.slice(0, visibleProducts).map((product) => (
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
        {visibleProducts < sortedProducts.length && (
          <div className="mt-4">
            <BlackButton onClick={handleLoadMore}>Load More</BlackButton>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
