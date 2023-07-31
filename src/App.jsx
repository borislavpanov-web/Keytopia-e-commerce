import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { MenuItem, Select } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import CustomButton from "./MuiStyles/MuiStyles.jsx";
import products from "./data/data.js";

const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Sort");
  const [sortAlphabetical, setSortAlphabetical] = useState("Sort");
  const [productImages, setProductImages] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(2);
  const [favorites, setFavorites] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const navigate = useNavigate();
  const productsPerPage = 2;

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSortAlphabeticalChange = (event) => {
    setSortAlphabetical(event.target.value);
  };

  const handleClearFilters = () => {
    setCategoryFilter("All");
    setSortOption("Sort");
    setSortAlphabetical("Sort");
    setFiltersApplied(false);
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
    return categoryFilter === "All" || product.category === categoryFilter;
  });

  let sortedProducts = [...filteredProducts];

  if (sortOption === "priceLowToHigh") {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortAlphabetical === "Alphabetical Ascending") {
    sortedProducts = sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
  } else if (sortAlphabetical === "Alphabetical Descending") {
    sortedProducts = sortedProducts.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });
  }

  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + productsPerPage);
  };

  useEffect(() => {
    setFiltersApplied(
      categoryFilter !== "All" ||
        sortOption !== "Sort" ||
        sortAlphabetical !== "Sort",
    );
  }, [categoryFilter, sortOption, sortAlphabetical]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center xs:space-x-2 my-4 sm:space-x-4">
        <Select
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
          className="sm:w-auto mb-2"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Keyboard">Keyboard</MenuItem>
          <MenuItem value="Switches">Switches</MenuItem>
        </Select>

        <Select
          value={sortOption}
          onChange={handleSortOptionChange}
          className="sm:w-auto mb-2"
        >
          <MenuItem value="Sort">Sort By Price</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
        </Select>

        <Select
          value={sortAlphabetical}
          onChange={handleSortAlphabeticalChange}
          className="sm:w-auto mb-2"
        >
          <MenuItem value="Sort">Sort By Alphabetical</MenuItem>
          <MenuItem value="Alphabetical Ascending">
            Alphabetical Ascending
          </MenuItem>
          <MenuItem value="Alphabetical Descending">
            Alphabetical Descending
          </MenuItem>
        </Select>
      </div>
      <div className="flex justify-center mt-4">
        {filtersApplied && (
          <CustomButton onClick={handleClearFilters}>
            Clear Filters
          </CustomButton>
        )}
      </div>
      <div className="flex flex-col items-center mt-6">
        <ul className="grid grid-cols-2 gap-1 w-full">
          {sortedProducts.slice(0, visibleProducts).map((product) => (
            <li
              key={product.id}
              className="relative flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className="h-64 w-64 object-contain object-center rounded-md shadow-md mb-2 bg-gray-100 p-2 border-2 border-gray-200 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:bg-gray-200 hover:scale-105 transform hover:rotate-3"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                />
                <FavoriteIcon
                  className={`absolute top-2 right-2 cursor-pointer z-10 ${
                    favorites.includes(product.id)
                      ? "text-red-custom"
                      : "text-black-custom"
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                />
              </div>
              <p className="text-center">
                {product.name} -{" "}
                <span className="text-red-custom">${product.price}</span>
              </p>
            </li>
          ))}
        </ul>
        {visibleProducts < sortedProducts.length && (
          <div className="mt-4">
            <CustomButton onClick={handleLoadMore}>Load More</CustomButton>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
