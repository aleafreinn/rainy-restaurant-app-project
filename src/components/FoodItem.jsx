import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";
import { useItems } from "../store/ItemsContext";
import EditMenuForm from "./EditMenuForm";

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

const FoodItem = ({ item }) => {
  const { id, name, desc, price, image } = item;
  const { addItem, cartItems } = useCart();
  const { switchPage, removeItem } = useItems();
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);
  return (
    <FoodContainer>
      <img style={{ width: "350px" }} src={image ?? ""} alt="" />
      <p>{name}</p>
      <div>{desc}</div>
      <h3>RM{price}</h3>
      <ButtonContainer>
        <button onClick={() => addItem({ id, name, price })}>
          add to cart
        </button>
        {switchPage && (
          <>
            <button onClick={() => removeItem(id)}>
              remove item from menu
            </button>
            <button onClick={() => setShowEditForm(true)}>
              edit item from menu
            </button>
          </>
        )}
        {showEditForm &&
          createPortal(
            <EditMenuForm
              onClose={() => setShowEditForm(false)}
              targetItem={item}
            />,
            document.body
          )}
      </ButtonContainer>
    </FoodContainer>
  );
};

FoodItem.propTypes = {
  item: PropTypes.object,
};

export default FoodItem;
