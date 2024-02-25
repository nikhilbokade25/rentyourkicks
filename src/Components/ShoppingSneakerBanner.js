import "./ShoppingSneakerBanner.css";
import shoppingBannerImg from "../assets/shoppingSneakerKidsBannerImg.jpg";

export default function ShoppingSneakerBanner(){
    return(
        <div className="shoppingBanner_container">
            <div className="gradientOverlay" />
            <img src={shoppingBannerImg} alt="shopping for kids banner"/>
            <div className="overlayContent bottom">
                <h2>Get moving with the right shoes</h2>
                <p>Find your perfect pair with our wide selection. From top-rated brands like Nike, Adidas, and Puma.</p>
                <input type="text" name="sneakerSearch" placeholder="Search for Sneakers"/>            
            </div>
        </div>
    );
}