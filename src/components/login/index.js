import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { Box } from "@mui/system";
import { 
   Button, 
   Dialog, 
   DialogContent,
   DialogContentText, 
   TextField,
   DialogActions,
   DialogTitle, 
   Slide, 
   styled, 
   Typography, 
   useMediaQuery } from "@mui/material";

export default function Login() {

   const {formData, setFormData } = useUIContext();
   const [open, setOpen] = useState(false);
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   function SlideTransition(props) {
      return <Slide direction="down" { ...props } />
   }

   const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  

   return (
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
   )
}