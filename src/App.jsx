// import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemsContextProvider, useItems } from "./store/ItemsContext";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FoodList from "./components/FoodList";

function AdministrationMode() {
  // const { switchPage } = useItems();
  // console.log(useItems());

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
      {/* {switchPage ? <Admin /> : <Users />} */}
    </>
  );
}

function App() {
  useEffect(() => {});

  return (
    <>
      <ItemsContextProvider>
        <Router>
          <Header />
          <AdministrationMode />

          <FoodList />
          <Footer />
        </Router>
      </ItemsContextProvider>
    </>
  );
}

export default App;
