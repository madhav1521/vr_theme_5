import * as React from 'react';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ButtonGroup, Icon } from '@mui/material'
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { myTheme } from '../myTheme';

export default function LoginForm() {
//   const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
const navigate = useNavigate();
const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <TextField
                autoComplete="given-name"
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                variant="standard"
                className="text"
                color="warning"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                variant="standard"
                className="text"
                color="warning"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                variant="standard"
                color="warning"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="warning"
                variant="standard"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>

          <Button
                    type="submit"
                    fullWidth
                    disableElevation
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textDecoration:'none'}}
                    className='login-btn'
                    onClick={()=>{navigate('/dashboard') }}
                >
                    Sign Up <SendIcon sx={{ ml: 2 }}/>
                </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
