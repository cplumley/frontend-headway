import { Container } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <header
      style={{
        backgroundColor: 'slateblue',
        height: '5rem',
        color: 'white',
      }}>
      <Container
        maxWidth='lg'
        sx={{ display: 'grid', alignItems: 'center', textAlign: 'center' }}>
        <h1>Shurly</h1>
      </Container>
    </header>
  );
};

export default NavBar;
