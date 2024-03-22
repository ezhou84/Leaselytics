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
  const [bedrooms, setBedrooms] = React.useState('all');
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
        label="Location"
        defaultValue="Vancouver, British Columbia"
        sx={{ my: 2 }}
      />

      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Price Range
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField label="Min Price" type="number" sx={{ mr: 1 }} />
          <TextField label="Max Price" type="number" />
        </Box>
      </Box>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="bedroom-label">Bedrooms</InputLabel>
        <Select
          labelId="bedroom-label"
          id="bedroom-select"
          value={bedrooms}
          label="Bedrooms"
          onChange={handleBedroomChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="1+">1+</MenuItem>
          <MenuItem value="2+">2+</MenuItem>
          <MenuItem value="3+">3+</MenuItem>
          <MenuItem value="4+">4+</MenuItem>
          <MenuItem value="5+">5+</MenuItem>
          <MenuItem value="6+">6+</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ my: 2 }}>
        <InputLabel id="bathrooms-label">Bathrooms</InputLabel>
        <Select
          labelId="bathrooms-label"
          id="bathrooms-select"
          defaultValue=""
          label="Bathrooms"
          onChange={handleBathroomChange}
        >
          <MenuItem value={"1+"}>1+</MenuItem>
          <MenuItem value={"1.5+"}>1.5+</MenuItem>
          <MenuItem value={"2+"}>2</MenuItem>
          <MenuItem value={"3+"}>3</MenuItem>
          <MenuItem value={"4+"}>4</MenuItem>
          <MenuItem value={"5+"}>5</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Square meters
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField label="Min" type="number" sx={{ mr: 1 }} />
          <TextField label="Max" type="number" />
        </Box>
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default FiltersForm;
