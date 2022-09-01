import { FormControl, Button, Divider, Drawer, Paper, Typography, useMediaQuery, TextField, InputLabel, Input, FormHelperText } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import axios from "axios";


export default function Login() {

   const { 
      showLogin, 
      setShowLogin, 
      formDataLogin, 
      setFormDataLogin,
      formDataRegister,
      setFormDataRegister
   } = useUIContext();
   
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   
   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post()
      } catch (error) {
         
      }
   }

   return (
      <Drawer 
         open={showLogin}
         onClose={() => setShowLogin(false)}
         anchor="right"
         PaperProps={{
            sx: {
               width: matches ? '100%' : 500,
               color: Colors.dark,
               borderRadius: 0
            }
         }}
      >
         <Box
            component="form"
            sx={{ p: 4}}
            display="flex"
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
         >
            <Typography variant="h6">Sign in</Typography>
            <InputLabel  htmlFor="username">Username</InputLabel>
            <TextField
               id="username"
               variant="outlined"
               type="text"
               fullWidth
               required
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
               id="password"
               variant="outlined"
               type="password"
               fullWidth
               required
            />
            <Button sx={{mt:2}} variant="contained" fullWidth>Login</Button>
            <Divider sx={{ mt: 5}} />
            <Typography>Don't have an account?</Typography>
            <Divider sx={{ mt: 5}} />
            <Typography variant="h6">Register here</Typography>
            <Divider sx={{ mt: 5}} />
            <InputLabel htmlFor="username">Username</InputLabel>
            <TextField 
               id="username" 
               variant="outlined" 
               type="text"
               fullWidth
               required
            />
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <TextField 
               id="firstName" 
               variant="outlined" 
               type="text"
               fullWidth
               required
            />
            <InputLabel htmlFor="firstName">Last Name</InputLabel>
            <TextField 
               id="lastName" 
               variant="outlined" 
               type="text"
               fullWidth
               required
            />
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField 
               id="email" 
               variant="outlined" 
               type="text"
               fullWidth
               required
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField 
               id="password" 
               variant="outlined" 
               type="password"
               fullWidth
               required
            />
            <Button sx={{mt: 2}} variant="contained" fullWidth>Register</Button>
         </Box>
         <Button sx={{ color: Colors.dark }} onClick={() => setShowLogin(false)}>Close</Button>
      </Drawer>
   )
}