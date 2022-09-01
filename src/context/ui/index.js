import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [showSearchBox, setShowSearchBox] = useState();
   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [formDataLogin, setFormDataLogin] = useState({
      username: "",
      password: ""
   });
   const [formDataRegister, setFormDataRegister] = useState({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: ""
   })


   const value = {
      drawerOpen,
      setDrawerOpen,
      showSearchBox,
      setShowSearchBox,
      cart,
      setCart,
      showCart,
      setShowCart,
      showLogin,
      setShowLogin,
      formDataLogin,
      setFormDataLogin,
      formDataRegister,
      setFormDataRegister
   }

   return <UIContext.Provider value={value} >{ children }</UIContext.Provider>
}