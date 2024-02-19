import "./ContactUs.css";

export default function ContactUs(){
    return(
        <div className="contact_container">
            <div className="contact_main">
                <div className="contact_text">
                    <h1>Have questions, concerns, or just want to say hello? We're here to help!</h1>
                    <p>Don't hesitate to drop us a line for any reason—be it a query, feedback, or even to share your sneaker stories with us. We love hearing from our community and are committed to making your RentYourKicks experience as enjoyable and seamless as possible. Use the contact information below to reach out, and we'll get back to you as soon as we can.</p>
                    
                </div>

                <div className="contact_form">
                    <div className="form_group">
                    <form>
                    <label>
                        Name:<br/>
                        <input type="text" name="name" /> <br/>
                    </label>

                    <label>
                        Email:<br/>
                        <input type="text" name="name" /><br/>
                    </label>

                    <label>
                        Tell Us More:<br/>
                        <input type="text" name="name" /><br/>
                    </label>

                    <input type="submit" value="Submit" />


                    </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}