import React from 'react';
import GreetingCardForm from './components/GreetingCardForm';
import { Container, CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className="App">
        <Typography variant="h6" gutterBottom>
          Greeting Card Generator
        </Typography>
        <GreetingCardForm />
      </div>
    </Container>
  );
}

export default App;
