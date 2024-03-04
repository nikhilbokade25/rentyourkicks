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
import NikeAirForcePage from './Components/NikeAirForcePage';
import RentalForm from './Components/RentalForm';
import SneakerCompleteDetails from './Components/SneakerCompleteDetails';
import SneakerDisplay from './Components/SneakerDisplay';
import SneakerData, { NIKE_DATA, ADIDAS_DATA, PUMA_DATA, REEBOK_DATA, NEWBALANCE_DATA } from './Components/SneakerData';

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
  },
  {
    path:"/nikeAirForcePage",
    element: <NikeAirForcePage />
  },
  {
    path:"/rentalForm",
    element: <RentalForm />
  },
  {
    path: "/sneaker/:brand/:id",
    element: <SneakerCompleteDetails sneakersData={{nike: NIKE_DATA, adidas: ADIDAS_DATA, puma: PUMA_DATA, reebok:REEBOK_DATA, newbalance: NEWBALANCE_DATA}}/>
  },
  {
    path: "/sneakers",
    element: <SneakerDisplay />
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
