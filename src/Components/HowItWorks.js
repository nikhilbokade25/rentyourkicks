import "./HowItWorks.css";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



import orderConfirmImg from "../assets/orderconfirm.svg";
import qualityInspectionImg from "../assets/qualityInspection.svg";
import cleaningImg from "../assets/cleaningImg.svg";
import packagingImg from "../assets/packagingImg.svg";
import shippingImg from "../assets/shipping.svg";
import deliveryImg from "../assets/delivery.svg";
import enjoymentImg from "../assets/enjoyment.svg";
import returnProductImg from "../assets/returnProduct.svg";


export default function HowItWorks(){

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    },{
      translateX: "-655vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top to",
        end: "3100px",
        scrub: 0.6,
        pin: true
      }
    })

    return ()=>{
      pin.kill()
    }
  }, [])
    return(
        <div className="howitworks_container">
            <section className='scroll_section_outer'>
          <div ref={triggerRef}>
        
          <div ref={sectionRef} className='scroll_section_inner'>
            <div className='scroll_section'>
                <p className="scroll_text1">how does rentyourkicks <br/>work?</p>
            </div>

            <div className="scroll_section">
                <p className="scroll_section_heading">Order Placement</p> 
                <img src={orderConfirmImg} alt="order is confirmed svg icon" className="howitworks_image"/>
                <p className="scroll_section_subheading">Customer selects their desired sneakers and places an order</p>
            </div>

          <div className='scroll_section'>
            <p className="scroll_section_heading">Quality Inspection</p>
            <img src={qualityInspectionImg}  alt="quality inspection svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">Every pair of sneakers undergoes a thorough quality check to ensure <br></br>they meet the company's standards for cleanliness and wear</p>
          </div>

          <div className='scroll_section'>
            <p className="scroll_section_heading">Cleaning & Sanitization</p>
            <img src={cleaningImg}  alt="cleaning and sanitization svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">The sneakers are professionally cleaned and sanitized to ensure <br></br>they are in perfect condition for the next customer</p>
          </div>

          <div className='scroll_section '>
            <p className="scroll_section_heading">Packaging</p>
            <img src={packagingImg}  alt="packaging svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">The sneakers are carefully packaged along with a shipping label as well as <br></br> with protective materials to ensure they are secure during transit
</p>
          </div>

          <div className='scroll_section '>
            <p className="scroll_section_heading">Shipping</p>
            <img src={shippingImg}  alt="a man on the cycle delivering product svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">The order is dispatched through a reliable courier service, with <br></br>tracking information provided to the customer</p>
          </div>

          <div className='scroll_section '>
            <p className="scroll_section_heading">Delivery</p>
            <img src={deliveryImg}  alt="product delivered svvg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">The sneakers are delivered to the customer's doorstep within the specified delivery window</p>
          </div>

          <div className='scroll_section '>
            <p className="scroll_section_heading">Enjoyment</p>
            <img src={enjoymentImg}  alt="happy customer svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">The customer enjoys wearing the sneakers for the duration of their rental period</p>
          </div>

          <div className='scroll_section last_scroll_section'>
            <p className="scroll_section_heading">Return Process</p>
            <img src={returnProductImg}  alt="customer returning the product and sticking label svg icon" className="howitworks_image"/>
            <p className="scroll_section_subheading">At the end of the rental period, the customer returns the sneakers <br></br> using the provided return packaging and shipping label</p>
          </div>
          
        </div>
      </div>
    </section>
        </div>
    );
}