import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ItemsContext = createContext({
  someVariable: null,
});

export function ItemsContextProvider({ children }) {
  const LS_ITEMSDATA_KEY = "itemsData";
  const [switchPage, setSwitchPage] = useState(false);
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LS_ITEMSDATA_KEY)) ?? []
  );

  // function to add new items
  const addNewItem = (item) => {
    setItemsData([...itemsData, item]);
  };

  // function to remove item in data
  const removeItem = (id) => {
    const newItemsData = itemsData.filter((item) => {
      return item.id !== id;
    });
    setItemsData([...newItemsData]);
  };

  // function to update item in the data
  const updateItem = (targetItem) => {
    const updatedItemsList = itemsData.map((item) => {
      if (item.id === targetItem.id) {
        return { ...targetItem };
      } else return item;
    });
    setItemsData(updatedItemsList);
  };

  // to switch mode between admin and user
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

  useEffect(() => {
    localStorage.setItem(LS_ITEMSDATA_KEY, JSON.stringify(itemsData));
  }, [itemsData]);

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
export function useItems() {
  return useContext(ItemsContext);
}

ItemsContextProvider.propTypes = {
  children: PropTypes.any,
};
