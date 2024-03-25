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
import { fetchPrice } from '../api-client';

async function onSubmit(neighbourhood, location, bedrooms, bathrooms, type, sqft, setResponse) {
  let resp = await fetchPrice({
    neighbourhood,
    location,
    bedrooms,
    bathrooms,
    type,
    sqft
  })
  setResponse(resp);
}

const FiltersForm = () => {
  const [neighbourhood, setNeighbourhood] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [bedrooms, setBedrooms] = React.useState(0);
  const [bathrooms, setBathrooms] = React.useState(0);
  const [type, setType] = React.useState('');
  const [sqft, setSqft] = React.useState(0);
  const [response, setResponse] = React.useState('');


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

  return (

    <Box className="form-content" sx={{ margin: '20px', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column' }}>

      <Typography variant="h6">Property Price Predictor</Typography>

      <TextField
        label="Neighbourhood"
          sx={{ my: 2 }}
          value={neighbourhood}
          defaultValue=""
          onChange={handleNeighbourhoodChange}
      />

      <TextField
        label="Location"
        defaultValue="Vancouver, British Columbia"
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
          backgroundColor: '#4877ee', // sets the background color to black
          '&:hover': {
            backgroundColor: '#1e3264' // optional: changes color slightly on hover for visual feedback
          },
        }}
        onClick={() => {
          onSubmit(neighbourhood, location, bedrooms, bathrooms, type, sqft, setResponse)
        }}>
        Submit
      </Button>

      <div>
        { response === "" ? response : <></> }
      </div>
    </Box>

  );
};

export default FiltersForm;
