import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBox from "./components/SeachBox/SearchBox.jsx";
import "./index.css";
import PreviewPage from "./components/PreviewPage/PreviewPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <SearchBox />
    <PreviewPage />
    <App />
  </React.StrictMode>,
);
