import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@ant-design/v5-patch-for-react-19";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import React from "react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
