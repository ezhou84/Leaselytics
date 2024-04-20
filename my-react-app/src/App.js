import React, { useState, useEffect } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import { jwtDecode } from "jwt-decode";
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header.js';

const theme = createTheme({
  typography: {
    fontFamily: '"Oxygen", "Manrope", Arial, sans-serif',
  },
});

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});
  const [user, setUser] = useState({});
  const [parentPrediction, setParentPrediction] = useState(null);
  const [savedPredictions, setSavedPredictions] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    // show option to sign-in button
    document.getElementById("signInDiv").hidden = false;
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1000336939480-fgfku4o35kcj9n7tadb47ujdi5q3t5c9.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

  // if we have no user: show sign-in button
  // if we have a user: show log-out button

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

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <div id="signInDiv"></div>
        {Object.keys(user).length != 0 &&
            <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        { user &&
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
        }             */}
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
