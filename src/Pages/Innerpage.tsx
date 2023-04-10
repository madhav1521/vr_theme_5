import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Card, Checkbox, Radio, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography, useMediaQuery, useTheme, TextareaAutosize, OutlinedInput, Tabs, tabsClasses } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';
import { error, info, upload_icon, valid, warn } from '../Assets/Images';
import BasicTabs from '../Components/BasicTabs';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default function Innerpage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const ariaLabel = { 'aria-label': 'description' };

  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value as string);
  };
  const handleChange3 = (event: SelectChangeEvent) => {
    setAge3(event.target.value as string);
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
    <div>
      <div className="main-container">
        <Header />
        <div className="wrapper">
          <Sidebar />
          <div className="main-content">
            <Typography component="h2" variant="h3" className="page-title" marginBottom="23px">
              Analysis
            </Typography>
            {/* column 1 starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
            <Card elevation={0} className="users-page">
              <Typography component="h4" variant="h5" className="content-heading" marginBottom="15px">
                One Column
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    fullWidth
                    id="Name"
                    label="Name"
                    variant="outlined"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        value={age1}
                        onChange={handleChange1}
                        label="Dropdown"
                        fullWidth
                        className="login-select text"
                      >
                        <MenuItem value={10}>India</MenuItem>
                        <MenuItem value={7}>America</MenuItem>
                        <MenuItem value={8}>Africa</MenuItem>
                        <MenuItem value={9}>China</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    className="textarea"
                    id="outlined-multiline-static"
                    label="Text area"                    
                    type="textarea"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                </Grid>
              </Grid>
              {/* Column 2 starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography component="h4" variant="h5" className="content-heading" marginTop= "46px" marginBottom= "16px" >
                Two Column
              </Typography>
              <Grid container columnSpacing={4} rowSpacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="name"
                    name="Name"
                    fullWidth
                    id="Name"
                    label=" Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    defaultValue="jhondoe"
                    variant="outlined"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      type={showPassword1 ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword1}
                            onMouseDown={handleMouseDownPassword1}
                            edge="end"
                          >
                            {showPassword1 ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        value={age2}
                        onChange={handleChange2}
                        label="Dropdown"
                        fullWidth
                        className="login-select"
                      >
                        <MenuItem value={11}>India</MenuItem>
                        <MenuItem value={1}>America</MenuItem>
                        <MenuItem value={2}>Africa</MenuItem>
                        <MenuItem value={3}>China</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              {/* Column 3 starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography component="h4" variant="h5" className="content-heading" marginTop= "46px" marginBottom= "16px">
                Three Column
              </Typography>
              <Grid container columnSpacing={4} rowSpacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    autoComplete="given-name"
                    name="Focus"
                    fullWidth
                    id="focus"
                    label="Focus"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      type={showPassword2 ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword2}
                            edge="end"
                          >
                            {showPassword2 ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='disabled-box text'
                  >
                    <FormControl disabled fullWidth variant="outlined">
                      <InputLabel htmlFor="component-disabled">Disabled</InputLabel>
                      <OutlinedInput className='disabled' id="component-disabled" defaultValue="johndoe" label="Disabled" />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              {/* Column 4 starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography component="h4" variant="h5" className="content-heading" marginTop= "46px" marginBottom= "16px">
                Four Column
              </Typography>
              <Grid container columnSpacing={4} rowSpacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className='error-text'
                      error
                      fullWidth
                      id="outlined-error-helper-text"
                      label="Designation"
                      helperText="Enter Valid data"
                      variant="outlined"
                      autoComplete="email"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    autoComplete="name"
                    name="Name"
                    fullWidth
                    id="Name"
                    label=" Name"
                    variant="outlined"
                    helperText="Enter your full Name as per ID "
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>

                  <TextField
                    fullWidth
                    label="Username"
                    defaultValue="jhondoe"
                    variant="outlined"
                    autoComplete="name"
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                  <Box>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        value={age3}
                        onChange={handleChange3}
                        label="Select"
                        fullWidth
                        className="login-select"
                      >
                        <MenuItem value={10}>India</MenuItem>
                        <MenuItem value={7}>America</MenuItem>
                        <MenuItem value={8}>Africa</MenuItem>
                        <MenuItem value={9}>China</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              {/* Design elements starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography component="h4" variant="h5" className="content-heading" marginTop= "46px" marginBottom= "24px">
                Other Design Elements
              </Typography>
              <Typography variant="h6" className="inner-head file-upload">
                File Upload
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2} className="upload-content">
                <Button variant="outlined" component="label" className="upload-btn" >
                  <img src={upload_icon
                  } alt="upload files" /> &nbsp; Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Typography component="h4" variant="h6" className=" nis">
                  No item Selected
                </Typography>
              </Stack>
              <Typography variant="h6" className="inner-head" >
                Radio Button
              </Typography>

              <Grid item xs={12} >
                <FormControl className="radio-check" >
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Option 1" />&nbsp;&nbsp;&nbsp;
                    <FormControlLabel value="male" control={<Radio />} label="Option 2" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Typography variant="h6" className="inner-head">
                Check Box
              </Typography>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" />
                  }
                  label="Option 1"
                />&nbsp;&nbsp;&nbsp;
                <FormControlLabel
                  control={
                    <Checkbox color="primary" />
                  }
                  label="Option 2"
                />
              </Grid>
              {/* Snackbar starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography variant="h6" className="inner-head">
                Snackbar
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={4} className="validation-notes">
                <Grid item xs={12} sm={6}>
                  <Box className="text-message text-danger">
                    <img src={error} alt="" />
                    <Typography component="h6" variant="body2" className=' error-ic'>This is an error Message</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className="text-message text-info">
                    <img src={info} alt="" />
                    <Typography component="h6" variant="body2" className=' info-ic'>This is an information message!</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className="text-message text-warn">
                    <img src={warn} alt="" />
                    <Typography component="h6" variant="body2" className=' warn-ic'>This is a warning message!</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className="text-message text-success">
                    <img src={valid} alt="" />
                    <Typography component="h6" variant="body2" className=' valid-ic'>This is an Success message!</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="h6" className=" inner-head" >
                Call to Action
              </Typography>
              <Box className="cta-btn">
                <Button type="submit" disableElevation variant="contained" className="primary-btn" onClick={() => { navigate("/dashboard"); }} >
                  Primary
                </Button>
                <Button className="secondary-btn" variant="outlined" onClick={() => { navigate("/dashboard"); }} >
                  Secondary
                </Button>
              </Box>
              {/* Tabs starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
              <Typography variant="h6" className="inner-head">
                Tabs
              </Typography>
              <BasicTabs />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
