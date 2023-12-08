import { useState } from "react";
import { createPortal } from "react-dom";
import AddMenuForm from "../components/AddMenuForm";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const AddMenuButton = styled(Button)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: #ffba3a88;
  color: white;
  z-index: 3;
  filter: drop-shadow(0px 5px 10px #8a6115);
  &:focus {
    background-color: #ffba3abb;
  }
`;

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>hello admin</div>
      <AddMenuButton onClick={() => setShowForm(!showForm)}>
        {showForm ? "Adding menu..." : "Add menu item"}
      </AddMenuButton>
      {showForm &&
        createPortal(
          <AddMenuForm onClose={() => setShowForm(false)} />,
          document.body
        )}
    </>
  );
};

export default Admin;
