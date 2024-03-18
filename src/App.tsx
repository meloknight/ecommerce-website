import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import ShoppingCartModal from "./ShoppingCartModal";
import "./app.scss";

function App() {
  const [shoppingCartModalOpen, setShoppingCartModalOpen] = useState(false);
  const [page, setPage] = useState("CategoriesPage");
  const [userShoppingCart, setUserShoppingCart] = useState([
    {
      selectedProductId: 0,
      quantitySelected: 2,
    },
    {
      selectedProductId: 4,
      quantitySelected: 2,
    },
    {
      selectedProductId: 8,
      quantitySelected: 2,
    },
    {
      selectedProductId: 12,
      quantitySelected: 2,
    },
    {
      selectedProductId: 12,
      quantitySelected: 2,
    },
    {
      selectedProductId: 12,
      quantitySelected: 2,
    },
    {
      selectedProductId: 12,
      quantitySelected: 2,
    },
  ]);

  const toggleModal = () => {
    setShoppingCartModalOpen(!shoppingCartModalOpen);
  };

  let pageBodyVisible;

  if (page === "landingPage") {
    pageBodyVisible = <LandingPageBody />;
  } else if (page === "CategoriesPage") {
    pageBodyVisible = <CategoriesPageBody setPage={setPage} />;
  }

  return (
    <>
      <ShoppingCartModal
        toggleModal={toggleModal}
        shoppingCartModalOpen={shoppingCartModalOpen}
        userShoppingCart={userShoppingCart}
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
