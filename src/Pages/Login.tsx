import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router";
import { cmp_logo, login_image, login_net } from "../Assets/Images";

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
      <React.Fragment>
        <CssBaseline />
        <Container className="login-container">
          <Grid container alignItems="center">
            <Grid item xs={0} md={6} >
              <Box className="login-left">
                  <img src={login_image}
                    alt=""
                    loading="lazy"
                    className="login-img"
                  />
                  <img src={login_net}
                    alt=""
                    loading="lazy"
                    className="login-net"
                  />


              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="login-right">
                <img src={cmp_logo} alt="logo" className="logo" />
                <Typography variant="h1" component="h2" className="login-heading">
                  We are <strong className="strong-text">experts</strong> in
                  business, marketing, growth, & sales.
                </Typography>
                <Typography variant="h5" component="h3" className="subheading">
                  Login into your account
                </Typography>
                <Box className="login-name">
                  <Grid container>
                    <Grid item xs={12} md={10} marginBottom="26px">
                      <TextField
                        label="Username"
                        type="text"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} md={10} >
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
                                {showPassword ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />

                        <Box className="btn-line">
                          <Button
                            type="submit"
                            disableElevation
                            variant="contained"
                            className="login-btn"
                            onClick={() => {
                              navigate("/dashboard");
                            }}
                          >
                            <Typography
                              variant="body1"
                              component="span"
                              className="login"
                            >
                              Login
                            </Typography>
                          </Button>
                          <Link href="#" className="fp">
                            Forgot Password?
                          </Link>
                        </Box>

                        <Typography variant="body1" component="h6" className="reg-here">
                          Are you a new Member? <Link href="#" className="register">Register here</Link>
                        </Typography>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
