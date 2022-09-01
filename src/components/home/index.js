import Banner from "../appbar/banner/index";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import SingleProduct from "../products/SingleProduct";
import SingleProductDesktop from "../products/SingleProductDesktop";
import axios from 'axios';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import { Colors } from "../../styles/theme";

export default function Home() {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   const [featured, setFeatured] = useState([]);

   useEffect(() => {

      const featured = async () => {
         let results = await axios.get('http://localhost:3001/products');
         setFeatured(results.data);
      }
      featured()
   }, [])

   const renderProducts = featured.map((box) => (
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
      <Banner />
      <Container>
         <Box display="flex" justifyContent={"center"} sx={{ p: 4, color: `${Colors.dark}` }}>
         <Typography variant="h4">Featured Products</Typography>
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