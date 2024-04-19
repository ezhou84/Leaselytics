import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';

function LandingPage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Landing Page
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" align="center" gutterBottom>
                Welcome to Our Site
              </Typography>
              <Typography variant="subtitle1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit et ex
                placerat scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add any additional content here */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default LandingPage;
