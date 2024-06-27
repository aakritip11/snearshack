import React, { useState } from "react";
import visamatercard from "../images/visa_mastercard.png";
import { useNavigate, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function PaymentOptionCart(props) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOrderDetails = () => {
    if (selectedOption === "Card") {
      navigate(`/CheckoutformCart`);
    }
    else if (selectedOption === "UPI"){
      navigate(`/PaymentUpiCart`);
    } 
    else {
      navigate(`/OrderDetailsCart`);
    }
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="paymentoption">
    
      <div className="payment--options">
      <div className="paymentoption--title">
        <h2>Payment Options</h2>
    </div>
        <div>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="Cash On Delivery"
            onChange={handleOptionChange}
            checked={selectedOption === "Cash On Delivery"}
          />
          Cash On Delivery
        </label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="UPI"
            onChange={handleOptionChange}
            checked={selectedOption === "UPI"}
          />
          UPI
        </label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="Card"
            onChange={handleOptionChange}
            checked={selectedOption === "Card"}
          />
          Card
        </label>
        </div>
        <div>
            {selectedOption === "Card" ? (
            <button className="checkoutform--onsubmit" onClick={handleOrderDetails}>
                Proceed to Payment
            </button>
            ) : (
            <button className="checkoutform--onsubmit" onClick={handleOrderDetails}>
                Checkout
            </button>
            )}
        </div>
      </div>
    </div>
  );
}