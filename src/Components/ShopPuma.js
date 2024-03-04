import NavbarShop from "./NavbarShop";
import "./ShopPuma.css";
import { PUMA_DATA } from "./SneakerData";
import SneakerDisplay from "./SneakerDisplay";

export default function ShopPuma(){
    return(
    
            <div className="shopPuma_main">
                <NavbarShop />
                <h1>Puma Paradigm: Unleash Your Potential with Trendsetting Designs</h1>
                <SneakerDisplay sneakerData={PUMA_DATA} />
            </div>
            
   
    );
}