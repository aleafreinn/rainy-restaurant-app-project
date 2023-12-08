import { useItems } from "../store/ItemsContext";
import Grid from "@mui/material/Grid";
import FoodItem from "./FoodItem";
import { SnackbarProvider } from "notistack";

const FoodList = () => {
  const { itemsData } = useItems();

  const foodItems = itemsData.map((item) => {
    return (
      <>
        <FoodItem
          key={item.id}
          targetItem={item}
          // id={item.id}
          // name={item.name}
          // desc={item.desc}
          // price={item.price}
        />
        {/* <li>
          {item.name} - {item.desc} - RM{item.price}
        </li> */}
      </>
    );
  });
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
      <hr style={{ width: "100%" }} />
      <Grid
        container
        direction="row"
        rowSpacing={2}
        columnSpacing={2}
        justifyContent="space-around"
        alignItems="center"
        sx={{ padding: "1rem", boxSizing: "border-box" }}
        id="food-list"
      >
        {foodItems}
      </Grid>
    </SnackbarProvider>
  );
};

export default FoodList;
