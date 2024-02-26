import NavbarShop from "./NavbarShop";
import "./SneakersForKids.css";
import shoppingSneakerKidBannerImg from "../assets/shoppingSneakerKidsBannerImg.jpg";
import ShoppingSneakerBanner from "./ShoppingSneakerBanner";
import FeaturedCollections, {FEATURED_COLLECTIONS} from "./FeaturedCollections";

export default function SneakersForKids(){
    window.scrollTo(0,0);
    return(
        <div className="sneakerKids_container">
            <NavbarShop />

            <div className="sneakerKids_main">
                <div className="sneakerKids_banner">
                    <ShoppingSneakerBanner src={shoppingSneakerKidBannerImg} />
                </div>

                <div className="sneakerKids_collection_main">
                    <div className="kids_collection">
                        <h1>Featured Collections</h1>
                        <FeaturedCollections />
                    </div>
                </div>
            </div>
        </div>
    );
}