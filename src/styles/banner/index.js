import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({theme}) => ({
   display: 'flex',
   justifyContent: 'center',
   borderRadius: '5px',
   border: `3px solid ${Colors.dark}`,
   overflow: 'hidden',
   background: Colors.white,
}));

export const BannerImage = styled('img')(({src, theme}) => ({
   src: `url(${src})`,
   width: '100%'
}));