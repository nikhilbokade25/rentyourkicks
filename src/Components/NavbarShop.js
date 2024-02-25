import "./NavbarShop.css";

import heartIcon from "../assets/heart.svg";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";

export default function NavbarShop(){
    return(
        <div className="navbar">
            <div className="logo">
                <h3>rentyourkicks</h3>
            </div>

            <div className="search-icons">
                <input type="text" name="search" placeholder="Search" className="search-input"/>
                <img src={searchIcon} className="navbar_search_icon" alt="Search Icon" />
                <img src={heartIcon} className="navbar_icon" alt="Heart Icon" />
                <img src={cartIcon} className="navbar_icon" alt="Cart Icon" />
            </div>
        </div>

    );
}