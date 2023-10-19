import { useItems } from "../store/ItemsContext";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormParent = styled.main`
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

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddMenuForm = ({ onClose }) => {
  const { addNewItem } = useItems();

  const initItemForm = {
    id: "",
    name: "",
    desc: "",
    price: "",
  };
  const [newItem, setNewItem] = useState(initItemForm);

  async function submitHandler(e) {
    e.preventDefault();
    await setNewItem({
      ...newItem,
      price: parseInt(newItem.price),
      id: uuid(),
    });
    onClose();
  }

  useEffect(() => {
    if (newItem.id !== "") {
      addNewItem(newItem);
      console.log("added!");
      console.log(newItem);
      console.log(parseInt(newItem.price));
      setNewItem(initItemForm);
    }
  }, [newItem.id]);
  return (
    <FormParent>
      <FormContainer onSubmit={submitHandler}>
        <button type="button" onClick={onClose}>
          cancel edit
        </button>
        <label>enter food name: </label>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <label>enter description: </label>
        <input
          type="text"
          value={newItem.desc}
          onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
        />
        <label>enter price: </label>
        <input
          type="number"
          value={parseInt(newItem.price) < 0 ? 0 : newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button type="submit">add item to menu</button>
      </FormContainer>
    </FormParent>
  );
};

export default AddMenuForm;

AddMenuForm.propTypes = {
  onClose: PropTypes.func,
};
