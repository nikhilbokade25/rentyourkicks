import "./NavbarShop.css";

import heartIcon from "../assets/heart.svg";
import cartIcon from "../assets/cart.svg";
import profileIcon from "../assets/profile.svg";


export default function NavbarShop(){
    return(
        <div className="navbar">
            <div className="logo">
                <h3>rentyourkicks</h3>
            </div>

            <div className="search-icons">
                
                <img src={heartIcon} className="navbar_icon" alt="Heart Icon" />
                <img src={cartIcon} className="navbar_icon" alt="Cart Icon" />
                <img src={profileIcon} className="navbar_icon profile_icon" alt="Profile Icon" />
            </div>
        </div>

    );
}