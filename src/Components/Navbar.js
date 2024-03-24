import { useRef } from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link, animateScroll as Scroll} from 'react-scroll';

export default function Navbar(){

    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        console.log("nav btn clicked!!!!")
    }

    
    return (
        <div className="header">
            <h3>rentyourkicks</h3>
            <nav ref={navRef} className="nav">
                <a href="#home"><Link to="home" smooth={true} duration={500}>Home</Link></a>
                <a href="#about"><Link to="about" smooth={true} duration={500}>About Us</Link></a>
                <a href="#rent"><Link to="rent" smooth={true} duration={500}>Rent Sneakers</Link></a>
                <a href="#howitworks"><Link to="howitworks" smooth={true} duration={500}>How it works</Link></a>
                <a href="#contact"><Link to="contact" smooth={true} duration={500}>Contact Us</Link></a>
                <button className="nav_btn nav_btn_close" onClick={showNavbar}>
                    <FaTimes/><span>CLOSE</span>
                </button>
            </nav>
            <button className="nav_btn nav_btn_menu" onClick={showNavbar}>
                <FaBars/><span>MENU</span>
            </button>
            
        </div>
    );
}