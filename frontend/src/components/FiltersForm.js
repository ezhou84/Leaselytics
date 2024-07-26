import React from 'react';
import {
  TextField,
  Button,
  Grid,
  FormControl,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { fetchPrice } from '../api/api-client.js';

const FiltersForm = ({ onResponse }) => {
  const [neighbourhood, setNeighbourhood] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [bed, setBed] = React.useState(0);
  const [bath, setBath] = React.useState(0);
  const [type, setType] = React.useState('');
  const [sqft, setSqft] = React.useState(0);

  const handleNeighbourhoodChange = (event) => {
    setNeighbourhood(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBedChange = (event) => {
    setBed(event.target.value);
  };

  const handleBathChange = (event) => {
    setBath(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSqftChange = (event) => {
    setSqft(event.target.value);
  };

  async function onSubmit(neighbourhood, location, bed, bath, type, sqft) {
    const req = {
      "neighbourhood": neighbourhood,
      "location": location,
      "bed": bed,
      "bath": bath,
      "type": type,
      "sqft": sqft
    }
    const res = await fetchPrice(req);
    onResponse(req, res);
  }

  const neighbourhoods = [
    "Arbutus",
    "Cambie",
    "Champlain Heights",
    "Coal Harbour",
    "Collingwood",
    "Downtown East",
    "Downtown West",
    "Dunbar",
    "Fairview",
    "False Creek",
    "Fraser East",
    "Fraserview East",
    "Grandview East",
    "Hastings",
    "Hastings Sunrise",
    "Killarney",
    "Kerrisdale",
    "Kitsilano",
    "Knight",
    "MacKenzie Heights",
    "Main",
    "Marpole",
    "Mount Pleasant East",
    "Mount Pleasant West",
    "Oakridge",
    "Point Grey",
    "Quilchena",
    "Renfrew",
    "Shaughnessy",
    "South Cambie",
    "South Granville",
    "Southlands",
    "South Marine",
    "South Vancouver",
    "Southwest Marine",
    "Strathcona",
    "University (UBC)",
    "Victoria East",
    "West End",
    "Yaletown"
  ];

  const types = [
    "Apt/Condo",
    "House",
    "Duplex",
    "Room Only",
    "Townhouse"
  ];

  return (
    <Box className="form-content" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ margin: '20px', fontSize: 24, color: 'text.secondary', fontWeight: 'bold' }}>
        PROPERTY PRICE PREDICTOR
      </Typography>

      <Grid container spacing={2} sx={{ px: '20px' }}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="Neighbourhood-label">Neighbourhood</InputLabel>
            <Select
              labelId="Neighbourhood-label"
              label="Neighbourhood"
              value={neighbourhood}
              defaultValue="Neighbourhood"
              onChange={handleNeighbourhoodChange}
            >
              {neighbourhoods.map((neighbourhood) => (
                <MenuItem key={neighbourhood} value={neighbourhood}>
                  {neighbourhood}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <TextField
            fullWidth
            label="Address"
            defaultValue=""
            sx={{ my: 2 }}
            value={location}
            onChange={handleLocationChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <TextField
            fullWidth
            type="number"
            label="Bedrooms"
            sx={{ my: 2 }}
            value={bed}
            defaultValue=""
            onChange={handleBedChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <TextField
            fullWidth
            type="number"
            label="Bathrooms"
            sx={{ my: 2 }}
            value={bath}
            defaultValue=""
            onChange={handleBathChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
              {types.map((type, index) => (
                <MenuItem key={index} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <TextField
            fullWidth
            label="Square Footage"
            sx={{ my: 2 }}
            value={sqft}
            defaultValue=""
            onChange={handleSqftChange}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          my: 2,
          backgroundColor: '#4877ee',
          '&:hover': {
            backgroundColor: '#1e3264'
          },
          margin: '20px'
        }}
        onClick={() => {
          // Check if sufficient number of credits, and if so, deduct a certain number of credits
          onSubmit(neighbourhood, location, bed, bath, type, sqft)
        }}>
        <b>Generate Prediction</b>
      </Button>
    </Box>
  );
};

export default FiltersForm;
