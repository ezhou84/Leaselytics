import React from 'react';
import background from "./images/LandingBackground.jpg";
import logo from './images/whiteLogoFull.png';
import Login2 from './Login2.js';


function Landing() {

  const containerStyle = {
    position: 'relative',
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7917760854341737) 21%, rgba(255,255,255,0) 100%), url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: '20px',
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
    fontSize: '7rem',
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '2rem',
  };


  const textContainer = {
    width: "900px",
  }

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={textContainer}>
        <h1 style={headingStyle}>Price your rental with confidence</h1>
        <p style={paragraphStyle}>
          Intelligent long-term rental pricing in a single click.
          Solidify your pricing decisions to list quickly and maximize your suite's potential. </p>
      </div>
      <Login2 />
    </div>
  );
}

export default Landing;