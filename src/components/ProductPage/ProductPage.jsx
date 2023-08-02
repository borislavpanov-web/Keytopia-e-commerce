import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { successNotification } from "../Notifications/Notifications.jsx";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { AddToCartButton } from "../../MuiStyles/MuiStyles.jsx";
import products from "../../data/data.js";

const ProductPage = () => {
  let { id } = useParams();
  id = Number(id);
  const [productImage, setProductImage] = useState(null);
  const [value, setValue] = useState(2);

  const product = products.find((product) => product.id === id);

  const handleAddToCart = () => {
    successNotification("Product added to cart");
  };

  useEffect(() => {
    if (product.category === "Switches" && product.id === id) {
      import(`../../assets/${product.name}.png`)
        .then((imageModule) => {
          setProductImage(imageModule.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    } else if (product.category === "Keyboard" && product.id === id) {
      import(`../../assets/${product.name}.jpg`)
        .then((imageModule) => {
          setProductImage(imageModule.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    } else {
      console.error("Product not found in data.js");
    }
  }, [id, product]);

  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-8 max-w-screen-lg mx-auto">
        <div className="w-full flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10">
          {productImage && (
            <img
              src={productImage}
              alt="Product"
              className="max-w-1/2 h-auto"
            />
          )}
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="mt-4"
          />
          <h1 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
            {product.name}
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl text-red-custom">
            <span className="text-red-custom">
              {product.id === 2 || product.id === 4 || product.id === 6 ? (
                <>
                  <span className="line-through">${product.price}</span> $
                  {product.price - 30}
                </>
              ) : (
                `$${product.price}`
              )}
            </span>
          </h2>
          <p className="mt-4 w-2/3 text-center whitespace-pre-line">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-6 px-24 sm:py-6 sm:px-24 md:px-36 lg:py-8 lg:px-40">
          <AddToCartButton
            variant="contained"
            color="primary"
            className="w-full max-w-2/3 sm:max-w-full md:max-w-2/3"
            onClick={handleAddToCart}
          >
            Add to Cart
            <ShoppingCart style={{ color: "white" }} />
          </AddToCartButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
