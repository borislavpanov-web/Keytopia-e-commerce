import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import products from "../../data/data.js";

const ProductPage = () => {
  let { id } = useParams();
  id = Number(id);
  const [productImage, setProductImage] = useState(null);

  const handleAddToCart = () => {
    console.log(`Product with ID ${id} added to the cart.`);
  };

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product.category === "Switches" && product.id === id) {
      console.log(product.id);
      import(`../../assets/MXSwitches/${product.name}.png`)
        .then((imageModule) => {
          setProductImage(imageModule.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    } else if (product.category === "Keyboard" && product.id === id) {
      import(`../../assets/image${product.id}.jpg`)
        .then((imageModule) => {
          setProductImage(imageModule.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    } else {
      console.error("Product not found in data.js");
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div>
        <h1>Product Page</h1>
        {productImage && <img src={productImage} alt="Product" />}
        <IconButton onClick={handleAddToCart}>
          <ShoppingCart style={{ color: "black" }} />
        </IconButton>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
