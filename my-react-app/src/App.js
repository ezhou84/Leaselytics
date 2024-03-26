import React from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import logoSvg from './LeaseLyticsLogoBlue.svg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <img src={logoSvg} alt="Logo" style={{ width: '400px', height: 'auto' }} /> {/* Add your desired width and height */}
          <FiltersForm></FiltersForm>
        </div>
        <div className="block">
          <Block></Block>
        </div>

      </div>
    </div>
  );
}

export default App;
