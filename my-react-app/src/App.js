import React, { useState } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import logoSvg from './LeaseLyticsLogoBlue.svg';
import { useEffect } from 'react';

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState('');

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
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
  }, []);

  const handleResponse = (req, newResponse) => {
    console.log("App req:")
    console.log(req)
    console.log(`App newResponse: ${newResponse}`)
    setRequest(req);
    setResponse(newResponse);
    console.log("response: " + response);
  };

  return (
    <div className="App">
      <div id="signInDiv"></div>
      <div className="container" style={{ width: '100%' }}>
        <div className="form">
          <img src={logoSvg} alt="Logo" style={{ width: '400px', height: 'auto' }} />
          <FiltersForm onResponse={handleResponse} />
        </div>
        <div className="block">
          {response != '' && <Block request={request} response={response} />}
          {/* {response != '' && <Block response={response} />} */}
        </div>
      </div>
    </div>
  );
}

export default App;
