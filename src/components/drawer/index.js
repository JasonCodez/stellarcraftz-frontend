import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";



const MiddleDivider = styled((props) => (
   <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

   const {drawerOpen, setDrawerOpen} = useUIContext();

   return (
      <>
         {drawerOpen && (
            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon
               sx={{
                  fontSize: '2.5rem',
                  color: Colors.white
               }}  
            />
         </DrawerCloseButton> 
         )};
         <Drawer open={drawerOpen}>
            <List>
               <ListItemButton>
                  <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/'>Home</Link>} />
               </ListItemButton>
               <MiddleDivider />
               <ListItemButton>
                  <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/products/3d-art'>3d-art</Link>} />
               </ListItemButton>
               <MiddleDivider />
               <ListItemButton>
               <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/products/music-frames'>Music Frames</Link>} />
               </ListItemButton>
               <MiddleDivider />
               <ListItemButton>
               <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/products/mugs'>Mugs</Link>} />
               </ListItemButton>
               <MiddleDivider />
               <ListItemButton>
               <ListItemText primary={<Link style={{textDecoration: 'none'}} to='/contact-us'>Contact us</Link>} />
               </ListItemButton>
               <MiddleDivider />
            </List>
         </Drawer>
      </>
   )
}