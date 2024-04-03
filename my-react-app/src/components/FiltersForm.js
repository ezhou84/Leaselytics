import React from 'react';
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import logoSvg from '../leaselyticsWhite.svg';
import { fetchPrice } from '../api-client.js';



const FiltersForm = ({ onResponse }) => {
  const [neighbourhood, setNeighbourhood] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [bedrooms, setBedrooms] = React.useState(0);
  const [bathrooms, setBathrooms] = React.useState(0);
  const [type, setType] = React.useState('');
  const [sqft, setSqft] = React.useState(0);


  const handleNeighbourhoodChange = (event) => {
    setNeighbourhood(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBedroomChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathrooms(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSqftChange = (event) => {
    setSqft(event.target.value);
  };

  async function onSubmit(neighbourhood, location, bedrooms, bathrooms, type, sqft) {
    // console.log(neighbourhood)
    // console.log(location)
    // console.log(bedrooms)
    // console.log(bathrooms)
    // console.log(type)
    // console.log(sqft)
    const req = {
      "neighbourhood": neighbourhood,
      "location": location,
      "bedrooms": bedrooms,
      "bathrooms": bathrooms,
      "type": type,
      "sqft": sqft
    }
    const resp = await fetchPrice(req);
    // console.log("FiltersForm response: " + resp)
    onResponse(req, resp);

  }

  return (

    <Box className="form-content" sx={{ margin: '20px', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column' }}>

      <Typography variant="h6">Property Price Predictor</Typography>

      {/* <TextField
        label="Neighbourhood"
        sx={{ my: 2 }}
        value={neighbourhood}
        defaultValue=""
        onChange={handleNeighbourhoodChange}
      /> */}

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="Neighbourhood-label">Neighbourhood</InputLabel>
        <Select
          labelId="Neighbourhood-label"
          label="Neighbourhood"
          value={neighbourhood}
          defaultValue="Neighbourhood"
          onChange={handleNeighbourhoodChange}
        >
          <MenuItem value="Cambie">Cambie</MenuItem>
          <MenuItem value="Coal Harbour">Coal Harbour</MenuItem>
          <MenuItem value="Collingwood">Collingwood</MenuItem>
          <MenuItem value="Downtown East">Downtown East</MenuItem>
          <MenuItem value="Downtown West">Downtown West</MenuItem>
          <MenuItem value="Dunbar">Dunbar</MenuItem>
          <MenuItem value="Fairview">Fairview</MenuItem>
          <MenuItem value="False Creek">False Creek</MenuItem>
          <MenuItem value="Grandview East">Grandview East</MenuItem>
          <MenuItem value="Hastings">Hastings</MenuItem>
          <MenuItem value="Hastings Sunrise">Hastings Sunrise</MenuItem>
          <MenuItem value="Killarney">Killarney</MenuItem>
          <MenuItem value="Kerrisdale">Kerrisdale</MenuItem>
          <MenuItem value="Kitsilano">Kitsilano</MenuItem>
          <MenuItem value="Knight">Knight</MenuItem>
          <MenuItem value="Marpole">Marpole</MenuItem>
          <MenuItem value="Mount Pleasant East">Mount Pleasant</MenuItem>
          <MenuItem value="Oakridge">Oakridge</MenuItem>
          <MenuItem value="Point Grey">Point Grey</MenuItem>
          <MenuItem value="Renfrew">Renfrew</MenuItem>
          <MenuItem value="Shaughnessy">Shaughnessy</MenuItem>
          <MenuItem value="South Granville">South Granville</MenuItem>
          <MenuItem value="South Marine">South Marine</MenuItem>
          <MenuItem value="South Vancouver">South Vancouver</MenuItem>
          <MenuItem value="Southwest Marine">Southwest Marine</MenuItem>
          <MenuItem value="Strathcona">Strathcona</MenuItem>
          <MenuItem value="University (UBC)">University/UBC</MenuItem>
          <MenuItem value="Victoria East">Victoria</MenuItem>
          <MenuItem value="West End">West End</MenuItem>
          <MenuItem value="Yaletown">Yaletown</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Address"
        defaultValue=""
        sx={{ my: 2 }}
        value={location}
        onChange={handleLocationChange}
      />

      <TextField
        type="number"
        label="Bedrooms"
        sx={{ my: 2 }}
        value={bedrooms}
        defaultValue=""
        onChange={handleBedroomChange}
      />

      <TextField
        type="number"
        label="Bathrooms"
        sx={{ my: 2 }}
        value={bathrooms}
        defaultValue=""
        onChange={handleBathroomChange}
      />

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="RentalType-label">Rental Type</InputLabel>
        <Select
          labelId="RentalType-label"
          id="RentalType-select"
          label="RentalType"
          value={type}
          defaultValue=""
          onChange={handleTypeChange}
        >
          <MenuItem value="apartment/condo">Apartment/condo</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Room Only">Room Only</MenuItem>
          <MenuItem value="Townhouse">Townhouse</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Square Footage"
        sx={{ my: 2 }}
        value={sqft}
        defaultValue=""
        onChange={handleSqftChange}
      />

      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#4877ee',
          '&:hover': {
            backgroundColor: '#1e3264'
          },
        }}
        onClick={() => {
          onSubmit(neighbourhood, location, bedrooms, bathrooms, type, sqft)
        }}>
        Submit
      </Button>

      {/* <div>
        {response === "" ? response : <></>}
      </div> */}
    </Box>

  );
};

export default FiltersForm;
