import NavbarShop from "./NavbarShop";
import "./ShopNike.css";
import nike1Img from "../assets/nike1.jpg";
import nike2Img from "../assets/nike2.jpg";
import nike3Img from "../assets/nike3.jpg";
import nike4Img from "../assets/nike4.jpg";
import { Link } from "react-router-dom";

export default function ShopNike(){
    return(
        
            <div className="shopNike_main">
                <NavbarShop />
                <h1>The Ultimate Nike Experience: Explore, Choose, and Conquer</h1>
                
                <div className="nike_sneaker_display">
                    <div className="nike_sneaker_list">
                    <Link to="/nikeAirForcePage"><img src={nike1Img} alt="nike air force 1 low"></img></Link>
                        <p>Nike Air Force 1 Low</p>
                        <p>$15 per day</p>
                    </div>
                    <div className="nike_sneaker_list">
                        <img src={nike2Img} alt="Nike Air Force"/>
                        <p>Nike Air Force</p>
                        <p>$25 per day</p>
                    </div>
                    <div className="nike_sneaker_list">
                        <img src={nike3Img} alt="Nike Dunk High"/>
                        <p>Nike Dunk High</p>
                        <p>$10 per day</p>
                    </div>
                    <div className="nike_sneaker_list">
                        <img src={nike4Img} alt="Nike Invincible 3"/>
                        <p>Nike Invincible 3</p>
                        <p>$13 per day</p>
                    </div>
                </div>
            </div>
            
       
    );
}