import React from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm';
import Block from './components/Block';
import logoSvg from './LeaseLyticsLogoBlue.svg';
import ListingsCard from './components/ListingsCard';
import unit1 from "./unit_images/2107_928_HOMER_STREET.jpg"

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
      <div>
        <ListingsCard
          address="2107 928 HOMER STREET"
          price="$2,950"
          imagePath={unit1}
          bed="1"
          bath="1"
        />
      </div>
    </div>
  );
}

export default App;
