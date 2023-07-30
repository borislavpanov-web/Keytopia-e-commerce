import React, { useState, useEffect, useRef } from "react";
import useEventListener from "./useEventListener.jsx";
import products from "../../data/data.js";

const PreviewPage = () => {
  const [switchImages, setSwitchImages] = useState([]);
  const switchTypes = ["Brown", "Green", "Clear", "Blue", "Red", "Black"];
  const sliderRef = useRef(null);
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  useEffect(() => {
    async function loadSwitchImages() {
      const images = await Promise.all(
        switchTypes.map(async (type) => {
          const module = await import(
            `../../assets/MXSwitches/Cherry MX ${type}.png`
          );
          return module.default;
        }),
      );
      setSwitchImages(images);
    }
    loadSwitchImages();
  }, []);

  useEffect(() => {
    let animationFrameId;
    let direction = 1;

    const slide = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.clientWidth;
        const contentWidth = sliderRef.current.scrollWidth;
        const maxScrollLeft = contentWidth - containerWidth;
        if (direction === 1) {
          sliderRef.current.scrollLeft += 1;
          if (sliderRef.current.scrollLeft >= maxScrollLeft) {
            direction = -1;
          }
        } else {
          sliderRef.current.scrollLeft -= 0.5;
          if (sliderRef.current.scrollLeft <= 0) {
            direction = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(slide);
    };

    if (isMobile && switchImages.length > 4) {
      animationFrameId = requestAnimationFrame(slide);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, switchImages.length]);

  useEventListener("resize", () => {
    if (sliderRef.current && window.innerWidth <= MOBILE_BREAKPOINT) {
      sliderRef.current.scrollLeft = 0;
    }
  });

  return (
    <>
      <div
        className="flex items-center justify-center w-full overflow-x-auto"
        ref={sliderRef}
      >
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

const MOBILE_BREAKPOINT = 768;

export default PreviewPage;
