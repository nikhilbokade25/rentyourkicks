import "./SneakerForMen.css";
import shoppingSneakerMenBannerImg from "../assets/shoppingSneakerMenBannerImg.jpg";
import NavbarShop from "./NavbarShop";
import ShoppingSneakerBanner from "./ShoppingSneakerBanner";
import FeaturedCollections from "./FeaturedCollections";

export default function SneakerForMen(){
    window.scrollTo(0,0);
    return(
        <div className="sneakerMen_container">
            <NavbarShop />

            <div className="sneakerMen_main">
                <div className="sneakerMen_banner">
                    <ShoppingSneakerBanner src={shoppingSneakerMenBannerImg} />
                </div>

                <div className="sneakerMen_collection_main">
                    <div className="Men_collection">
                        <h1>Featured Collections</h1>
                        <FeaturedCollections />
                    </div>
                </div>
            </div>
            
        </div>
    );
}