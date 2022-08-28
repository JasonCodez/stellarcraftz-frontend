import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

export default function Appbar() {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('lg'));
   return (
      <>
         {matches ? 
         (<AppbarMobile matches={matches} />)
          : 
         (<AppbarDesktop matches={matches}/>)
         }
      </>
   );
}