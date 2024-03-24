import "./RentSneakers.css";
import shopKidImg from "../assets/shopKid.jpg";
import shopWomenImg from "../assets/shopWomen.jpg";
import shopMenImg from "../assets/shopMan.jpg";
import { Link } from "react-router-dom";


export default function RentSneakers(){    
    return(
        
        <div className="rent_container" id="rent">
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <div className="rent_main">
                <div className="shop_kids shop">
                    <Link to="/sneakerForKids"><img src={shopKidImg} alt="a kid in a sneaker" className="rent_image"/></Link>
                    <p className="title">SHOP FOR KIDS</p>
                </div>

                <div className="shop_women shop">
                    <Link to ="/sneakerForWomen"><img src={shopWomenImg} alt="a woman tying sneaker" className="rent_image"/></Link>
                    <p className="title">SHOP FOR WOMEN</p>
                </div>

                <div className="shop_men shop">
                    <Link to="sneakerForMen"><img src={shopMenImg} alt="a man in a sneaker" className="rent_image"/></Link>
                    <p className="title">SHOP FOR MEN</p>
                </div>
            </div>
            
        </div>
        
    );  
}