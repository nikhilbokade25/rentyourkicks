// import "./ContactUs.css";

// import callIcon from "../assets/call.svg";
// import mailIcon from "../assets/mail.svg";

// export default function ContactUs(){
//     return(
//         <div className="contact_container">
//             <div className="contact_main">
//                 <div className="contact_text">

//                     <h1>Have questions, concerns, or just want to say hello? We're here to help!</h1>
//                     <p>Don't hesitate to drop us a line for any reason—be it a query, feedback, or even to share your sneaker stories with us. We love hearing from our community and are committed to making your RentYourKicks experience as enjoyable and seamless as possible. Use the contact information below to reach out, and we'll get back to you as soon as we can.</p>
                    
//                     <div className="icons">
//                         <h3><img src={callIcon} alt="call icon"/>+1 (905) 123-4567</h3> 
//                         <h3><img src={mailIcon} alt="mail icon" />help@rentyourkicks.com</h3>
//                     </div>
                    
//                 </div>

//                 <div className="contact_form">
//                     <div className="form_group">
//                     <form>
//                     <label>
//                         Name <span style={{color:"red"}}>*</span> <br/>
//                         <input type="text" name="name" placeholder="E.g: John Smith"  required/> <br/>
//                     </label>

//                     <label>
//                         Email <span style={{color:"red"}}>*</span><br/>
//                         <input type="email" name="email" placeholder="youremail@example.com" required/><br/>
//                     </label>

//                     <label>
//                         Tell Us More <span style={{color:"red"}}>*</span><br/>
//                         <textarea rows={7} cols={71} placeholder="Type here...."/><br/>
//                     </label>

//                     <input type="submit" value="Submit" />


//                     </form>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     );

// }

import React from "react";
import "./ContactUs.css";
import callIcon from "../assets/call.svg";
import mailIcon from "../assets/mail.svg";

export default function ContactUs() {
    return (
        <div className="contact_container" id="contact">
            <div className="contact_content">
                <div className="contact_text">
                    <h1>Have questions, concerns, or just want to say hello? We're here to help!</h1>
                    <p>Don't hesitate to drop us a line for any reason—be it a query, feedback, or even to share your sneaker stories with us. We love hearing from our community and are committed to making your RentYourKicks experience as enjoyable and seamless as possible. Use the contact information below to reach out, and we'll get back to you as soon as we can.</p>
                    <div className="icons">
                        <h3><img src={callIcon} alt="call icon" />+1 (905) 123-4567</h3>
                        <h3><img src={mailIcon} alt="mail icon" />help@rentyourkicks.com</h3>
                    </div>
                </div>
                <div className="contact_form">
                    <div className="form_group">
                        <form>
                            <label>
                                Name <span style={{color:"red"}}>*</span> <br/>
                                <input type="text" name="name" placeholder="E.g: John Smith" required/> <br/>
                            </label>
                            <label>
                                Email <span style={{color:"red"}}>*</span><br/>
                                <input type="email" name="email" placeholder="youremail@example.com" required/><br/>
                            </label>
                            <label>
                                Tell Us More <span style={{color:"red"}}>*</span><br/>
                                <textarea rows="7" cols="71" placeholder="Type here...."></textarea><br/>
                            </label>
                            <input type="submit" value="Submit" className="contact_btn_submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
