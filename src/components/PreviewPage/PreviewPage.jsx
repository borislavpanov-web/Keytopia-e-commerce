import React, { useState, useEffect } from "react";
import products from "../../data/data.js";

const PreviewPage = () => {
  const [switchImages, setSwitchImages] = useState([]);
  const switchTypes = ["Brown", "Green", "Clear", "Blue", "Red", "Black"];

  useEffect(() => {
    async function loadSwitchImages() {
      const images = [];
      for (const type of switchTypes) {
        const module = await import(`../../assets/MXSwitches/MX-${type}.png`);
        images.push(module.default);
      }
      setSwitchImages(images);
    }

    loadSwitchImages();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        {switchImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`MX${switchTypes[index]}`}
            className="w-1/4 md:w-1/6 lg:w-1/12"
          />
        ))}
      </div>
      <hr className="my-2 border-black" />
      <div className="flex flex-col justify-start w-1/2 ml-4 my-4">
        <h1 className="text-2xl font-normal">Keyboards</h1>
        <h2 className="text-gray-500">{products.length} Products</h2>
        <p></p>
      </div>
      <hr className="my-2 border-black" />
    </>
  );
};

export default PreviewPage;
