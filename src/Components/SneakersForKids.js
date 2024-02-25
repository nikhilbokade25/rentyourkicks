import NavbarShop from "./NavbarShop";
import "./SneakersForKids.css";

import ShoppingSneakerBanner from "./ShoppingSneakerBanner";

export default function SneakersForKids(){
    return(
        <div className="sneakerKids_container">
            <NavbarShop />

            <div className="sneakerKids_main">
                <div className="sneakerKids_banner">
                    <ShoppingSneakerBanner />
                </div>
            </div>
        </div>
    );
}