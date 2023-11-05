import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";

const CartContainer = styled.main`
  background-color: #00000044;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const CartBox = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartSummary = ({ onClose }) => {
  const { cartItems, cartItemModify, totalPrice } = useCart();
  const closeHandler = async () => {
    for (let item = 0; item < cartItems.length; item++) {
      if (cartItems[item].qty === 0) {
        await cartItemModify.remove(cartItems[item]);
      }
    }
    onClose();
  };
  console.log(cartItems);

  const cartItemsList = cartItems.map((item) => {
    return (
      <>
        <li>
          {item.name} - x{item.qty} ; Total: RM{item.qty * item.price}
          <br />
          <button onClick={() => cartItemModify.cut(item)}>-</button>
          <button onClick={() => cartItemModify.add(item)}>+</button>
          <button onClick={() => cartItemModify.remove(item)}>remove</button>
        </li>
      </>
    );
  });
  return (
    <>
      <CartContainer>
        <CartBox>
          Cart Summary
          <ul>{cartItemsList}</ul>
          <h3>The grand total of the cart: RM{totalPrice}</h3>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button onClick={closeHandler}>close</button>
            <button>order</button>
          </div>
        </CartBox>
      </CartContainer>
    </>
  );
};

export default CartSummary;

CartSummary.propTypes = {
  onClose: PropTypes.func,
};
