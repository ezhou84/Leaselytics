import React, { useState } from 'react';import { 
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    MenuItem,
    Select
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logoSvg from './images/LeaseLyticsLogoBlue.svg';

const options = ['Profile', 'Sign Out'];

function Header({ onLocationChange, locations }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [currentPrediction, setCurrentPrediction] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (option) => {
    switch (option) {
      case 'Profile':
        // Add your code for 'Profile' here
        break;
      case 'Sign Out':
        // Add your code for 'Sign Out' here
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };

  const handleLocationClick = (location) => {
    setCurrentPrediction(location);
    onLocationChange(location);
  }

  return (
    <AppBar position="static" color="primary" sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: 'flex' ,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >   
            <img src={logoSvg} alt="Logo" style={{ width: '60%', height: 'auto' }} />
          </Typography>

          { /* Keep the profile picture fixed to the right side */ }
          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="h6" component="div" sx={{ color: 'text.secondary', fontWeight: 'bold', mr: 2 }}>
            View Predictions
          </Typography>

          <Select
            value={currentPrediction}
            sx={{ mr: 2 }}
          >
            {locations.map((location) => (
              <MenuItem 
                key={location}
                value={location}
                onClick={() => handleLocationClick(location)}
              >
                {location}
              </MenuItem>
            ))}
          </Select>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle sx={{ fontSize: 40 }} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {options.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
