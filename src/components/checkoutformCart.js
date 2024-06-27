import React, { useState } from "react";
import visamatercard from "../images/visa_mastercard.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CheckoutformCart(props) {
  const navigate = useNavigate();
  const [cardholdername, setCardHolderName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVV, setCVV] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  }
  const handlecardnumberChange = (e) => {
    setCardnumber(e.target.value);
  };

  const handlemonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleyearChange = (e) => {
    setYear(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardnumber === "" || month === "" || year === "" || CVV === "" || cardholdername === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
  }
  const {title} = useParams();
  const handleOrderDetails = () => {
    navigate(`/OrderDetailsCart`);
  }

  const handleCloseClick=()=>{
    navigate('/App1')
  }
  return (
    <div className="checkout-form--container">
      <div className="checkout-form">
        <button className="checkoutform--close" onClick={()=>handleCloseClick()}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div>
          <h2 className="checkoutform--title">Card Information</h2>
          <div className="card-details">
            <img
              src={visamatercard}
              className="checkoutform--visamatercardicon"
              alt="Visa/Mastercard"
            />
            <div className="form-group">
              <label htmlFor="cardNumber">Card Holder's Name</label>
              <input
                type="text"
                id="cardholdername"
                placeholder="Enter the Card Holder's Name"
                value={cardholdername}
                onChange={handleCardHolderNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardnumber"
                placeholder="Enter your Card Number"
                value={cardnumber}
                onChange={handlecardnumberChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="MM">MM</label>
                <input
                  type="number"
                  id="month"
                  placeholder="Enter expiry month"
                  value={month}
                  onChange={handlemonthChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="YY">YY</label>
                <input
                  type="number"
                  id="year"
                  placeholder="Enter expiry year"
                  value={year}
                  onChange={handleyearChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CVV">CVV</label>
                <input
                  type="password"
                  id="CVV"
                  placeholder="Enter the CVV"
                  value={CVV}
                  onChange={handleCVVChange}
                />
              </div>
            </div>
          </div>
          <br />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div>
            <button className="checkoutform--onsubmit" onClick={handleOrderDetails}>Checkout</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
