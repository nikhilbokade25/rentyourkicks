import NavbarShop from "./NavbarShop";
import "./NikeAirForcePage.css";
import nikeAir1 from "../assets/nikeAir1.jpg";
import nikeAir2 from "../assets/nikeAir2.jpg";
import nikeAir3 from "../assets/nikeAir3.jpg";
import nikeAir4 from "../assets/nikeAir4.jpg";
import ShoeSize from "./ShoeSize";

export default function NikeAirForcePage(){
    return(
        <div className="nikeAirForce_container">
            <NavbarShop />
            <div className="nikeAirForce_main">
                <div className="nike_images">
                    <div className="nike_short_images">
                        <img src={nikeAir1} alt="nike air force side profile"/>
                    </div>

                    <div className="nike_short_images">
                        <img src={nikeAir2} alt="nike air force below"/>
                    </div>

                    <div className="nike_short_images">
                        <img src={nikeAir3} alt="nike air force back"/>
                    </div>

                    <div className="nike_short_images">
                        <img src={nikeAir4} alt="nike air force neck"/>
                    </div>
                </div>

                <div className="nike_description">
                    <h1>Nike Air Force 1 Low By You</h1>
                    <p>Shine in satin, stay classic in canvas or get luxe with leather. No matter what you choose, these AF-1s are all about you. 12 colour choices and an additional gum rubber option for the sole mean your design is destined to be one of a kind—just like you.</p>
                    <div className="nike_size">
                        <ShoeSize />
                    </div>
                </div>
            </div>
        </div>
    );
}