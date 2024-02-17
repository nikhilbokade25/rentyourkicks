import { useRef } from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";

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
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/home">Rent Sneakers</a>
                <a href="/home">How it works</a>
                <a href="/home">Contact Us</a>
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