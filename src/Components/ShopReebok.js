import NavbarShop from "./NavbarShop";
import "./ShopReebok.css";
import { REEBOK_DATA } from "./SneakerData";
import SneakerDisplay from "./SneakerDisplay";

export default function ShopReebok(){
    return(
       
            <div className="shopReebok_main">
                <NavbarShop />
                <h1>Step into Greatness: Explore the Latest Reebok Sneaker Collection</h1>
                <SneakerDisplay sneakerData={REEBOK_DATA} />
            </div>
            

    );
}