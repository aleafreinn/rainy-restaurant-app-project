import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CartSummary from "./CartSummary";
import { useCart } from "../store/CartContext";

const CustomButton = styled(Button)`
  color: white;
  position: absolute;
  top: 1.5%;
  right: 1.5%;
`;

const CartCount = styled(Paper)`
  background-color: white;
  color: black;
  display: inline-block;
  margin: 0rem 0.5rem;
  padding: 0rem 0.25rem;
`;

const CartButton = () => {
  const { totalOrderAmt, totalOrderAmtHandler, cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    totalOrderAmtHandler();
  }, [cartItems]);
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
