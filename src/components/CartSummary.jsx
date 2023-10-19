import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";

const CartContainer = styled.main`
  background-color: #00000044;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const { cartItems } = useCart();

  const cartItemsList = cartItems.map((item) => {
    return (
      <>
        <li>
          {item.name} - {item.qty} ; Total: RM{item.qty * item.price}
          <br />
          <button>+</button>
          <button>-</button>
        </li>
      </>
    );
  });
  return (
    <>
      <CartContainer>
        <CartBox>
          this is the summary for cart
          <ul>{cartItemsList}</ul>
          <button onClick={onClose}>close</button>
        </CartBox>
      </CartContainer>
    </>
  );
};

export default CartSummary;

CartSummary.propTypes = {
  onClose: PropTypes.func,
};
