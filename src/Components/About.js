import "./About.css";
import aboutImg from "../assets/aboutImg.jpg";


export default function About(){

   

    return(
        <div className="about_container" id="about">
            <div className="about_main">
                <div className="about_image">
                    <img src={aboutImg} alt="a frame full of shoes " className="about_img"/>
                </div>
                <div className="about_text">
                    <h3>About rentyourkicks</h3>
                    <h1>Walk the Talk: Unleash Your Style Revolution!</h1>
                    <h2>Welcome to rentyourkicks, where fashion meets freedom. Elevate your every step with our exclusive sneaker rental service. Immerse yourself in a world of unparalleled style and comfort, where the latest trends and iconic designs are just a step away. Rent premium sneakers at unbeatable prices, tailor your look for every occasion, and embrace the freedom to explore your personal style without limits. Step boldly, step confidently—your perfect pair is waiting.</h2>
                </div>
            </div>
        </div>
    );
}