import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Checkoutform(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleLoginClick = () => {
    navigate("/Account1")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "" || cpassword === "" || address === "" || phone === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
    if (password !== cpassword) {
        setPasswordMatch("Passwords do not match");
        return;
    }
    console.log(name, address, phone, email, password, cpassword);
    fetch("http://localhost:3001/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        address, 
        phone,
        email,
        password,
        cpassword,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Registration failed");
      }
    })
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status=="ok") {
        alert("Registration Successful");
        navigate("/App1");
        }
        else{
          alert("User Already Exists");
          navigate("/Account1");
        }
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong during registering");
    });
}

  return (
    <div className="registerform--container">
      <div>
        <Navbar/>
      </div>
      <div className="registerform">
        
        <form onSubmit={handleSubmit}>
        <div className="registerform--content">
          <h2 className="registerform--title">Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
            />  
          </div>
          <div className="form-group">
          <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your phone no."
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="************"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
            <div className="form-group">
              <label htmlFor="cpass">Confirm Password</label>
              <input
                type="password"
                id="cpass"
                placeholder="************"
                value={cpassword}
                onChange={handleCPasswordChange}
              />
          </div>
          
          <h4>Already registered? <a className="registerform--toggle" onClick={handleLoginClick}>Login here</a></h4>
          <br />
          {errorMessage && <p className="error">{errorMessage}</p>}
          {passwordMatch && <p>Passwords do not match</p>}  
          <div className="resgisterform--onsubmit-container">
            <button className="registerform--onsubmit">Register</button>
          </div>
          </div>
        </form>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}
