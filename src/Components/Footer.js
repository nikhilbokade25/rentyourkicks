import "./Footer.css";

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_main">
                <div className="footer_company">
                    <h2>rentyourkicks</h2>
                    <p>Unlock the latest sneaker trends without the permanent price tag at RentYourKicks. Explore, wear, and swap high-end sneakers with ease and style.</p>
                </div>

                <div className="footer_quicklinks">
                    <h2>QUICK LINKS</h2>
                    <li>Careers</li>
                    <li>Contact Retailer</li>
                    <li>rentyourkicks App</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </div>

                <div className="footer_working_hours">
                    <h2>WORKING HOURS</h2>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>

                <div className="footer_subscription">
                    <h2>SUBSCRIPTION</h2>
                    <p>Subscribe your Email address for latest  <br/>news & updates.</p>
                    <input type="email" name="footer_email" className="footer_email" placeholder="Enter email address" required /> <br></br>
                    <input type="button" value="Submit" className="footer_btn_submit"/>
                </div>
            </div>
        </div>
    );
}