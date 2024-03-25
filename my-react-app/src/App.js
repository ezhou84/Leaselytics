import React from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm';
import Block from './components/Block';
import logoSvg from './LeaseLyticsLogoBlue.svg';
import Listings from './components/Listings';
import unit1 from "./unit_images/2107_928_HOMER_STREET.jpg"
import unit2 from "./unit_images/303_1985_W_8TH_AVENUE.jpeg"
import unit3 from "./unit_images/3F_2338_WESTERN_PARKWAY.jpeg"
import unit4 from "./unit_images/311_1050_BROUGHTON_STREET.jpeg"

function App() {
  const units = [
    {
      address: "2107 928 HOMER STREET",
      city: "",
      price: "$2,950",
      imagePath: unit1,
      bed: 1,
      bath: 1
    },
    {
      address: "303 1985 W 8TH AVENUE",
      city: "",
      price: "$2,750",
      imagePath: unit2,
      bed: 1,
      bath: 1
    },
    {
      address: "3F 2338 WESTERN PARKWAY",
      city: "",
      price: "$3,850",
      imagePath: unit3,
      bed: 2,
      bath: 2
    },
    {
      address: "311 1050 BROUGHTON STREET",
      city: "",
      price: "$3,500",
      imagePath: unit4,
      bed: 1,
      bath: 1
    }
  ]
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
        <Listings
          units={units}
        />
      </div>
    </div>
  );
}

export default App;
