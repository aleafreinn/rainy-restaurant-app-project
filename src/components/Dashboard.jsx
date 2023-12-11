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
import PropTypes from "prop-types";

const Dashboard = ({ openDashboard }) => {
  const { itemsData, switchPage, removeItem } = useItems();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [targetToDelete, setTargetToDelete] = useState({});

  const MainContainer = styled.section`
    min-width: 200px;
    height: auto;
    background-color: #4e4e4e;
    border-right: 1px solid #646464;
    top: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    filter: drop-shadow(0px 0px 10px black);
    z-index: 2;

    @media screen and (max-width: 700px) {
      display: ${openDashboard ? "flex" : "none"};
      min-width: 250px;
      position: fixed;
      height: 100vh;
    }
  `;

  const SubContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: scroll;

    ::-webkit-scrollbar {
      width: 5px;
      background: transparent;
    }
    ::-webkit-scrollbar:-track {
      background: transparent;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  `;

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
              <ListItemText>
                <span style={{ fontWeight: "bolder" }}>{name}</span>
              </ListItemText>
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
        <hr style={{ width: "80%" }} />
      </>
    );
  });

  return (
    <>
      {switchPage ? (
        <MainContainer>
          <SubContainer>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "20pt",
                  color: "#ffe554",
                }}
              >
                Dashboard
              </span>
            </div>
            {dashboardItems}
          </SubContainer>
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

Dashboard.propTypes = {
  openDashboard: PropTypes.boolean,
};

export default Dashboard;
