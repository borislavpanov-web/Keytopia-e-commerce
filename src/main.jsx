import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import PreviewPage from "./components/PreviewPage/PreviewPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import "./index.css";

const MainContent = () => (
  <>
    <Navbar />
    <SearchBox />
    <PreviewPage />
    <App />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
