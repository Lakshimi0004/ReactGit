import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // State to control the success message

  const handleLogin = () => {
    console.log('Login Successfully!!!');
    console.log('Email:', email);
    console.log('Password:', password);
    setShowSuccess(true); // Set showSuccess to true to display the success message
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: '#093637' }}>
          Login
        </Typography>
        {showSuccess && ( // Display the success message if showSuccess is true
          <Alert severity="success">
            Login Successfully!!!
          </Alert>
        )}
         <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: '#f3e5f5' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: '#f3e5f5' }}
          />
<Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#093637',
              color: 'white',
              '&:hover': {
                backgroundColor: '#44A08D',
              },
              '&:focus': {
                backgroundColor: '#44A08D',
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Link href="#" variant="body2" 
          sx={{
            mt: 3,
            mb: 2,
            color: '#093637',
            '&:hover': {
              color: '#44A08D',
            },
            '&:focus': {
              color: '#44A08D',
            },
          }}>
            Forgot Password?<br></br>
          </Link>
          <Link
          component={RouterLink}
      to="/signup"
      variant="body2"
      sx={{
        mt: 3,
        mb: 2,
        color: '#093637',
        '&:hover': {
          color: '#44A08D',
        },
        '&:focus': {
          color: '#44A08D',
        },
      }}>
          Don't have an account?</Link>
        </Box>

      </Box>
    </Container>
  );
};

export default Login;
