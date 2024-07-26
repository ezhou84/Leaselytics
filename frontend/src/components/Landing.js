import React from 'react';
import background from "./images/LandingBackground.jpg";
import logo from './images/whiteLogoFull.png';
import Login from './Login.js';


function Landing() {

  const containerStyle = {
    position: 'relative',
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7917760854341737) 21%, rgba(255,255,255,0) 100%), url(${background})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '100px 10% 40px',
    boxSizing: 'border-box',
    overflowY: 'auto',
  };

  const contentWrapper = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '250px',
    height: 'auto',
  };

  const headingStyle = {
    color: 'white',
    fontSize: '5rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  };

  const paragraphStyle = {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '2rem',
    textAlign: 'center',
    width: '80%',
  };


  const textContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const loginContainerStyle = {
    width: '100%',
    maxWidth: '600px',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={contentWrapper}>
        <div style={textContainer}>
          <h1 style={headingStyle}>Price your rental with confidence</h1>
          <p style={paragraphStyle}>
            Intelligent long-term rental pricing in a single click.
            Solidify your pricing decisions to list quickly and maximize your suite's potential.
          </p>
        </div>
        <div style={loginContainerStyle}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Landing;