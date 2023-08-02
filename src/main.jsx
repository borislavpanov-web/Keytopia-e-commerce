import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store/store.js";
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
    <Provider store={store}>
      <Router basename="/Keytopia-e-commerce">
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
);
