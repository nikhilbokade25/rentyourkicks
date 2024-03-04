import NavbarShop from "./NavbarShop";
import "./ShopNike.css";
import { NIKE_DATA } from "./SneakerData";
import SneakerDisplay from "./SneakerDisplay";

export default function ShopNike(){
    return(
            <div className="shopNike_main">
                <NavbarShop />
                <h1>The Ultimate Nike Experience: Explore, Choose, and Conquer</h1>
                <SneakerDisplay sneakerData={NIKE_DATA} />
            </div>
    );
}