// import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { ItemsContextProvider, useItems } from "./store/ItemsContext";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Footer from "./components/Footer";

function AdministrationMode() {
  const { switchPage, togglePage } = useItems();
  console.log(useItems());

  return (
    <>
      {switchPage ? <Admin /> : <Users />}
      <button onClick={togglePage}>click me to toggle user mode</button>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {});

  return (
    <>
      <ItemsContextProvider>
        <AdministrationMode />
      </ItemsContextProvider>
    </>
  );
}

export default App;
