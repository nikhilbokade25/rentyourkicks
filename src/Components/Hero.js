import "./Hero.css";
import heroShoeImg from "../assets/heroShoeImg.png";


export default function Hero(){
    return(
        <div className="hero_container">
            <div className="hero_main">
                <div className="hero_text">
                    <div className="hero_text_content">
                        <h2>Step up your style</h2>
                        <h1><span style={{color:"black"}}>Rent</span> your dream sneakers today</h1>
                        <h3>Elevate your style with Your Dream Sneakers: Unbeatable Prices,
                            Endless Styles, Convenient Pick-Up and Beyond.</h3>
                        <button className="rent_btn">Rent your pair</button>
                    </div>
                    
                </div>

                <div className="hero_image">
                    <div className="hero_image_shadow">
                        <div className="hero_shoe_image">
                            <img className="hero_img" src={heroShoeImg} alt="a floating shoe"/>
                        </div>

                        <div className="hero_shadow">
                            <p className="shadow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}