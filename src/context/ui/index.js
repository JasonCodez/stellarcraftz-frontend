import { createContext, useContext, useEffect, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [showSearchBox, setShowSearchBox] = useState();
   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [formData, setFormData] = useState({
      username: "",
      password: ""
   });


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
      formData,
      setFormData
   }

   return <UIContext.Provider value={value} >{ children }</UIContext.Provider>
}