// import { useState } from "react";
import "./App.css";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemsContextProvider } from "./store/ItemsContext";
import { CartContextProvider } from "./store/CartContext";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import CartButton from "./components/CartButton";
import AboutComponent from "./components/AboutComponent";
import styled from "@emotion/styled";

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

const PositionedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  & > section {
    width: 75%;
  }
`;

function App() {
  return (
    <>
      <ItemsContextProvider>
        <CartContextProvider>
          <Router>
            <CartButton />
            <Header />
            <PositionedContainer>
              <section>
                <AboutComponent />
                <AdministrationMode />
                <FoodList />
              </section>
              <Footer />
            </PositionedContainer>
          </Router>
        </CartContextProvider>
      </ItemsContextProvider>
    </>
  );
}

export default App;
