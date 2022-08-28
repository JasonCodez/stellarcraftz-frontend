import { 
   Button, 
   Dialog, 
   DialogContent, 
   DialogTitle, 
   IconButton, 
   Slide, 
   styled, 
   Typography, 
   useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products";
import IncDec from "../ui";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import useCart from "../../hooks/useCart";


function SlideTransition(props) {
   return <Slide direction="down" { ...props } />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
   display: 'flex',
   padding: theme.spacing(4)
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   maxWidth: 500,
   lineHeight: 1.5
}));

export default function ProductDetail({ open, onClose, product }) {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   const { addToCart, addToCartText } = useCart(product);
   
   return (
      <Dialog
         TransitionComponent={SlideTransition}
         variant="permanent"
         open={open}
         fullScreen
      >
         <DialogTitle
            sx={{
               background: Colors.secondary
            }}
         >
            <Box
               display={'flex'}
               alignItems='center'
               justifyContent={"space-between"}
            >
               {product.prod_name}
               <IconButton onClick={onClose}>
                  <CloseIcon />
               </IconButton>

            </Box>

         </DialogTitle>
         <DialogContent>
            <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
               <Product sx={{ mr: 4 }}>
                  <ProductImage src={product.image} />
               </Product>
               <ProductDetailInfoWrapper>
                  <Typography variant="subtitle1" sx={{ mt: 4}}>SKU 123</Typography>
                  <Typography variant="subtitle1">Availability: 5 in stock</Typography>
                  <Typography sx={{ lineHeight: 2 }} variant="h4">
                     {product.prod_name}
                  </Typography>
                  <Typography variant="body">
                     {product.description}
                  </Typography>
                  <Box 
                     sx={{ mt: 4 }}
                     display='flex'
                     alignItems="center"
                     justifyContent={"space-between"}
                  >
                     <IncDec />
                     <Button onClick={addToCart} variant="contained">{addToCartText}</Button>
                  </Box>
                  <Box 
                     display='flex'
                     alignItems={'center'}
                     sx={{ mt: 4, color: Colors.dark }}
                  >
                     <FavoriteIcon sx={{mr: 2, color: Colors.light_gray}}/>
                     Add to Favorites
                  </Box>
                  <Box 
                     display='flex'
                     alignItems={'center'}
                     sx={{ mt: 2, color: Colors.dark }}
                  >
                     <ShareIcon sx={{mr: 2, color: Colors.light_gray}}/>
                     Share this Product
                  </Box>
                  <Box 
                     display='flex'
                     alignItems={'center'}
                     sx={{ mt: 2, color: Colors.dark }}
                  >
                     <FacebookIcon sx={{mr: 2, color: Colors.light_gray}}/>
                     <TwitterIcon sx={{mr: 2, color: Colors.light_gray}}/>
                     <InstagramIcon sx={{mr: 2, color: Colors.light_gray}}/>
                  </Box>
               </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
         </DialogContent>
      </Dialog>
   )
}