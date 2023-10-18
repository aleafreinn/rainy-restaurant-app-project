import styled from "@emotion/styled";
import PropTypes from "prop-types";

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
  return (
    <>
      <CartContainer>
        <CartBox>
          this is the summary for cart
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
