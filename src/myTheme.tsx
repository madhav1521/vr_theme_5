import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Palette } from '@mui/icons-material';

const secondaryMain = '#ADADAD';
const secondaryLight = '#3E3E3E';
const secondaryDark = '#000000';
const primaryMain = "#C8242F";
const primaryLight = "#FFF3F4";

export const mytheme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "sans-serif",
    ].join(','),

  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color:secondaryMain,
          "&.Mui-focused": {
            color:secondaryMain,
          }
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {

          "&.login-container": {
            padding: "30px",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "@media (max-width:899px)": { justifyContent: "center", maxWidth: "100%", },
            "@media (max-width:599px)": { padding: "15px", },
          },
          "&.login-left": {
            padding: "40px 0px 30px 137px",
            position: "relative",
            "@media (max-width:1199px)": { padding: "40px 0px 30px 20px", },
            "@media (max-width:899px)": { display: "none", },
          },
          "&.login-right": {
            maxWidth: "524px",
            "@media (max-width:899px)": { justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "80%", },
            "@media (max-width:599px)": { maxWidth: "100%", },
          },
          "&.login-name": {
            "@media (max-width:899px)": {
              justifyContent: "center",
              display: "flex",
              // maxWidth:"100%",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto', sans-serif",
          "&.login-heading": {
            fontSize: "40px",
            fontWeight: "300",
            marginBottom: "37px",
            color:secondaryLight,
            "@media (max-width:1199px)": {
              fontSize: "35px",
            },
            "@media (max-width:899px)": {
              fontSize: "30px",
              textAlign: "center",
            },
            "@media (max-width:599px)": {
              fontSize: "28px",
            },
          },
          "&.subheading": {
            fontSize: "25px",
            color:secondaryLight,
            marginBottom: "24px",
            "@media (max-width:599px)": {
              fontSize: "20px",
            },
          },
          "&.fp": {
            marginLeft: "157px",
            color:secondaryMain,
            "@media (max-width:599px)": {
              margin: 0,
            },
          },
          "&.login": {
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
          },
          "&.reg-here": {
            fontSize: "15px",
            fontWeight: "400",
            color:secondaryMain,
            display: "flex",
          },
          "&.profile-name": {
            fontSize: "16px",
            fontWeight: "400",
            color:secondaryDark,
            textTransform:"capitalize",
            marginLeft:"12px",
            marginRight:"11px",
          },
          "&.text-default": {
            fontSize: "16px",
            fontWeight: "400",
            color:secondaryLight,
            textTransform:"capitalize",
            marginLeft:"10px",
            
          },

        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            color:secondaryDark,
          },
          "&:focus": {
            color:secondaryDark,
          },
          "&:active": {
            color:secondaryDark,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          
          "&.login-btn": {
            padding: "12px 46px",
            borderRadius: "50px",
            "@media (max-width:599px)": {
              padding: "6px 30px",
            },
          },
          "&.menu": {
            alignItems:"center",
            backgroundColor:"transparent",
            "&:hover":{
              backgroundColor:primaryLight,
            },
            "&:focus":{
              backgroundColor:primaryLight,
            },
            "&:active":{
              backgroundColor:primaryLight,
            },
          },
          "&.btn-close-search": {
            display:"none",
            "@media (max-width:599px)": {
              display:"block",
            },
          },
          "&.search-btn": {
            display:"none",
            "@media (max-width:599px)": {
              display:"block",
            },
          },

        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px",
        },
        input: {
          padding: "0 0 0 14px",
          height: "50px",
          color:secondaryMain,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color:secondaryDark,
        },
      },
    },
  },
});
