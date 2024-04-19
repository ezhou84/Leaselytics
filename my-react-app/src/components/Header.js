import React, { useState } from 'react';import { 
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    MenuItem 
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logoSvg from '../LeaseLyticsLogoBlue.svg';

const options = ['Profile', 'View Predictions', 'Sign Out'];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      case 'View Predictions':
        // Add your code for 'View Predictions' here
        break;
      case 'Sign Out':
        // Add your code for 'Sign Out' here
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static" color="primary" sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
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
