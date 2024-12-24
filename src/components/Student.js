import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
  const paperStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '500px',
    backgroundColor: '#f5f5f5',
  };
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student added")
      })
    }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'skyblue' }}>
          <u>Add Student</u>
        </h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="student-name"
            label="Student Name"
            variant="standard"
            fullWidth
            value={name} // Ovo je sada ispravno unutar TextField-a
            onChange={(e) => setName(e.target.value)} // Ovdje je također unutar TextField-a
          />
          <TextField
            id="student-address"
            label="Student Address"
            variant="standard"
            fullWidth
            value={address} // Isto i ovdje
            onChange={(e) => setAddress(e.target.value)} // Isto i ovdje
          />
          <Button
      variant="contained" onClick={handleClick}
      sx={{
        backgroundColor: 'skyblue',
        '&:hover': {
          backgroundColor: 'blue',
        },
      }}
    >
      Submit
    </Button>
        </Box>
      </Paper>
    </Container>
  );
}

