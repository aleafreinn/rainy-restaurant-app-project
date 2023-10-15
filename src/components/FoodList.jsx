import { useItems } from "../store/ItemsContext";

const FoodList = () => {
  const { itemsData } = useItems();

  const foodItems = itemsData.map((item) => {
    return (
      <>
        <li>
          {item.name} - {item.desc} - RM{item.price}
        </li>
      </>
    );
  });
  return (
    <>
      <div>list here</div>
      <ul>{foodItems}</ul>
    </>
  );
};

export default FoodList;
