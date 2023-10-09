import { useState } from "react";
import AddMenuForm from "../components/AddMenuForm";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>hello admin</div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "close" : "Add menu item"}
      </button>
      {showForm && <AddMenuForm />}
    </>
  );
};

export default Admin;
