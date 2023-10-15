import { useItems } from "../store/ItemsContext";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const AddMenuForm = () => {
  const { addNewItem, itemsData } = useItems();

  const initItemForm = {
    id: "",
    name: "",
    desc: "",
    price: "",
  };
  const [newItem, setNewItem] = useState(initItemForm);

  function submitHandler(e) {
    e.preventDefault();
    setNewItem({ ...newItem, id: uuid() });
  }

  useEffect(() => {
    if (newItem.id !== "") {
      addNewItem(newItem);
      console.log("added!");
      console.log(itemsData);
      setNewItem(initItemForm);
    }
  }, [newItem.id]);
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>enter food name: </label>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <label>enter description: </label>
        <input
          type="text"
          value={newItem.desc}
          onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
        />
        <label>enter price: </label>
        <input
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button type="submit">add item to menu</button>
      </form>
    </>
  );
};

export default AddMenuForm;