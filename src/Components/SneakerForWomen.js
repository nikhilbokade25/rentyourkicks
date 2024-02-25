import NavbarShop from "./NavbarShop";
import ShoppingSneakerBanner from "./ShoppingSneakerBanner";
import "./SneakerForWomen.css";
import shoppingSneakerWomenBannerImg from "../assets/shoppingSneakerWomenBannerImg.jpg";

export default function SneakerForWomen(){
    return(
        <div className="sneakerWomen_container">
            <NavbarShop />

            <div className="sneakerWomen_main">
                <div className="sneakerWomen_banner">
                    <ShoppingSneakerBanner src={shoppingSneakerWomenBannerImg} />
                </div>
            </div>
            
        </div>
    );
}

