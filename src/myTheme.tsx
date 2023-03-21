import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Palette } from '@mui/icons-material';

export const mytheme = createTheme({
    components: {
        MuiInputLabel:{
          styleOverrides:{
            root:{
              color:"#ADADAD ",
              "&.Mui-focused":{
                color:"#ADADAD ",
              }
            },
          },
        },
    },

  palette: {
    primary: {
      main:"#C8242F",
    },

    secondary: {
      main:'#ADADAD',
    },
  },
});
