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
import logoSvg from '../leaselyticsWhite.svg';

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


    <Box className="form-content" sx={{ margin: '20px', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column' }}>

      <Typography variant="h6">Property Price Predictor</Typography>

      <TextField
        label="Neighbourhood"
        sx={{ my: 2 }}
      />

      {/* <TextField
        label="Location"
        defaultValue="Vancouver, British Columbia"
        sx={{ my: 2 }}
      /> */}

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

      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#4877ee', // sets the background color to black
          '&:hover': {
            backgroundColor: '#1e3264' // optional: changes color slightly on hover for visual feedback
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FiltersForm;
