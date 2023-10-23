import { useItems } from "../store/ItemsContext";
import { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import imageAPI from "../api/imageAPI";
import styled from "@emotion/styled";
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

const ImageContainer = styled.img`
  width: 100px;
`;

const AddMenuForm = ({ onClose }) => {
  const { addNewItem } = useItems();

  const initItemForm = {
    id: "",
    name: "",
    desc: "",
    price: "",
    image: "",
  };

  const [newItem, setNewItem] = useState(initItemForm);
  const [imagePreview, setImagePreview] = useState("");
  const inputImageEl = useRef("");

  async function submitHandler(e) {
    e.preventDefault();
    const imagePayload = new FormData();
    imagePayload.append("image", inputImageEl.current.files[0]);
    console.log(imagePayload);
    const response = await imageAPI.post("", imagePayload);
    console.log(response);
    await setNewItem({
      ...newItem,
      price: parseInt(newItem.price),
      id: uuid(),
      image: response.data.data.image.url,
    });
  }

  useEffect(() => {
    if (newItem.id !== "") {
      addNewItem(newItem);
      console.log("added!");
      onClose();
      // console.log(newItem);
      // console.log(parseInt(newItem.price));
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
        <label>insert image: </label>
        <input
          ref={inputImageEl}
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={() =>
            setImagePreview(URL.createObjectURL(inputImageEl.current.files[0]))
          }
        />
        <ImageContainer src={imagePreview} />
        <button type="submit">add item to menu</button>
      </FormContainer>
    </FormParent>
  );
};

export default AddMenuForm;

AddMenuForm.propTypes = {
  onClose: PropTypes.func,
};
