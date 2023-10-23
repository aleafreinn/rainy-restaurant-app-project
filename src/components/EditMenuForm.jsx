import styled from "@emotion/styled";
import { useState } from "react";
import { useItems } from "../store/ItemsContext";
import PropTypes from "prop-types";

const FormParent = styled.main`
  background-color: #00000044;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditMenuForm = ({ targetItem, onClose }) => {
  const [newItemChanges, setNewItemChanges] = useState(targetItem);
  const { updateItem } = useItems();

  async function editSubmitHandler(event) {
    event.preventDefault();
    await updateItem({
      ...newItemChanges,
      price: parseInt(newItemChanges.price),
    });
    onClose();
  }

  return (
    <FormParent>
      <FormContainer onSubmit={editSubmitHandler}>
        {targetItem.name}
        <button onClick={onClose}>close</button>
        <label>Enter new food name:</label>
        <input
          type="text"
          value={newItemChanges.name}
          onChange={(e) =>
            setNewItemChanges({ ...newItemChanges, name: e.target.value })
          }
        />
        <label>Enter new description:</label>
        <input
          type="text"
          value={newItemChanges.desc}
          onChange={(e) =>
            setNewItemChanges({ ...newItemChanges, desc: e.target.value })
          }
        />
        <label>Enter new price:</label>
        <input
          type="number"
          value={newItemChanges.price}
          onChange={(e) =>
            setNewItemChanges({ ...newItemChanges, price: e.target.value })
          }
        />
        <button type="submit">save changes</button>
      </FormContainer>
    </FormParent>
  );
};

export default EditMenuForm;

EditMenuForm.propTypes = {
  targetItem: PropTypes.object,
  onClose: PropTypes.func,
};
