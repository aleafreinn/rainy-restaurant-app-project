import { useState } from "react";
import styled from "@emotion/styled";
import { useItems } from "../store/ItemsContext";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid from "@mui/material/Grid";
import { createPortal } from "react-dom";
import DeleteItem from "./DeleteItem";

const MainContainer = styled.section`
  min-width: 200px;
  height: auto;
  background-color: #4e4e4e;
  border-right: 1px solid white;
  top: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  filter: drop-shadow(0px 0px 10px black);
  z-index: 2;
`;

const Dashboard = () => {
  const { itemsData, switchPage, removeItem } = useItems();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [targetToDelete, setTargetToDelete] = useState({});

  const dashboardItems = itemsData.map((item) => {
    const { id, name, price } = item;
    return (
      <>
        <ListItem key={id}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item justifyContent="center" alignItems="flex-start">
              <ListItemText>{name}</ListItemText>
              <ListItemText>RM{price}</ListItemText>
            </Grid>
            <Grid
              item
              flexGrow="0"
              onClick={() => {
                setShowDeleteConfirm(true);
                setTargetToDelete(item);
              }}
            >
              <ListItemButton>
                <DeleteForeverIcon />
              </ListItemButton>
            </Grid>
          </Grid>
        </ListItem>
        <hr />
      </>
    );
  });

  return (
    <>
      {switchPage ? (
        <MainContainer>
          <div
            style={{
              position: "sticky",
              top: "0",
            }}
          >
            <span style={{ fontSize: "20pt", color: "#ffe554" }}>
              Dashboard
            </span>
            {dashboardItems}
          </div>
        </MainContainer>
      ) : (
        ""
      )}

      {showDeleteConfirm &&
        createPortal(
          <DeleteItem
            onClose={() => setShowDeleteConfirm(false)}
            removeFunc={removeItem}
            targetItem={targetToDelete}
          />,
          document.body
        )}
    </>
  );
};

export default Dashboard;
