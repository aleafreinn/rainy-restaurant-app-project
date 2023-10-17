import { useItems } from "../store/ItemsContext";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const { itemsData } = useItems();

  const foodItems = itemsData.map((item) => {
    return (
      <>
        <FoodItem
          key={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
        />
        {/* <li>
          {item.name} - {item.desc} - RM{item.price}
        </li> */}
      </>
    );
  });
  return (
    <>
      <div>list here</div>
      {foodItems}
    </>
  );
};

export default FoodList;
