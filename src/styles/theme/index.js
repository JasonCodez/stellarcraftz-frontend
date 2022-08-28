import { createTheme } from "@mui/material/styles";

// Theme colors
export const Colors = {
   primary: '#80CED7',
   secondary: '#CCDBDC',
   favorite: '#DB2763',
   success: '#14DDAC',
   info: '#9AD1D4',
   danger: '#D90429',
   warning: '#F4A261',
   dark: '#222E50',
   light: '#AAA',
   border: '#F7F0F0',
   // Grays
   light_gray: '#ADB5BD',
   dark_gray: '#495057',
   body_bg: '#E9ECEF',
   // Solids
   white: '#FFF',
   black: '#000'
};

const theme = createTheme({
   palette: {
      primary: {
         main: Colors.primary
      },
      secondary: {
         main: Colors.secondary
      }
   },

   components: {
      MuiButton: {
         defaultProps: {
            disableElevation: true,
            disableRipple: true
         },
      },
      MuiDrawer: {
         styleOverrides: {
            paper: {
               width: 250,
               background: Colors.white,
               color: Colors.dark,
               borderRadius: '0px 100px 0px 0px',
               borderRight: `2px solid ${Colors.dark}` 
            },
         },
      },
      MuiDivider: {
         styleOverrides: {
            root: {
               borderColor: Colors.dark
            }
         }
      },
      
   }
   
});

export default theme;