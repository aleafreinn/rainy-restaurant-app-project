import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CartSummary from "./CartSummary";
import { useCart } from "../store/CartContext";
import { useItems } from "../store/ItemsContext";

const CustomButton = styled(Button)`
  color: white;
  position: fixed;
  top: 1.5%;
  right: 1%;
`;

const CartCount = styled(Paper)`
  background-color: white;
  color: black;
  display: inline-block;
  margin: 0rem 0.5rem;
  padding: 0rem 0.25rem;
`;

const CartButton = () => {
  const { totalOrderAmt, totalOrderAmtHandler, cartItems, cartItemVerify } =
    useCart();
  const { itemsData } = useItems();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    totalOrderAmtHandler();
  }, [cartItems]);

  useEffect(() => {
    cartItemVerify(itemsData);
  }, [itemsData]);
  return (
    <>
      <CustomButton onClick={() => setShowCart(!showCart)}>
        Cart
        <CartCount>{totalOrderAmt}</CartCount>
      </CustomButton>
      {showCart &&
        createPortal(
          <CartSummary onClose={() => setShowCart(false)} />,
          document.body
        )}
    </>
  );
};

export default CartButton;
