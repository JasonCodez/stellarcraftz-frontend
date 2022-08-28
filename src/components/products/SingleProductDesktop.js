import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip, Zoom } from "@mui/material";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModel";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";


export default function SingleProductDesktop({product, matches}) {

   const [showOptions, setShowOptions] = useState(false);

   const [
      ProductDetailDialog, 
      showProductDetailDialog, 
      closeProductDetailDialog
   ] = useDialogModal(ProductDetail);

   const { addToCart, addToCartText } = useCart(product);

   const handleMouseEnter = () => {
      setShowOptions(true);
   }

   const handleMouseLeave = () => {
      setShowOptions(false);
   }

   return (
      <>
         <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <Tooltip 
               title="Add to favorites" 
               placement="right"
               TransitionComponent={Zoom}
               arrow
            >
               <ProductFavButton isFav={0}>
                  <FavoriteIcon />
               </ProductFavButton>
            </Tooltip>
            
            {showOptions && <ProductAddToCart onClick={addToCart} show={showOptions} variant="contained">
               { addToCartText }
            </ProductAddToCart>}
            <ProductActionWrapper show={showOptions}>
               <Stack direction='column'>
                  <Tooltip 
                     title="Share" 
                     placement="right" 
                     TransitionComponent={Zoom}
                     arrow
                  >
                     <ProductActionButton>
                        <ShareIcon />
                     </ProductActionButton>
                  </Tooltip>
                  <Tooltip 
                     title="Details" 
                     placement="right"
                     TransitionComponent={Zoom} 
                     arrow
                  >
                     <ProductActionButton onClick={() => showProductDetailDialog()}>
                        <FitScreenIcon />
                     </ProductActionButton>
                  </Tooltip>
               </Stack>
            </ProductActionWrapper>
         </Product>
         <ProductMeta product={product} matches={matches} />
         <ProductDetailDialog product={product} />
      </>
   )
}