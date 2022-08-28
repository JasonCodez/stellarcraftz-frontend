import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import axios from 'axios';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import { Colors } from "../../styles/theme";
 

export default function ShadowBox() {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   const [products, setProducts] = useState([]);

   useEffect(() => {

      const shadowbox = async () => {
         let results = await axios.get('http://localhost:3001/products/shadowbox');
         setProducts(results.data);
      }
      shadowbox()
   }, [])

   const renderProducts = products.map((box) => (
      <Grid 
         item
         xs={2}
         sm={4}
         md={4}
         key={box.id} 
         display="flex" 
         flexDirection={"column"}
         alignItems="center"
      >
         {matches ? (
         <SingleProduct product={box} matches={matches} />
         ) : (
            <SingleProductDesktop product={box} matches={matches} />
         )}
      </Grid>
   ));

   return (
      <>
      
      <Container>
      <Box display="flex" justifyContent={"center"} sx={{ p: 4, color: `${Colors.dark}` }}>
         <Typography variant="h4">3D-Art</Typography>
      </Box>
         <Grid
            container
            spacing={{ xs: 2, md: 3}}
            justifyContent={"center"}
            sx={{margin: '20px 4px 10px 4px'}}
            columns={{xs: 4, sm: 8, md: 12}}
         >
            {renderProducts}
         </Grid>
      </Container>
      </>
      
   );
}