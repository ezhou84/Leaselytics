import React, { useState } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import logoSvg from './LeaseLyticsLogoBlue.svg';

function App() {
  const [response, setResponse] = useState('');

  const handleResponse = (newResponse) => {
    setResponse(newResponse);
    console.log("response: " + response);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <img src={logoSvg} alt="Logo" style={{ width: '400px', height: 'auto' }} />
          <FiltersForm onResponse={handleResponse} />
        </div>
        <div className="block">
          {response != '' && <Block response={response} />}
        </div>
      </div>
    </div>
  );
}

export default App;
