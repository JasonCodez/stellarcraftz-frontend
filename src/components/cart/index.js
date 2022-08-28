import { Avatar, Button, Divider, Drawer, Paper, Typography, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import useCart from "../../hooks/useCart";
import { useEffect } from "react";

export default function Cart(product) {

   const {cart, setShowCart, showCart } = useUIContext();
   const { addToCart, addToCartText } = useCart(product);
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   const cartContent = cart.map(item => (
      <Box key={item.id}>
         <Box
            display='flex'
            sx={{ pt: 2, pb: 2}}
            alignItems='start'
            justifyContent={'space-between'}
         >
            <Avatar 
               src={item.image} 
               sx={{width: 96, height: 96, mr: 2}}
               variant="square"    
            />
            <Box
               display='flex'
               flexDirection='column'
            >
               <Typography variant="h6">{item.prod_name}</Typography>
               { !matches && <Typography variant="subtitle2">{item.description}</Typography>}
            </Box>
            <Typography variant="body1" justifyContent={'end'}>${item.price}</Typography>
         </Box>
         { matches && <Typography variant="subtitle2">{item.description}</Typography>}
         <Divider sx={{ mt: 1}} />
      </Box>
   ));
   
   return (
      <Drawer 
         open={showCart}
         onClose={() => setShowCart(false)}
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
            sx={{ p: 4}}
            display="flex"
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
         >
            <Typography variant="h4">
               {cart.length ? 'Your cart' : 'Your cart is empty'}
            </Typography>
            <Typography variant="body1" color={Colors.dark}>
               {cart.length 
                  ? 'These items are currently in your shopping cart'
                  : null
               }
               
            </Typography>
            <Paper
               elevation={0}
               sx={{
                  mt: 2,
                  width: '90%',
                  padding: 4
               }}
            >
               {cartContent}
            </Paper>
            {
               cart.length ?
               <Button sx={{ mt: 4, background: Colors.dark, color: Colors.white }} variant="contained">Checkout</Button>
               : null
            }
         </Box>
         <Button sx={{ color: Colors.dark }} onClick={() => setShowCart(false)}>Close</Button>
      </Drawer>
   )
}