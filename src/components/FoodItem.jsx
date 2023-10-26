import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useCart } from "../store/CartContext";
import { useItems } from "../store/ItemsContext";
import EditMenuForm from "./EditMenuForm";

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

const FoodItem = ({ targetItem }) => {
  const { id, name, desc, price, image } = targetItem;
  const { addItem, cartItems } = useCart();
  const { switchPage, removeItem } = useItems();
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);
  return (
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
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "#e2c000", fontWeight: "bold" }}
            onClick={() => addItem({ id, name, price })}
          >
            <ShoppingCart />
            Add!
          </Button>

          {switchPage && (
            <>
              <Button size="small" onClick={() => removeItem(id)}>
                remove item from menu
              </Button>
              <Button size="small" onClick={() => setShowEditForm(true)}>
                edit item from menu
              </Button>
            </>
          )}
        </CardActions>
      </Card>
      {/* <img style={{ width: "350px" }} src={image ?? ""} alt="" />
      <p>{name}</p>
      <div>{desc}</div>
      <h3>RM{price}</h3>
      <ButtonContainer>
        <button onClick={() => addItem({ id, name, price })}>
          add to cart
        </button>
        {switchPage && (
          <>
            <button onClick={() => removeItem(id)}>
              remove item from menu
            </button>
            <button onClick={() => setShowEditForm(true)}>
              edit item from menu
            </button>
          </>
        )}
      </ButtonContainer> */}

      {showEditForm &&
        createPortal(
          <EditMenuForm
            onClose={() => setShowEditForm(false)}
            targetItem={targetItem}
          />,
          document.body
        )}
    </Grid>
  );
};

FoodItem.propTypes = {
  targetItem: PropTypes.object,
};

export default FoodItem;
