import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { useItems } from "../store/ItemsContext";
import imageAPI from "../api/imageAPI";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
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

const ImageField = styled.label`
  margin: 1rem 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00000044;
  border-radius: 10px;
  &:hover {
    background-color: #00000066;
    cursor: pointer;
  }
`;

const EditMenuForm = ({ targetItem, onClose }) => {
  const [newItemChanges, setNewItemChanges] = useState(targetItem);
  const [imagePreview, setImagePreview] = useState(targetItem.image);
  const [imageName, setImageName] = useState("");
  const [throwBlankError, setThrowBlankError] = useState(false);
  const [openInputErrorSnack, setOpenInputErrorSnack] = useState(false);
  const { updateItem } = useItems();
  const updateImageEl = useRef("");

  async function editSubmitHandler(event) {
    event.preventDefault();
    if (
      newItemChanges.name === "" ||
      newItemChanges.desc === "" ||
      newItemChanges.price.toString() === "" ||
      imagePreview === ""
    ) {
      console.log("error");
      setThrowBlankError(true);
      setOpenInputErrorSnack(true);
    } else {
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
  }

  return (
    <FormParent>
      <FormContainer onSubmit={editSubmitHandler}>
        {targetItem.name}
        <button onClick={onClose}>close</button>
        <label>Enter new food name:</label>
        <TextField
          error={!newItemChanges.name[0] && throwBlankError}
          helperText={
            !newItemChanges.name[0] && throwBlankError
              ? "Name of the food is mandatory."
              : ""
          }
          placeholder={targetItem.name}
          variant="filled"
          sx={{ width: "100%" }}
          type="text"
          value={newItemChanges.name}
          onChange={(e) =>
            setNewItemChanges({ ...newItemChanges, name: e.target.value })
          }
        />
        <label>Enter new description:</label>
        <TextField
          error={!newItemChanges.desc[0] && throwBlankError}
          helperText={
            !newItemChanges.desc[0] && throwBlankError
              ? "Description of the food is mandatory."
              : ""
          }
          multiline
          placeholder={targetItem.desc}
          variant="filled"
          sx={{ width: "100%" }}
          type="text"
          value={newItemChanges.desc}
          onChange={(e) =>
            setNewItemChanges({ ...newItemChanges, desc: e.target.value })
          }
        />
        <label>Enter new price:</label>
        <TextField
          // adding '.toString()' func because of 'targetItem.price' datatype
          // returned as string value and initially assigned to 'newItemChanges'
          error={!newItemChanges.price.toString()[0] && throwBlankError}
          helperText={
            !newItemChanges.price.toString()[0] && throwBlankError
              ? "Price of the food is mandatory."
              : ""
          }
          placeholder={targetItem.price}
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">RM</InputAdornment>
            ),
          }}
          sx={{ width: "100%" }}
          type="number"
          value={parseInt(newItemChanges.price) < 0 ? 0 : newItemChanges.price}
          onChange={(e) => {
            setNewItemChanges({ ...newItemChanges, price: e.target.value });
          }}
        />
        <ImageField htmlFor="input_image">
          {imagePreview[0] ? "image will be displayed:" : "insert image here"}
          <ImageContainer src={imagePreview} />
          {imageName}
        </ImageField>
        <p style={{ color: "red" }}>
          {!imagePreview[0] && throwBlankError
            ? "Image is mandatory to be uploaded"
            : ""}
        </p>
        <input
          style={{ opacity: "0" }}
          ref={updateImageEl}
          id="input_image"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={() => {
            if (updateImageEl.current.files[0]) {
              setImagePreview(
                URL.createObjectURL(updateImageEl.current.files[0])
              );
              setImageName(updateImageEl.current.files[0].name);
            } else {
              setImagePreview("");
              setImageName("");
            }
          }}
        />
        <button type="submit">save changes</button>
      </FormContainer>
      <Snackbar
        open={openInputErrorSnack}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpenInputErrorSnack(false)}
      >
        <Alert
          onClose={() => setOpenInputErrorSnack(false)}
          severity="error"
          elevation={12}
          sx={{ width: "100%" }}
        >
          Input request error!
        </Alert>
      </Snackbar>
    </FormParent>
  );
};

export default EditMenuForm;

EditMenuForm.propTypes = {
  targetItem: PropTypes.object,
  onClose: PropTypes.func,
};
