import { useItems } from "../store/ItemsContext";
import { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import imageAPI from "../api/imageAPI";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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
  const [imageName, setImageName] = useState("");
  const [throwBlankError, setThrowBlankError] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const inputImageEl = useRef("");

  async function submitHandler(e) {
    e.preventDefault();
    if (
      newItem.name === "" ||
      newItem.desc === "" ||
      newItem.price === "0" ||
      imageName === ""
    ) {
      console.log("error");
      setThrowBlankError(true);
      setOpenSnack(true);
    } else {
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
  }

  useEffect(() => {
    if (newItem.id !== "") {
      addNewItem(newItem);
      console.log("added!");
      onClose();
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
        <TextField
          error={!newItem.name[0] && throwBlankError}
          helperText={
            !newItem.name[0] && throwBlankError
              ? "Name of the food is mandatory."
              : ""
          }
          placeholder="burger"
          variant="filled"
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <label>enter description: </label>
        <TextField
          error={!newItem.desc[0] && throwBlankError}
          helperText={
            !newItem.desc[0] && throwBlankError
              ? "Description of the food is mandatory."
              : ""
          }
          multiline
          placeholder="The delicious burger coated with greasy patty"
          variant="filled"
          type="text"
          value={newItem.desc}
          onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
        />
        <label>enter price: </label>
        <TextField
          error={!newItem.price[0] && throwBlankError}
          helperText={
            !newItem.price[0] && throwBlankError
              ? "Price of the food is mandatory."
              : ""
          }
          placeholder="15"
          variant="filled"
          type="number"
          value={parseInt(newItem.price) < 0 ? 0 : newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <ImageField htmlFor="input_image">
          {imageName[0] ? "image will be displayed:" : "insert image here"}
          <ImageContainer src={imagePreview} />
          {imageName}
        </ImageField>
        <p style={{ color: "red" }}>
          {!imageName[0] && throwBlankError
            ? "Image is mandatory to be uploaded"
            : ""}
        </p>
        <input
          style={{ opacity: "0" }}
          ref={inputImageEl}
          id="input_image"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={() => {
            if (inputImageEl.current.files[0]) {
              setImagePreview(
                URL.createObjectURL(inputImageEl.current.files[0])
              );
              setImageName(inputImageEl.current.files[0].name);
            } else {
              setImagePreview("");
              setImageName("");
            }
          }}
        />
        <button type="submit">add item to menu</button>
      </FormContainer>
      <Snackbar
        open={openSnack}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpenSnack(false)}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
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

export default AddMenuForm;

AddMenuForm.propTypes = {
  onClose: PropTypes.func,
};
