import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";
import { useItems } from "../store/ItemsContext";
import EditMenuForm from "./EditMenuForm";
import DeleteItem from "./DeleteItem";

// const FoodContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1rem 2rem;
//   gap: 0.5rem;
//   border: 2px solid white;
//   border-radius: 10px;
//   & > p {
//     color: #ffffffcc;
//     font-size: 30pt;
//     margin: 0;
//   }
//   & > h3 {
//     margin: 0;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   width: 100%;
// `;

const DescriptionBox = styled(Typography)`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const AddButton = styled(Button)`
  color: #e2c000;
  font-weight: bold;

  /* &:active {
    & > div#cartIcon {
      animation: addCart 0.3s ease-in-out;
    }
  } */

  &:focus {
    & > div#cartIcon {
      animation: addCart 0.3s ease-in-out;
    }
  }

  @keyframes addCart {
    0% {
      transform: scale(1) rotate(0deg);
    }
    33% {
      transform: scale(1.25) rotate(-10deg);
    }
    66% {
      transform: scale(1.5) rotate(20deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

const FoodItem = ({ targetItem }) => {
  const { id, name, desc, price, image } = targetItem;
  const { addItem, cartItems } = useCart();
  const { switchPage, removeItem } = useItems();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeletePortal, setShowDeletePortal] = useState(false);
  const addButtonEl = useRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  async function addButtonHandler() {
    const action = (id) => (
      <Button sx={{ color: "white" }} onClick={() => closeSnackbar(id)}>
        <CloseIcon />
      </Button>
    );
    setTimeout(() => {
      addButtonEl.current.blur();
    }, 300);
    await addItem({ id, name, price });
    enqueueSnackbar(`Added ${name} to the cart!`, {
      variant: "success",
      action,
    });
  }

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);
  return (
    <>
      <Grid item>
        <Card
          sx={{
            width: 350,
            height: 430,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia sx={{ height: 225 }} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <DescriptionBox variant="body2" color="text.secondary">
              {desc}
            </DescriptionBox>
            <Divider sx={{ margin: "1rem 0rem" }} />
            <Typography gutterBottom variant="subtitle1" component="div">
              RM{price}
            </Typography>
          </CardContent>
          <CardActions>
            <AddButton
              size="small"
              // sx={{ color: "#e2c000", fontWeight: "bold" }}
              onClick={addButtonHandler}
              ref={addButtonEl}
            >
              <div id="cartIcon">
                <ShoppingCart />
              </div>
              <div>Add!</div>
            </AddButton>

            {switchPage && (
              <>
                <Button size="small" onClick={() => setShowDeletePortal(true)}>
                  remove item from menu
                </Button>
                <Button size="small" onClick={() => setShowEditForm(true)}>
                  edit item from menu
                </Button>
              </>
            )}

            {showDeletePortal &&
              createPortal(
                <DeleteItem
                  onClose={() => setShowDeletePortal(false)}
                  targetItem={targetItem}
                  removeFunc={removeItem}
                />,
                document.body
              )}
          </CardActions>
        </Card>

        {showEditForm &&
          createPortal(
            <EditMenuForm
              onClose={() => setShowEditForm(false)}
              targetItem={targetItem}
            />,
            document.body
          )}
      </Grid>
    </>
  );
};

FoodItem.propTypes = {
  targetItem: PropTypes.object,
};

export default FoodItem;
