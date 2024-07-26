import React, { useState } from 'react';
import { Button, Typography, TextField, Card, CardContent } from '@mui/material';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle form submission, such as validation or sending data to a server
    console.log('Form submitted');
  };

  return (
    <Card style={{ minWidth: 275, maxWidth: 400, margin: 'auto', marginTop: 50 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        How many credits would you like to purchase?
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <TextField
          label="Amount (in cents)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{
          mt: 2,
          backgroundColor: '#4877ee',
          '&:hover': {
            backgroundColor: '#1e3264'
          },
        }}>
          Submit
        </Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
    </CardContent>
  </Card>
  );
};

export default SignupForm;
