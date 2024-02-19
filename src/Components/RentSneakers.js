import "./RentSneakers.css";
import shopKidImg from "../assets/shopKid.jpg";
import shopWomenImg from "../assets/shopWomen.jpg";
import shopMenImg from "../assets/shopMan.jpg";

export default function RentSneakers(){
    return(
        
        <div className="rent_container">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <div className="rent_main">
                <div className="shop_kids shop">
                    <img src={shopKidImg} alt="a kid in a sneaker image." className="rent_image"/>
                    <p className="title">SHOP FOR KIDS</p>
                </div>
                <div className="shop_women shop">
                <img src={shopWomenImg} alt="a woman tying sneaker image." className="rent_image"/>
                <p className="title">SHOP FOR WOMEN</p>
                </div>
                <div className="shop_men shop">
                <img src={shopMenImg} alt="a man in a sneaker image." className="rent_image"/>
                <p className="title">SHOP FOR MEN</p>
                </div>
            </div>
        </div>
    );
}