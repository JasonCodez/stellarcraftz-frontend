
import { Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BannerContainer } from "../../../styles/banner";

const bannerImages = [
   {
      src: "/images/banners/sc-shadowbox-banner.png",
      alt: "shadowbox banner"
   },
   {
      src: "/images/banners/sc-mugs-banner.png",
      alt: "mugs banner"
   },
   {
      src: "/images/banners/sc-music-frame-banner.png",
      alt: "music frame banner"
   }
];



export default function Slider({ theme }) {
   const containerRef = useRef();
   const [bannerIndex, setBannerIndex] = useState(0);
   const [show, setShow] = useState(true);

   useEffect(() => {

      setTimeout(() => {
         setShow(false)
      }, 4000);

      const intervalId = setInterval(() => {
         setBannerIndex((i) => (i + 1) % bannerImages.length);

         setShow(true);

         setTimeout(() => {
            setShow(false)
         }, 4000);
      }, 5000);

      return () => {
         clearInterval(intervalId);
      }
   }, [])

   return (
      <BannerContainer>
         <Slide
            container={containerRef.current}
            direction={show ? "left" : "right"}
            in={show}
            timeout={{
               enter: 500,
               exit: 500
            }}
         >
            <img style={{width: "100%"}} src={bannerImages[bannerIndex].src} alt={bannerImages[bannerIndex].alt}/>
         </Slide>
      </BannerContainer>
   )
}