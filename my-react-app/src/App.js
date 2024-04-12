import React, { useState } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import Login from './Login.js';
import logoSvg from './LeaseLyticsLogoBlue.svg';

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState('');

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
      <Login />
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
