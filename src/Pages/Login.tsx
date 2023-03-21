import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router";
import { login_image, login_net } from "../Assets/Images";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      <Grid container  className="login-container" >
        <Grid item xs={0} sm={6} className="login-left">
          {/* <ImageList>
            <ImageListItem>
              <img src={login_net} alt="login-net" loading="lazy" className="login-net"/>
              <img src={login_image}alt="login-img"loading="lazy" className="login-img"/>
            </ImageListItem>
          </ImageList> */}
          <Box className="illustrator" >
            <img src={login_net} alt="" className="login-net" loading="lazy" />
            <img src={login_image} alt="" className="login-img" loading="lazy" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} className="login-right">
          <Typography variant="h3" component="h2" className="login-heading">
            We are{" "}
            <strong className="strong-text">
              experts
            </strong>{" "}
            in business, marketing, growth, & sales.
          </Typography>
          <Typography variant="h5" component="h5" className="login-heading">
            Login into your account
          </Typography>

          <TextField label="Username" type="text" autoFocus />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box>
            <Button
              type="submit"
              disableElevation
              variant="contained"
              className="login-btn"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              LOG IN
            </Button>
            <Typography
              variant="body1"
              component="h6"
              className="login-heading"
            >
              Forgot Password?
            </Typography>
          </Box>

          <Typography variant="body1" component="h6" className="login-heading">
            Are you a new Member? Register here
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
