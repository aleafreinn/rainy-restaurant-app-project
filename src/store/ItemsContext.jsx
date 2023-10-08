import { createContext, useContext, useState } from "react";

const ItemsContext = createContext({
  someVariable: null,
});

export function ItemsContextProvider({ children }) {
  const [switchPage, setSwitchPage] = useState(false);
  const [itemsData, setItemsData] = useState([]);

  const addNewItem = (item) => {
    setItemsData([...itemsData, item]);
  };
  const removeItem = (id) => {
    return id;
  };
  const updateItem = (id) => {
    return id;
  };
  const togglePage = () => {
    setSwitchPage(!switchPage);
  };

  const value = {
    itemsData,
    switchPage,
    addNewItem,
    removeItem,
    updateItem,
    togglePage,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
export function useItems() {
  return useContext(ItemsContext);
}
