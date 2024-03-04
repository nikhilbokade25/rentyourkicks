import NavbarShop from "./NavbarShop";
import "./ShopAdidas.css";
import { ADIDAS_DATA } from "./SneakerData";
import SneakerDisplay from "./SneakerDisplay";

export default function ShopAdidas(){
    return(
        
            <div className="shopAdidas_main">
                <NavbarShop />
                <h1>Adidas Collection: Elevate Your Style with Iconic Sneakers</h1>
                <SneakerDisplay sneakerData={ADIDAS_DATA} />
            </div>
            
       
    );
}