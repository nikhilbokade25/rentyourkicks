import NavbarShop from "./NavbarShop";
import "./ShopNewBalance.css";
import SneakerDisplay from "./SneakerDisplay";
import { NEWBALANCE_DATA } from "./SneakerData";

export default function ShopNewBalance(){
    return(
            <div className="shopNewBalance_main">
                <NavbarShop />
                <h1>Find Your Perfect Stride: Shop the Best of New Balance Sneakers</h1>
                <SneakerDisplay sneakerData={NEWBALANCE_DATA} />
            </div>
            
  
    );
}