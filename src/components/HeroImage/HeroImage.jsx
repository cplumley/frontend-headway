import { Button, Grid } from '@mui/material';
import React from 'react';

const HeroImage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} sx={{ my: 15 }}>
        <h2>Welcome to Shurly</h2>
        <p>
          We are so excited that you are here. Copy your link below to get your
          unique shortened url
        </p>
        <Button variant='contained' sx={{ backgroundColor: 'slateblue' }}>
          Sign up for free
        </Button>
      </Grid>
      <Grid item xs={12} md={4} sx={{ my: 15 }}>
        Image
      </Grid>
    </Grid>
  );
};

export default HeroImage;
