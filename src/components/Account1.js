import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Checkoutform(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState("false");
  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
    fetch("http://localhost:3001/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          setAuthenticated(true);
          navigate("/AccountDetailsPage");
        } else {
          throw new Error("Token not received");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong during login");
      });
  };
  
  // Fetch user data when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = () => {
    fetch("http://localhost:3001/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
      console.log(data);
      if (data.status === "ok") {
        // Handle the received user data as needed
        console.log("User data:", data.data);
      } else {
        throw new Error("User not found");
      }
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage("Something went wrong while fetching user data");
    });
}
  const handleRegisterClick = () => {
    navigate("/Account");
  }
  
  return (
    <div className="registerform--container">
      <div>
        <Navbar/>
      </div>
      <div className="registerform">
        <form onSubmit={handleSubmit}>
          <h2 className="registerform--title">Login</h2>
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
          <h4>Not yet registered? <a className="registerform--toggle" onClick={handleRegisterClick}>Register here</a></h4>
          <br />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="resgisterform--onsubmit-container">
            <button className="registerform--onsubmit">Login</button>
          </div>
        </form>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}
