import NavbarShop from "./NavbarShop";
import ShoppingSneakerBanner from "./ShoppingSneakerBanner";
import "./SneakerForWomen.css";
import shoppingSneakerWomenBannerImg from "../assets/shoppingSneakerWomenBannerImg.jpg";
import FeaturedCollections from "./FeaturedCollections";

export default function SneakerForWomen(){
    window.scrollTo(0,0);
    return(
        <div className="sneakerWomen_container">
            <NavbarShop />

            <div className="sneakerWomen_main">
                <div className="sneakerWomen_banner">
                    <ShoppingSneakerBanner src={shoppingSneakerWomenBannerImg} />
                </div>

                <div className="sneakerWomen_collection_main">
                    <div className="women_collection">
                        <h1>Featured Collections</h1>
                        <FeaturedCollections />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

