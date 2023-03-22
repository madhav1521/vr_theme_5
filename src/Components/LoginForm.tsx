import { Box, Button, Grid, Link, TextField, Typography, IconButton,Input,InputAdornment,InputLabel, FormControl, } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <Typography component="h3" variant="h5" className="login-head">
        Log In into your account
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} marginTop={1}>
        <Grid container>
          <Grid item lg={12} >
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="First Name"
              variant="standard"
              color="warning"
              autoFocus
            />
          </Grid>

          <Grid item lg={12} className="text">
          <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      fullWidth
                      color="warning"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff color="warning"/> : <Visibility color="warning"/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          disableElevation
          variant="contained"
          className="login-btn"
          onClick={() => {navigate("/dashboard");}}
        >
          LOG IN
        </Button>

        <Grid container justifyContent="flex-start" className="fp" >
          <Grid item>
            <Link href="#" variant="body2">
              Forget Password?
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </div>
  );
}
