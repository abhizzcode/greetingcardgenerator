import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import generateGreetingCard from '../utils/greetingCardUtils';

function GreetingCardForm() {
  const [recipientName, setRecipientName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [characterTraits, setCharacterTraits] = useState('');
  const [greetingCardText, setGreetingCardText] = useState('');

  const handleSubmit = () => {
    const greetingCardText = generateGreetingCard(recipientName, occasion, characterTraits);
    setGreetingCardText(greetingCardText);
    console.log(greetingCardText);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Recipient Name"
            variant="outlined"
            fullWidth
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Occasion"
            variant="outlined"
            fullWidth
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Character Traits"
            variant="outlined"
            fullWidth
            value={characterTraits}
            onChange={(e) => setCharacterTraits(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      {greetingCardText && (
        <div>
        <Typography variant="h6" style={{ marginBottom: '20px' }}>Generated Greeting Card:</Typography>
        <Typography variant="body1" paragraph>
          {greetingCardText.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
      </div>
      
      )}
    </div>
  );
}

export default GreetingCardForm;
