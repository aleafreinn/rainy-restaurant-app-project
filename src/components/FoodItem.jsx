import { useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";
import { useItems } from "../store/ItemsContext";

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.5rem;
  border: 2px solid white;
  border-radius: 10px;
  & > p {
    color: #ffffffcc;
    font-size: 30pt;
    margin: 0;
  }
  & > h3 {
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const FoodItem = ({ id, name, desc, price }) => {
  const { addItem, cartItems } = useCart();
  const { switchPage, removeItem } = useItems();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <FoodContainer>
      <p>{name}</p>
      <div>{desc}</div>
      <h3>RM{price}</h3>
      <ButtonContainer>
        <button onClick={() => addItem({ id, name, price })}>
          add to cart
        </button>
        {switchPage && (
          <button onClick={() => removeItem(id)}>remove item from menu</button>
        )}
      </ButtonContainer>
    </FoodContainer>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
};

export default FoodItem;
