import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { useItems } from "../store/ItemsContext";
import imageAPI from "../api/imageAPI";
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
  const [imagePreview, setImagePreview] = useState(targetItem.image);
  const { updateItem } = useItems();
  const updateImageEl = useRef("");

  async function editSubmitHandler(event) {
    event.preventDefault();
    let updatedImage = targetItem.image;
    if (updateImageEl?.current?.files[0]) {
      const imagePayload = new FormData();
      imagePayload.append("image", updateImageEl.current.files[0]);
      const imageResponse = await imageAPI.post("", imagePayload);
      updatedImage = imageResponse.data.data.image.url;
    }
    await updateItem({
      ...newItemChanges,
      price: parseInt(newItemChanges.price),
      image: updatedImage,
    });
    console.log("edited!");
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
        <label>Enter new image:</label>
        <input
          ref={updateImageEl}
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={() =>
            setImagePreview(URL.createObjectURL(updateImageEl.current.files[0]))
          }
        />
        <img style={{ width: "100px" }} src={imagePreview} />
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
