import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

// ! 1
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ! INSTALL
// ! src/index.css
// ! npm i react-router-dom react-icons react-paginate react-slick slick-carousel @reduxjs/toolkit react-redux

// ! TAILWIND CSS
// ! npm install -D tailwindcss
// ! npx tailwindcss init

// ! tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// ! index.css e ekle
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//! LINKLER
// ! https://tailwindcss.com/docs/installation
// ! https://fakestoreapi.com/docs
// ! https://react-icons.github.io/react-icons/
// ! https://react-slick.neostack.com/
// ! https://fonts.google.com/specimen/Nunito   yazilar icin font
// ! https://redux-toolkit.js.org/tutorials/quick-start
// ! https://www.npmjs.com/package/react-paginate

// ! 1 - redux kismina Category deki  <div className="w-1/6 bg-gray-100">Category</div>; kisminin css sini yazinca geciyoruz.
