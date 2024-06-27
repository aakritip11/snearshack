import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AccountDetailsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
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
    <section className="account">
      <div className="accountcontent--container">
        <div className="accountcontent">
          <div className="accountcontent--textDiv">
            <span  className="smallText">
              Account
            </span>
          </div>
          <div  className="cardDiv grid">
            <div className="details">
              {userData ? (
                <div className="accountcontent--details1">
                  <h2>Registered User Details</h2>
                  <h3>Name</h3> <p>{userData.name}</p>
                  <hr />
                  <h3>Email</h3> <p>{userData.email}</p>
                  <hr />
                  <h3>Address</h3> <p>{userData.address}</p>
                  <hr />
                  <h3>Phone</h3> <p>{userData.phone}</p>
                  <hr />
                </div>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
            <div className="accountcontent--ondone-container">
              <button className="accountcontent--ondone" onClick={()=>{navigate("/App1")}}>Done</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetailsPage;
