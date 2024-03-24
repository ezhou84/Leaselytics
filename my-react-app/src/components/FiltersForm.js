import React from 'react';
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Slider,
  Box,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const FiltersForm = () => {
  const [bedrooms, setBedrooms] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');


  const handleBedroomChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathrooms(event.target.value);
  };



  return (

    <Box sx={{ margin: '20px', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6">Property Rentals</Typography>

      <TextField
          label="Neighbourhood"
          sx={{ my: 2 }}
      />

      <TextField
        label="Location"
        defaultValue="Vancouver, British Columbia"
        sx={{ my: 2 }}
      />

      <TextField
          label="Bedrooms"
          sx={{ my: 2 }}
          value={bedrooms}
          defaultValue=""
          onChange={handleBedroomChange}
      />

      <TextField
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
        // onChange={handleRentalTypeChange}
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
      />

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default FiltersForm;
