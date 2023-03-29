import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Palette } from '@mui/icons-material';

const primaryMain = "#C8242F";
const secondaryMain = '#ADADAD';
const primaryLight = "#F6F6F6";
const secondaryLight = '#3E3E3E';
const secondaryDark = '#000000';
const white = "#FFFFFF";
const orange = "#F16C20";
const green = "#A2B86C";
const yellow = "#EBC844";


export const mytheme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    warning:{
      main:secondaryMain,
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
          marginBottom:"4px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:1199px)": {maxWidth: "1310px", },
          "@media (max-width:599px)": {padding:"0" },
          "&.login-container": {
            padding: "30px",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            "@media (max-width:899px)": { justifyContent: "center", maxWidth: "100%", },
            "@media (max-width:599px)": { padding: "15px", },
          },
        },
      },
    },
    // MuiGrid: {
    //   styleOverrides: {
    //     root: {
    //       "&.login-name": {
    //         "@media (max-width:899px)": {
    //           justifyContent: "center",
    //           display: "flex",
    //         },
    //       },  
    //     },
    //   },
    // },
    MuiCard:{
      styleOverrides:{
        root:{
          "&.users-page":{
            padding:"25px 30px 0",
            "@media (max-width:899px)": {
              padding:"20px 15px",
            },
          },
          "&.sales-card":{
            padding:"25px 30px 13px",
            height:"100%",
            "@media (max-width:899px)": {
              padding:"24px 15px 30px",
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
              maxWidth:"525px",
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
            "@media(max-width:599px)":{
              marginLeft:0,
            }
          },
          "&.card-text": {
            fontSize: "15px",
            fontWeight: "400",
            color:secondaryLight,
            lineHeight:"18px",
            marginLeft:"27px",
            position:"relative",
            whiteSpace:"nowrap",
            "@media(max-width:599px)":{
              marginLeft:0,
              
            }
          },
          "&.props": {
            position:"relative",
            marginBottom:"20px",
            // "&::before":{
            //   content:"", 
            //   position: "absolute",
            //   borderRadius: "50px", 
            //   left:"-26px", 
            //   width:"18px",
            //   height:"18px",
            // },
          },
          "&.america":{
            marginRight:"40px",
            "@media(max-width:599px)":{
              marginRight:"50px",
              
            },
            "&:before":{
              backgroundColor:primaryMain,
            },
          },
          "&.russia":{
            marginRight:"50px",
            "&:before":{
              backgroundColor:orange,
            },
          },
          "&.canada":{
            "&:before":{
              backgroundColor:green,
            },
          },
          "&.india":{
            "&:before":{
              backgroundColor:yellow,
            },
          },
          
          "&.frequency": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"22px",
              color:secondaryLight,
          },
          "&.inner-heading:not(:first-child)": {
              fontSize:"22px",
              fontWeight:"500",
              lineHeight:"26px",
              color:secondaryLight,
              marginTop: "46px",
              marginBottom: "16px",
          },
          "&.inner-heading:first-child": {
              fontSize:"22px",
              fontWeight:"500",
              lineHeight:"26px",
              color:secondaryLight,
              marginBottom: "15px",
          },
          "&.inner-heading:last-child": {
              fontSize:"22px",
              fontWeight:"500",
              lineHeight:"26px",
              color:secondaryLight,
              marginTop: "46px",
              marginBottom: "24px",
          },
          "&.inner-head": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"21px",
              color:secondaryLight,
              marginBottom:"16px",
          },
          "&.file-upload": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"21px",
              color:secondaryLight,
              marginBottom:"16px",
              paddingTop:"10px"
          },
          "&.option-head": {
              fontSize:"18px",
              fontWeight:"500",
              lineHeight:"21px",
              color:secondaryLight,
              marginBottom:"11px",
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
          "&.sales-text": {
              fontSize:"22px",
              fontWeight:"500",
              lineHeight:"28px",
              color:secondaryLight,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          fontWeight: "400",
          lineHeight:"18px",
          height:"46px",
          borderBottom: "1px solid #E9E9E9",
        },
        body: {
          color: secondaryLight,
        },
        head: {
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
          "&.fp": {
            color:secondaryMain,
            fontSize:"15px",
            fontWeight:"400",
            lineHeight:"20px",
            textDecoration: "none",
          },
          "&.register": {
            color:primaryMain,
            fontSize:"15px",
            fontWeight:"400",
            lineHeight:"20px",
            textDecoration: "none",
          },
          "&.views":{
            fontSize:"12px",
            fontWeight:"400",
            lineHeight:"16px",
            textDecoration: "none",
            padding:"5px",
            borderRadius:"5px",
            "&:hover": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
            "&:focus": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
            "&:active": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },

          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.tabs":{
            padding:"5px",
            borderRadius:"5px",
            "&:hover": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
            "&:focus": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
            "&:active": {
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding:"6px 10px",
          "&.toggle-icon":{
            minWidth:"35px",
            marginLeft:"19px",
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
          
          "&.upload-btn": {
            borderRadius: "50px",
            minWidth:"125px",
          },
          "&.login-btn": {
            padding: "12px 30px",
            height:"45px",
            borderRadius: "50px",
            minWidth:"138px",
            "&:hover":{
              color:white,
            },
            "&:focus":{
              color:white,
            },
            "&:active":{
              color:white,
            },
            "@media (max-width:599px)": {
              padding: "6px 30px",
              minWidth:"100px",
            },
          },
          "&.bell":{
            padding:"10px 0",
            marginRight:"20px",
            minWidth:"45px",
            "&:hover":{
              borderRadius:"50px",
              backgroundColor:primaryLight,
            },
            "&:focus":{
              borderRadius:"50px",
              backgroundColor:primaryLight,
            },
            "&:active":{
              borderRadius:"50px",
              backgroundColor:primaryLight,
            },
            "@media(max-width:599px)":{
              marginRight:"10px",
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
            "@media (max-width:899px)": {
              padding:"6px 10px",
            },
          }, 
          "&.search-btn": {
            display:"none",
            padding:"12px 12px 6px",
            "&:hover":{
              backgroundColor:primaryLight,
            },
            "&:focus":{
              backgroundColor:primaryLight,
            },
            "&:active":{
              backgroundColor:primaryLight,
            },
            "@media (max-width:899px)": {
              display:"block",
              position:"relative",
            },
          },
          "&.secondary-btn, &.primary-btn": {
            marginLeft:"20px",
            padding: "12px 30px",
            textDecoration: "none",
            borderRadius:"50px",
            textTransform:"Capitalize",
            height:"45px",
            minWidth:"124px",
            fontSize:"18px",
            lineHeight:"24px",
            fontWeight:500,
            "@media (max-width:899px)": {
              padding: "6px 25px",
              minWidth:"100px",
              fontSize:"16px",
              lineHeight:"22px",
              fontWeight:400,
            },
          },
      },
    },
  },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px",
          padding:"0px 14px 0 0",  
          borderRadius:"5px",
          "&.Mui-disabled":{
              "& .MuiOutlinedInput-notchedOutline":{
                border: "1px dashed",
              }
          },
          ".MuiSvgIcon-root":{
              width:"20px",
              height:"20px",
          }
        },
        input: {
          padding: "13.5px 14px 13.5px 14px",
          color:secondaryLight,
        },
        focused:{
          border:"1px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
              padding:"14px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          // display:"none",
          opacity:0,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root":{
            width:"16px",
            height:"16px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root":{
            width:"16px",
            height:"16px",
            // backgroundImage:'url(./Assets/Images/check-nextTick.svg)',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding:"10px",
          
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root:{
          '& .MuiMenu-list':{
             padding:"10px 10px 5px",
            
          },
          ' .MuiPaper-root':{
              marginTop:"0", 
              boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.07)",
              borderRadius:"0",
              minWidth:"139px",
          },
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
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexWrap:"wrap",
          "&.MuiTabs-indicator":{
            height:"3px",
            marginBottom:"-1px",
            bottom:"3px",
            zIndex:10,
          },
        },
        root:{
          minHeight:"15px",
          '&.inner-tabs':{
            '.MuiTabs-flexContainer':{
              borderBottom:'1px solid',
              borderColor:secondaryMain,
            }
          },
          '&.dash-tabs':{
            '.MuiTabs-flexContainer':{
              borderBottom:'none',
            }
          }
        },
        
        indicator:{
            height:"3px",
            marginBottom:"-1px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight:"15px",
          fontSize:"12px",
          fontWeight:"400",
          color:secondaryMain,
          padding:"5px 0",
          // padding:"5px",
          borderRadius:"5px",
          textTransform:"capitalize",
          minWidth:"max-content",
          marginLeft:"20px",
          "&:hover":{
            color:secondaryDark,
            backgroundColor:primaryLight,
          },
          "&:focus":{
            color:primaryMain,
          },
          "&:active":{
            color:secondaryDark,
            backgroundColor:primaryLight,
          },
          "&.tabs":{
            fontSize:"15px",
            fontWeight:"400",
            color:secondaryMain,
            padding:"12px 16px",
            textTransform:"capitalize",
            minWidth:"max-content",
            marginRight:"2px",
            marginLeft:0,
            "&:hover":{
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
            "&:focus":{
              color:primaryMain,
              backgroundColor:secondaryMain,
            },
            "&:active":{
              color:secondaryDark,
              backgroundColor:primaryLight,
            },
          },
          "&.tabs.Mui-selected":{
            color:primaryMain,
          },
        },
      },
    },
  },
});
