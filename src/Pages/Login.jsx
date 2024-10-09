// Pages/Login.jsx

import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebfcff',
      }}
    >
      <Box
        sx={{
          width: '300px',
          padding: '2rem',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <img
            src={logo}
            alt='Logo'
            style={{
              width: '150px',
              margin: '0 auto', // Centers the logo inside the Box
            }}
          />
        </Box>

        <TextField
          fullWidth
          label='Email'
          variant='outlined'
          margin='normal'
        />

        <Typography
          sx={{
            color: '#002366',
            textAlign: 'right',
            fontSize: '0.8rem',
            cursor: 'pointer',
          }}
        >
          Forgot password?
        </Typography>

        <Button
          fullWidth
          variant='contained'
          sx={{
            backgroundColor: '#002366',
            color: '#fff',
            marginTop: '1rem',
            '&:hover': { backgroundColor: '#001b4e' },
          }}
        >
          Next
        </Button>

        <Typography
          sx={{
            textAlign: 'center',
            margin: '1rem 0',
            color: '#aaa',
          }}
        >
          or
        </Typography>

        <Button
          fullWidth
          variant='outlined'
          sx={{
            borderColor: '#002366',
            color: '#002366',
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
