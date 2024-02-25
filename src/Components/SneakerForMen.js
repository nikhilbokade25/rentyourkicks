import "./SneakerForMen.css";
import shoppingSneakerMenBannerImg from "../assets/shoppingSneakerMenBannerImg.jpg";
import NavbarShop from "./NavbarShop";
import ShoppingSneakerBanner from "./ShoppingSneakerBanner";

export default function SneakerForMen(){
    return(
        <div className="sneakerMen_container">
            <NavbarShop />

            <div className="sneakerMen_main">
                <div className="sneakerMen_banner">
                    <ShoppingSneakerBanner src={shoppingSneakerMenBannerImg} />
                </div>
            </div>
            
        </div>
    );
}