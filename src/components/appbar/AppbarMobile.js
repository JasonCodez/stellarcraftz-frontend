import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/Stellar-Craftz.png";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function AppbarMobile({ matches }) {

   const { setDrawerOpen, setShowSearchBox } = useUIContext();

   return (
     <AppbarContainer>
         <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
         </IconButton>
         <AppbarHeader textAlign={"center"} variant="h4">
            <img style={{width: '100%', height: 'auto', maxWidth: '100px'}} src={logo} alt="website logo" />
         </AppbarHeader>
         <IconButton>
            <SearchIcon onClick={() => setShowSearchBox(true)}/>
         </IconButton>
         <Actions matches={matches} />
     </AppbarContainer> 
   );
}