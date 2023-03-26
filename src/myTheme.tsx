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
          },
          
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
    MuiGrid: {
      styleOverrides: {
        root: {
          
          "&.login-container": {
            padding: "30px",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
          "&.card": {
              marginBottom:"30px",
              // padding:"24px 30px 30px",
              // maxWidth:"100%",
              // backgroundColor:"#fff"
            },  
          "&.sales": {
              // marginRight:"30px",
              // backgroundColor:"#fff"
              // maxHeight:"100vh",
            },  
          "&.sticker": {
              justifyContent: "center",
              alignItems:"center",
              padding:"34px",
              maxWidth:"100%",
              borderRight:"1px solid #E6E6E6"
            },  
        },
        // item:{
        //   "&.text.Mui-InputLabel-root":{
        //     "&.Mui-focused":{

        //       color:secondaryMain,
        //     },
        //   },
        // },
      },
    },
    MuiCard:{
      styleOverrides:{
        root:{
          "&.users-page":{
            padding:"30px",
          },
          "&.sales-card":{
            padding:"24px 30px 30px",
            height:"100%",

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
            "@media (max-width:599px)":{
              display:"none",
            },
            
          },
          "&.text-default": {
            fontSize: "16px",
            fontWeight: "400",
            color:secondaryLight,
            textTransform:"capitalize",
            marginLeft:"10px",
          },
          "&.page-title": {
            fontSize: "30px",
            fontWeight: "500",
            color:secondaryDark,
            textTransform:"capitalize",
            marginBottom:"23px",
            lineHeight:"35px",
          },
          "&.card-numbers": {
            fontSize: "25px",
            fontWeight: "500",
            color:secondaryLight,
            lineHeight:"30px",
            marginLeft:"28px",
          },
          "&.card-text": {
            fontSize: "15px",
            fontWeight: "400",
            color:secondaryLight,
            lineHeight:"18px",
            marginLeft:"28px",
            position:"relative",
          },
          "&.amc": {
            marginBottom:"20px",
          },
          "&.frequency": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"22px",
              color:secondaryLight,
            
          },
          "&.inner-heading": {
              fontSize:"22px",
              fontWeight:"500",
              lineHeight:"26px",
              color:secondaryLight,
              marginTop: "50px",
              marginBottom: "27px",
          },
          "&.inner-head": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"21px",
              color:secondaryLight,
              marginBottom:"16px",
          },
          "&.nis": {
              fontSize:"12px",
              fontWeight:"400",
              lineHeight:"15px",
              color:secondaryMain,
              marginLeft:"15px",
          },
          "&.tab-text": {
              fontSize:"15px",
              fontWeight:"400",
              lineHeight:"24px",
              color:secondaryLight,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          height:"47px",
          borderBottom: "1px solid #E9E9E9",
        },
        body: {
          fontSize: "15px",
          fontWeight: "400",
          color: secondaryLight,
        },
        head: {
          fontSize: "15px",
          fontWeight: "400",
          color: secondaryMain,
          textTransform: "uppercase",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
           marginTop:"25px",
           overflowX:"auto",
           whiteSpace:"nowrap",
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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // padding:0,
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
          "&.toggle-icon":{
            "&:hover":{
              backgroundColor:secondaryMain,
            },
          },
          
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
              backgroundColor:secondaryMain,
            },
            "&:focus":{
              backgroundColor:secondaryMain,
            },
            "&:active":{
              backgroundColor:secondaryMain,
            },
            "@media (max-width:899px)": {
              padding:"6px 10px",
            },
          }, 
          "&.search-btn": {
            display:"none",
            "@media (max-width:899px)": {
              display:"block",
              position:"relative",
            },
          },
          "&.prim-sec": {
            marginBottom:"36px",
            padding: "12px 30px",
            textDecoration: "none",
            borderRadius:"50px",
            textTransform:"Capitalize",
          },

        
      },
    },
  },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px",
          padding:0,  
          borderRadius:"5px",
          "&.Mui-disabled":{
              "& .MuiOutlinedInput-notchedOutline":{
                border: "1px dashed",
              }
          },
        },
        input: {
          padding: "13.5px 14px 13.5px 14px",
          color:secondaryLight,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          display:"none",
          
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          
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
    // MuiTabs: {
    //   styleOverrides: {
    //     flexContainer: {
    //       "&.css-1h3ydo0-MuiButtonBase-root-MuiTab-root":{
    //         fontSize:"15px",
    //         fontWeight:"400",
    //         color:secondaryMain,
    //         padding:0,
    //         textTransform:"capitalize",
    //         minWidth:"max-content",
    //         marginRight:"20px",
    //       },
    //     },
    //   },
    // },
    MuiTab: {
      styleOverrides: {
        root: {
          // "&.dash-tabs":{
            fontSize:"12px",
            fontWeight:"400",
            color:secondaryMain,
            padding:0,
            textTransform:"capitalize",
            minWidth:"max-content",
            marginLeft:"20px",

          // },
          "&.tabs":{
            fontSize:"15px",
            fontWeight:"400",
            color:secondaryMain,
            padding:"12px 16px",
            textTransform:"capitalize",
            minWidth:"max-content",
            marginRight:"20px",
            marginLeft:0,
          },
          "&.tabs.Mui-selected":{
            color:primaryMain,
          },
        },
      },
    },
  },
});
