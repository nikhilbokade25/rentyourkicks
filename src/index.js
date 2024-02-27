import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SneakersForKids from './Components/SneakersForKids';
import SneakerForWomen from "./Components/SneakerForWomen";
import SneakerForMen from './Components/SneakerForMen';
import ShopNike from './Components/ShopNike';
import ShopAdidas from './Components/ShopAdidas';
import ShopReebok from './Components/ShopReebok';
import ShopPuma from './Components/ShopPuma';
import ShopNewBalance from './Components/ShopNewBalance';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/sneakerForKids",
    element: <SneakersForKids/>
  },
  {
    path:"/sneakerForWomen",
    element: <SneakerForWomen />
  },
  {
    path:"/sneakerForMen",
    element: <SneakerForMen />
  },
  {
    path:"/shopNike",
    element: <ShopNike />
  },
  {
    path:"/shopAdidas",
    element: <ShopAdidas />
  },
  {
    path:"/shopReebok",
    element: <ShopReebok />
  },
  {
    path:"/shopPuma",
    element: <ShopPuma />
  },
  {
    path:"/shopNewBalance",
    element: <ShopNewBalance />
  }

  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
