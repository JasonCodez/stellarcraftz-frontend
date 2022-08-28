import { styled } from "@mui/system";
import { Colors } from "../theme";
import { Box, Button, IconButton } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({theme}) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   [theme.breakpoints.up('md')]: {
      position: 'relative'
   }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
   
      src: `url(${src})`,
      width: '70%',
      padding: '10px',
      border: `1px solid ${Colors.dark}`,
      borderRadius: '7px',
   [theme.breakpoints.down('md')]: {
      width: '60%'
   },
}));

export const ProductActionButton = styled(IconButton)(({ theme }) => ({
   
   background: Colors.dark,
   color: Colors.white,
   "&:hover": {
      background: Colors.dark,
      color: Colors.primary
   },
   margin: 4,
   [theme.breakpoints.down('md')]: {
      padding: 5,
   }
}));

export const ProductFavButton = styled(ProductActionButton, {
   shouldForwardProp: (prop) => prop !== 'isFav'
} )(({ isFav, theme }) => ({
   
   color: isFav ? Colors.favorite : Colors.light,
   [theme.breakpoints.up('md')]: {
      "&:hover": {
         color: Colors.favorite
      },
      position: 'absolute',
      right: 20,
      top: -20,
   },
}));



export const ProductAddToCart = styled(Button, {
   shouldForwardProp: (prop) => prop !== 'show'
})(({show, theme}) => ({

   width: '80%',
   fontSize: '.8rem',
   border: `2px solid ${Colors.dark}`,
   [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: '1%',
      width: '130px',
      padding: '10px 5px',
      animation: 
         show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
   },
   [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: '1%',
      width: '170px',
      padding: '10px 5px',
      animation: 
         show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
   },
   background: Colors.primary,
   color: Colors.black,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
   padding: 4,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}));

export const ProductActionWrapper = styled(Box, {
   shouldForwardProp: (prop) => prop !== 'show'
})(({show, theme }) => ({
   [theme.breakpoints.up('md')]: {
      display: show ? 'visible' : 'none',
      position: 'absolute',
      right: 20,
      top: 28,
      animation:
         show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
   }
}));