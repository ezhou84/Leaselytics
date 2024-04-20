import React, { useState, useEffect } from "react";
import "./App.css";
import FiltersForm from "./components/FiltersForm.js";
import Block from "./components/Block.js";
import logoSvg from "./LeaseLyticsLogoBlue.svg";
import { jwtDecode } from "jwt-decode";
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./components/Landing.js";
import Login from "./components/Login.js";

const theme = createTheme({
  typography: {
    fontFamily: '"Oxygen", "Manrope", Arial, sans-serif',
  },
});

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleResponse = (req, newResponse) => {
    setRequest(req);
    setResponse(newResponse);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "80%",
          }}
        >
          {isLoggedIn ? (
            <>
              <div className="form">
                <img
                  src={logoSvg}
                  alt="Logo"
                  style={{ width: "60%", height: "auto" }}
                />
                <FiltersForm onResponse={handleResponse} />
              </div>
              <div className="block">
                {Object.keys(response).length > 0 && (
                  <Block request={request} response={response} />
                )}
              </div>
            </>
          ) : (
            <LandingPage onLogin={handleLogin}/>
          )}
          {/* <div className="form">
            <img src={logoSvg} alt="Logo" style={{ width: '60%', height: 'auto' }} />
            <FiltersForm onResponse={handleResponse} />
          </div>
          <div className="block">
            {Object.keys(response).length > 0 && <Block request={request} response={response} />}
          </div> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
