import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search'
import logo from './images/Stellar-Craftz.png';
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";


export default function AppbarDesktop({ matches }) {

   const { setShowSearchBox } = useUIContext();

   return (
      <AppbarContainer>
         <AppbarHeader><img style={{ width: '100%', height: 'auto', maxWidth: '150px' }} src={logo} alt="website logo" /></AppbarHeader>
         <MyList type='row'>
            <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/'>Home</Link>} />
            <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/products/3d-art'>3D-Art</Link>} />
            <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/music-frames'>Music Frames</Link>} />
            <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/products/mugs'>Mugs</Link>} />
            <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/contact-us'>Contact us</Link>} />
            <ListItemButton>
               <ListItemIcon>
                  <SearchIcon onClick={() => setShowSearchBox(true)} />
               </ListItemIcon>
            </ListItemButton>
         </MyList>
         <Actions matches={matches} />
      </AppbarContainer>
   );
}