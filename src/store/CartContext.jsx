import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const LS_CARTITEMS_KEY = "cartItems";
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(LS_CARTITEMS_KEY)) ?? []
  );
  const [totalOrderAmt, setTotalOrderAmt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // add item to cart function
  const addItem = (item) => {
    const itemIsExist = cartItems.filter((cartItem) => {
      return cartItem.id === item.id;
    });
    if (itemIsExist[0] !== undefined) {
      itemIsExist[0].qty++;
      const newCartItems = cartItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      });
      setCartItems([...newCartItems, itemIsExist[0]]);
    } else setCartItems([...cartItems, { ...item, qty: 1 }]);
    // console.log(cartItems);
  };

  // calculate number of item in cart function
  function totalOrderAmtHandler() {
    let totalOrder = 0;
    let accPrice = 0;
    for (let foodItemNum = 0; foodItemNum < cartItems.length; foodItemNum++) {
      totalOrder += cartItems[foodItemNum].qty;
      accPrice += cartItems[foodItemNum].qty * cartItems[foodItemNum].price;
    }
    setTotalOrderAmt(totalOrder);
    setTotalPrice(accPrice);
  }

  // modify item in cart function
  const cartItemModify = {
    add: async (menuItem) => {
      const newCartItems = cartItems.map((item) => {
        if (menuItem.id === item.id) {
          item.qty++;
          return { ...item };
        } else return { ...item };
      });
      await setCartItems(newCartItems);
    },
    cut: (menuItem) => {
      if (menuItem.qty > 0) {
        const newCartItems = cartItems.map((item) => {
          if (menuItem.id === item.id) {
            item.qty--;
            return { ...item };
          } else return { ...item };
        });
        setCartItems(newCartItems);
      }
    },
    remove: (menuItem) => {
      const newCartItems = cartItems.filter((item) => {
        return item.id !== menuItem.id;
      });
      setCartItems(newCartItems);
    },
  };

  // to verify the list of items in cart when some items in menu being removed
  const cartItemVerify = (itemsList) => {
    // itemsList to be passed only as "itemsData" from ItemsCtx later
    let itemsIDList = [];
    for (let item = 0; item < itemsList.length; item++) {
      itemsIDList.push(itemsList[item].id);
    }
    const verifiedCartItems = cartItems
      .filter((item) => {
        return itemsIDList.indexOf(item.id) !== -1;
      })
      .map((item) => {
        const targetItemID = itemsList.filter((foodItem) => {
          return foodItem.id === item.id;
        });
        return { ...targetItemID[0], qty: item.qty };
      });
    console.log(`verified cart items`, verifiedCartItems);
    setCartItems(verifiedCartItems);
  };

  const value = {
    cartItems,
    totalOrderAmt,
    totalPrice,
    addItem,
    cartItemModify,
    totalOrderAmtHandler,
    cartItemVerify,
  };

  useEffect(() => {
    localStorage.setItem(LS_CARTITEMS_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

CartContextProvider.propTypes = {
  children: PropTypes.any,
};
