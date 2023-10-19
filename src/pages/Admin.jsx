import { useState } from "react";
import { createPortal } from "react-dom";
import AddMenuForm from "../components/AddMenuForm";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>hello admin</div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Adding menu..." : "Add menu item"}
      </button>
      {showForm &&
        createPortal(
          <AddMenuForm onClose={() => setShowForm(false)} />,
          document.body
        )}
    </>
  );
};

export default Admin;
