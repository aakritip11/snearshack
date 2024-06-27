import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AIRFORCE, JORDAN, BLAZER, HIPPIE, CRATER } from '../shoppingcardsdata';

function OrderDetails() {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate("/ConfirmOrderDetailsPage");
  }
  const { title } = useParams();
  const products = [...AIRFORCE, ...JORDAN, ...BLAZER, ...CRATER, ...HIPPIE];
  const product = products.find((p) =>
    p.title.toLowerCase() === title.toLowerCase()
  );

  const today = new Date();
  const sixDaysLater = new Date(today);
  sixDaysLater.setDate(today.getDate() + 6);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    fetch("http://localhost:3001/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        if (data.status === "ok") {
          setUserData(data.data); // Store the fetched user data in state
        } else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong while fetching user data");
      });
  };

  return (
    <div className="order--container">
      <div className="order-details-card">
        <h1 className="my-3">Order # 4543f34f545</h1>
        <div className="shipping-info">
          {userData ? (
            <div className='shipping-info'>
              <h4 className="mb-3">Shipping Info</h4>
              <p><b>Name:</b> {userData.name}</p>
              <p><b>Phone:</b> {userData.phone}</p>
              <p><b>Email:</b> {userData.email}</p>
              <p className="mb-3"><b>Address:</b> {userData.address}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>

        <hr />

        <div className="payment-status">
          <h4 className="my-3">Payment</h4>
          <p className="greenColor"><b>PAID</b></p>

          <h4 className="my-3">Order Status:</h4>
          <p className="greenColor"><b>Shipped</b></p>
        </div>

        <hr />

        <h4 className="my-3">Order Items:</h4>

        <div key={product.title} className="cart-item my-1">
          <div className="row my-3">
            <div className="col-4 col-lg-2">
              <img src={product.image} height="60" width="60" />
            </div>
            <div className="col-8 col-lg-10">
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          </div>
        </div>
        {/*)) } */}

        <hr />

        <h4 className="my-3 delivery-title">Delivery Date:</h4>
        <p className="delivery-date">{`${sixDaysLater.getDate()}-${sixDaysLater.getMonth() + 1}-${sixDaysLater.getFullYear()}`}</p>
      </div>
      <div className="order--btnContainer">
        <button className='order--btn' onClick={handleOrderClick}>Confirm</button>
      </div>
    </div>
  );
}

export default OrderDetails;
