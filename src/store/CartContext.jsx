import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalOrderAmt, setTotalOrderAmt] = useState(0);
  const addItem = (item) => {
    setTotalOrderAmt((currAmt) => currAmt + 1);
    setCartItems([...cartItems, item]);
  };
  const removeItem = (item) => {
    return item;
  };

  const value = {
    cartItems,
    totalOrderAmt,
    addItem,
    removeItem,
  };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
