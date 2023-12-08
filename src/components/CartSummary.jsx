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
  z-index: 6;
`;

const CartBox = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: black;
  display: flex;
  width: 50%;
  max-height: 75%;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar:-track {
    background: transparent;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .grand-total-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .item-details,
  .item-right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    & > p {
      font-weight: bolder;
      margin: 0;
    }
  }
  .item-amount-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    & > div {
      border: 1px solid #00000044;
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
    }
  }
  .item-modify-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.2rem;
  }
`;

const ButtonModify = styled.button`
  background-color: #00000000;
  border: 1px solid black;
  color: black;
  padding: 0.2rem 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #00000044;
  }
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
        <ItemContainer>
          <div className="item-details">
            <p>{item.name}</p>
            <div className="item-amount-container">
              <p>RM{item.price}</p>
              <div>
                <span style={{ fontSize: "10pt" }}>x{item.qty}</span>
              </div>
            </div>
          </div>
          <div className="item-right-side">
            <div className="item-modify-container">
              <ButtonModify onClick={() => cartItemModify.cut(item)}>
                -
              </ButtonModify>
              <ButtonModify onClick={() => cartItemModify.add(item)}>
                +
              </ButtonModify>
            </div>
            <button onClick={() => cartItemModify.remove(item)}>remove</button>
            <p>Total: RM{item.qty * item.price}</p>
          </div>
        </ItemContainer>
        <hr style={{ width: "100%" }} />
      </>
    );
  });
  return (
    <>
      <CartContainer>
        <CartBox>
          <h3>Cart Summary</h3>
          {cartItemsList}
          <div className="grand-total-container">
            <h4>Grand total of selected</h4>
            <h4>RM{totalPrice}</h4>
          </div>
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
