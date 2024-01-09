import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
const Home = () => {
  // console.log(user)
  const [userData, setUserData] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 798);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 798);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLinkedInLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/linkedin");
      // Check if the response contains the LinkedIn authorization URL
      if (response && response.data && response.data.redirectURL) {
        // Redirect to the URL received from your backend
        window.location.href = response.data.redirectURL;
      } else {
        console.error("Invalid response received from the server");
        // Handle error - redirect to a different page or display an error message
      }
    } catch (error) {
      console.error("Error during LinkedIn login:", error);
      // Handle error
    }
  };
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="/image 5.png" alt="" />
        </div>
        <button style={{display:'flex',gap:"5px"}} onClick={handleLinkedInLogin} className="loginBtn">
        {isSmallScreen ? (
            <>
              <img src="/linkedin.svg" alt="" />
              Continue→
            </>
          ) : (
            "Continue with LinkedIn →"
          )}
        </button>
      </header>
      <div className="backgroundImage"></div>
      <div className="content">
        <button
          style={{
            display: "flex",
            gap: "10px",
            borderRadius: "1000px",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <img src="/linkedin.svg" alt="" /> for linkedin creaters only
        </button>
        <div className="text">
          <h1>
            Get Noticed! <br /> Let Brands Find YOU
          </h1>
          <p>
            Join the waitlist to get early access to premium brand deals and
            elevate your influence
          </p>
        </div>
      </div>
      <footer className="footer">
        <img src="/airplane.svg" alt="" />
        <p>Join the waitlist</p>
        <button>
          {" "}
          <img src="/linkedin.svg" alt="" /> Continue with Linkedin →
        </button>
      </footer>
    </div>
  );
};

export default Home;
