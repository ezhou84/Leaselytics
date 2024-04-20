import React, { useState, useEffect } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import { jwtDecode } from "jwt-decode";
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header.js';
import LandingPage from './components/Landing.js';
import Login from './components/Login.js';

const theme = createTheme({
  typography: {
    fontFamily: '"Oxygen", "Manrope", Arial, sans-serif',
  },
});

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [parentPrediction, setParentPrediction] = useState(null);
  const [savedPredictions, setSavedPredictions] = useState({});


  const handleResponse = (req, newResponse) => {
    setRequest(req);
    setResponse(newResponse);
    setParentPrediction(null);
  };

  const handleLocationChange = (headerPrediction) => {
    setParentPrediction(headerPrediction);
  }

  const appendPrediction = (newPrediction) => {
    setSavedPredictions((prevPredictions) => ({
      ...prevPredictions,
      [newPrediction.req.location]: newPrediction
    }));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Header onLocationChange={handleLocationChange} locations={Object.keys(savedPredictions)}/>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '80%' }}>
            <div className="form">
                <FiltersForm onResponse={handleResponse} />
            </div>
            {
              Object.keys(response).length > 0 && 
              <div className="block">
                <Block request={request} response={response} appendPrediction={appendPrediction} parentPrediction={parentPrediction} savedPredictions={savedPredictions} />
              </div>
            }
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
