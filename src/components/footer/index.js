import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTF } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

export default function Footer() {
   return (
      <Box
         sx={{
            background: Colors.dark,
            color: Colors.white,
            borderTop: `3px solid ${Colors.primary}`,
            p: { xs: 4, md: 10},
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px'}
         }}
      >
         <Grid
            container 
            spacing={2} 
            justifyContent="center"
         >
            <Grid item md={6} lg={3}>
               <FooterTitle sx={{textDecoration: 'underline'}} variant="body1">About me</FooterTitle>
               <Typography variant="caption2">
                  Creating new things from scratch has always been a passion of mine. 
                  Crafting has given me the freedom to express my personal style and share it with the world.
               </Typography>
               <Box
                  sx={{
                     mt: 4,
                     color: Colors.light 
                  }}
               >
                  <FacebookIcon sx={{mr: 1}}/>
                  <TwitterIcon sx={{mr: 1}} />
                  <InstagramIcon />
               </Box>
            </Grid>
            <Grid item md={3} lg={2}>
               <FooterTitle sx={{textDecoration: 'underline'}} variant="body1">information</FooterTitle>
               <List>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        3-D Art
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        Music Frames
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        Mugs
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        Privacy &amp; Policy
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        Terms &amp; Conditions
                     </Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={3} lg={2}>
            <FooterTitle sx={{textDecoration: 'underline'}} variant="body1">my account</FooterTitle>
            <List>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        Login
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        My Cart
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        My Account
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">
                        My Favorites
                     </Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={6} lg={3}>
            <FooterTitle sx={{textDecoration: 'underline'}} variant="body1">newsletter</FooterTitle>
            <Stack>
               <SubscribeTF
                  color="secondary"
                  label="Email address"
                  variant="standard"
               />
                  <Button
                     startIcon={<SendIcon sx={{ color: Colors.dark }} />}
                     sx={{mt: 4, mb: 4}}
                     variant="contained"
                  >
                     Subscribe
                  </Button>
            </Stack>
            </Grid>
         </Grid>
      </Box>
   )
}