import { useLocation } from "react-router-dom";
import "./RentalPage.css";

export default function RentalPage(){
    const location = useLocation();
  const sneaker = location.state?.sneaker;

  if (!sneaker) {
    return (
      <div>
        <h1>No sneaker information found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="rental_form_container">
            <div className="rental_form_main">
                <div className="rental_form_group">
                    
                    <div className="rent_form">
                        <h2>Rental Period</h2>
                        <form>

                        <div class="date-container">
                            <div class="date-input">
                                <h3>From</h3>
                                <input type="date" name="fromDate" required />
                            </div>
                            <div class="date-input">
                                <h3>To</h3>
                                <input type="date" name="toDate" required />
                            </div>
                        </div>

                        <div className="rental_hr">
                            <hr/>
                        </div>
                        

                        <div className="user_contact">
                            <h3>Contact</h3>
                            <input type="email" className="userEmail" name="userEmail" placeholder="Email" required />
                            <label className="checkbox">
                                <input type="checkbox" name="agreeToTerms" required />
                                Email me with news and promotions
                            </label>
                        </div>

                        <div className="contact_hr">
                            <hr/>
                        </div>

                        <div className="shipping_details">
                            <h3>Shipping address</h3>
                            <select>
                                <option>Country/Region</option>
                                <option>Canada</option>
                                <option>USA</option>
                                <option>India</option>
                            </select>
                        </div>

                        <div className="name">
                            <input type="text" name="firstName" placeholder="First Name" required />
                            <input type="text" name="lastName" placeholder="Last Name" required />
                        </div>

                        <div className="residential_address">
                            <input type="text" placeholder="Address" name="userAddress" required /> <br />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" name="userAddress" required />
                        </div>

                        <div className="postal_details">
                            <input type="text" placeholder="City" required />
                            <input type="text" placeholder="Province" required />
                            <input type="text" placeholder="Postal Code" required />
                        </div>

                        <div className="phone">
                            <input type="phone" placeholder="Phone" required />
                        </div>

                        <button>Go To Checkout</button>
                        </form>
                    </div>
                </div>

                <div className="vertical_hr">
                </div>
                <div className="rental_pricing">
                    <div className="rental_details">
                        <div className="rental_sneaker_details">
                            <div className="rental_name">
                                <h2>{sneaker.name}</h2>
                            </div>
                        </div>

                        <div className="sneaker_rental_pricing">
                            <div className="subtotal">
                                <p className="price_heading">Subtotal</p>
                                <p>${sneaker.cost}</p>
                            </div>

                            <div className="shipping">
                                <p className="price_heading">Shipping & Handling</p>
                                <p>${sneaker.shipping}</p>
                            </div>

                            <div className="taxes">
                                <p className="price_heading">Taxes</p>
                                <p>${sneaker.cost * 0.13}</p>
                            </div>

                            <div className="total">
                                <p className="price_heading total_heading">Total</p>
                                <p className="total_heading">${sneaker.cost + sneaker.cost * 0.13 + sneaker.shipping}</p>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
       </div>
      
    </div>
  );
};


