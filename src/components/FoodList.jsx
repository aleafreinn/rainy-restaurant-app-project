import { useItems } from "../store/ItemsContext";
import Grid from "@mui/material/Grid";
import FoodItem from "./FoodItem";

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
    <Grid
      container
      direction="row"
      rowSpacing={2}
      columnSpacing={2}
      justifyContent="space-around"
      alignItems="center"
      sx={{ padding: "1rem", boxSizing: "border-box" }}
    >
      {foodItems}
    </Grid>
  );
};

export default FoodList;
