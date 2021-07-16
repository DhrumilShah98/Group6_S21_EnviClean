import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  if (localStorage.getItem("token") != undefined) {
    const token = localStorage.getItem("token");
    config.headers.token = token;
  }

  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
