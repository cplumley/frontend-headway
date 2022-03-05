import { Button, Grid } from '@mui/material';
import React from 'react';
import hero from '../../assets/person.png';

const HeroImage = () => {
  return (
    <Grid container spacing={2} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid item xs={12} md={6} sx={{ my: { xs: 3, md: 15 } }}>
        <h2>Welcome to Shurly</h2>
        <p>
          We are so excited that you are here. Copy your link below to get your
          unique shortened url
        </p>
        <Button variant='contained' sx={{ backgroundColor: 'slateblue' }}>
          Sign up for free
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sx={{ my: { xs: 5, md: 15 } }}>
        <img src={hero} alt='Happy Person' />
      </Grid>
    </Grid>
  );
};

export default HeroImage;
