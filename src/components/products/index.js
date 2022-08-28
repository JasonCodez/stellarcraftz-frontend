import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   const [products, setProducts] = useState([]);

   useEffect(() => {
      const allProducts = async () => {
         let results = await axios.get('http://localhost:3001/products');
         setProducts(results.data);
      }
      allProducts();
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
      <Container>
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
   );
}