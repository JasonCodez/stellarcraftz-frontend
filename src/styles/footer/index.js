import styled from "@emotion/styled";
import { SvgIcon, TextField, Typography } from "@mui/material";
import { Colors } from "../theme";


export const FooterTitle = styled(Typography)(() => ({
   textTransform: 'uppercase',
   marginBottom: '1em'
}));

export  const SubscribeTF = styled(TextField)(() => ({
   '.MuiInputLabel-root': {
      color: Colors.white
   },

   '.MuiInput-root::before': {
      borderBottom: `1px solid ${Colors.white}`
   },
   '.MuiInputBase-input': {
      color: Colors.white
   }
}));