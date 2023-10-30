import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";
import { useItems } from "../store/ItemsContext";
import styled from "@emotion/styled";

const HeaderContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    max-height: 600px;
    overflow: hidden;
    object-fit: cover;
  }
  & > .title-container {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#22222200, #222222ff 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      font-size: 50pt;
      font-weight: lighter;
      color: #ffffff;
      filter: drop-shadow(0px 0px 20px #000000);
      letter-spacing: 0.5rem;
      margin: 0;
    }
    & > h2 {
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-weight: normal;
      margin: 0;
    }
    & > hr {
      border: 1px solid white;
      width: 50%;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 800px) {
      & > p {
        font-size: 35pt;
      }
      & > h2 {
        font-size: 12pt;
      }
      & > hr {
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 600px) {
      & > p {
        font-size: 25pt;
      }
      & > h2 {
        font-size: 9pt;
      }
      & > hr {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const Header = () => {
  const imgHeaderLink = "https://i.ibb.co/SvscXFf/Japan-Anime-Food.jpg";

  const { itemsData } = useItems();
  const [successSnack, setSuccessSnack] = useState({
    itemsNumber: itemsData.length,
    changeType: "",
  });

  useEffect(() => {
    // "isEqual" defined true when "itemsNumber" changed to number of items
    // false when "ItemsNumber" is already the same
    if (itemsData.length > successSnack.itemsNumber)
      setSuccessSnack({ changeType: "add", itemsNumber: itemsData.length });
    else if (itemsData.length < successSnack.itemsNumber) {
      setSuccessSnack({ changeType: "cut", itemsNumber: itemsData.length });
    } else {
      setSuccessSnack({ changeType: "", itemsNumber: itemsData.length });
    }
  }, [itemsData.length]);

  return (
    <>
      <HeaderContainer>
        <div className="title-container">
          <p>
            rainy <span style={{ color: "#ffe554" }}>mae</span>&apos;s
          </p>
          <hr />
          <h2>your aesthetic anime delights come to real life</h2>
          <h2>現実の美的アニメ料理</h2>
          <Button
            size="small"
            sx={{
              backgroundColor: yellow[600],
              color: "#222222",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              margin: "3rem",
              filter: "drop-shadow(0rem 0.5rem 10px #ffe55488)",
            }}
          >
            Learn more!
          </Button>
        </div>
        <img src={imgHeaderLink} alt="image header" />
      </HeaderContainer>

      <Snackbar
        open={successSnack.changeType === "add"}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
      >
        <Alert
          onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
          severity="success"
          elevation={12}
          sx={{ width: "100%" }}
        >
          Item added to the menu!
        </Alert>
      </Snackbar>
      <Snackbar
        open={successSnack.changeType === "cut"}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
      >
        <Alert
          onClose={() => setSuccessSnack({ ...successSnack, changeType: "" })}
          severity="warning"
          elevation={12}
          sx={{ width: "100%" }}
        >
          Item removed from the menu.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Header;
