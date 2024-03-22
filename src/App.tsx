import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import ShoppingCartModal from "./ShoppingCartModal";
import ProductPage from "./ProductPage";
import "./app.scss";

import { productInfo as pInfo } from "./productInfo";

export interface shoppingCartItemInterface {
  selectedProductId: number;
  quantitySelected: number;
}

function App() {
  const [shoppingCartModalOpen, setShoppingCartModalOpen] = useState(false);
  const [page, setPage] = useState("LandingPage");
  const [userShoppingCart, setUserShoppingCart] = useState([]);
  const toggleModal = () => {
    setShoppingCartModalOpen(!shoppingCartModalOpen);
  };
  const [chosenProductId, setChosenProductId] = useState(4);
  const [categorySelected, setCategorySelected] = useState("All");

  const [
    currentQuantityOfProductSelected,
    setCurrentQuantityOfProductSelected,
  ] = useState(1);
  useEffect(() => {
    setCurrentQuantityOfProductSelected(1);
  }, [chosenProductId]);

  let pageBodyVisible;
  if (page === "LandingPage") {
    pageBodyVisible = (
      <LandingPageBody
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        setChosenProductId={setChosenProductId}
        setPage={setPage}
      />
    );
  } else if (page === "CategoriesPage") {
    pageBodyVisible = (
      <CategoriesPageBody
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        setChosenProductId={setChosenProductId}
        setPage={setPage}
      />
    );
  } else if (page === "ProductPage") {
    pageBodyVisible = (
      <ProductPage
        currentQuantityOfProductSelected={currentQuantityOfProductSelected}
        setCurrentQuantityOfProductSelected={
          setCurrentQuantityOfProductSelected
        }
        chosenProductId={chosenProductId}
        setChosenProductId={setChosenProductId}
        setPage={setPage}
        setUserShoppingCart={setUserShoppingCart}
        userShoppingCart={userShoppingCart}
      />
    );
  }

  return (
    <>
      <ShoppingCartModal
        toggleModal={toggleModal}
        shoppingCartModalOpen={shoppingCartModalOpen}
        userShoppingCart={userShoppingCart}
        setUserShoppingCart={setUserShoppingCart}
        pInfo={pInfo}
      />
      <Navbar
        setPage={setPage}
        toggleModal={toggleModal}
        userShoppingCart={userShoppingCart}
      />
      {pageBodyVisible}
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

export default App;
