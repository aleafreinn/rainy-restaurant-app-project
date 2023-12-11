import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import AddMenuForm from "../components/AddMenuForm";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useItems } from "../store/ItemsContext";
import Dashboard from "../components/Dashboard";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { switchPage } = useItems();
  const navigate = useNavigate();

  const AddMenuButton = styled(Button)`
    position: fixed;
    top: 1rem;
    left: calc(200px + 1rem);
    background-color: #ffba3a88;
    color: white;
    z-index: 3;
    filter: drop-shadow(0px 5px 10px #8a6115);
    &:focus,
    &:hover {
      background-color: #ffba3abb;
    }

    @media screen and (max-width: 700px) {
      left: ${showDashboard ? "calc(250px + 1rem)" : "1rem"};
    }

    @media screen and (max-width: 550px) {
      top: ${showDashboard ? "4rem" : "1rem"};
      font-size: 9pt;
    }
  `;

  const DashboardButton = styled(Button)`
    position: fixed;
    top: 4rem;
    left: 1rem;
    background-color: #ffba3a88;
    color: white;
    z-index: 3;
    filter: drop-shadow(0px 5px 10px #8a6115);
    visibility: hidden;
    &:focus,
    &:hover {
      background-color: #ffba3abb;
    }

    @media screen and (max-width: 700px) {
      visibility: visible;
      left: ${showDashboard ? "calc(250px + 1rem)" : "1rem"};
    }

    @media screen and (max-width: 550px) {
      top: ${showDashboard ? "7rem" : "4rem"};
      font-size: 9pt;
    }
  `;

  useEffect(() => {
    if (!switchPage) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <DashboardButton onClick={() => setShowDashboard(!showDashboard)}>
        Dashboard
      </DashboardButton>
      <AddMenuButton onClick={() => setShowForm(!showForm)}>
        {showForm ? "Adding menu..." : "Add menu item"}
      </AddMenuButton>
      {showForm &&
        createPortal(
          <AddMenuForm onClose={() => setShowForm(false)} />,
          document.body
        )}
      {showDashboard &&
        window.innerWidth <= 700 &&
        createPortal(
          <Dashboard openDashboard={showDashboard} />,
          document.body
        )}
    </>
  );
};

export default Admin;
