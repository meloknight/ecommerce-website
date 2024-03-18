import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import ShoppingCartModal from "./ShoppingCartModal";
import "./app.scss";

export interface shoppingCartItemInterface {
  selectedProductId: number;
  quantitySelected: number;
}

function App() {
  const [shoppingCartModalOpen, setShoppingCartModalOpen] = useState(false);
  const [page, setPage] = useState("ProductPage");
  const [userShoppingCart, setUserShoppingCart] = useState([
    {
      selectedProductId: 0,
      quantitySelected: 2,
    },
  ]);

  const toggleModal = () => {
    setShoppingCartModalOpen(!shoppingCartModalOpen);
  };

  function ProductPage() {
    return (
      <section className="product-page-container">
        <div className="product-page-product-container">
          <div className="product-page-top-container">
            <div className="product-page-top-left"></div>
            <div className="product-page-top-right"></div>
          </div>
          <div className="product-page-bottom-container"></div>
        </div>
      </section>
    );
  }

  let pageBodyVisible;

  if (page === "landingPage") {
    pageBodyVisible = <LandingPageBody />;
  } else if (page === "CategoriesPage") {
    pageBodyVisible = <CategoriesPageBody setPage={setPage} />;
  } else if (page === "ProductPage") {
    pageBodyVisible = <ProductPage />;
  }

  return (
    <>
      <ShoppingCartModal
        toggleModal={toggleModal}
        shoppingCartModalOpen={shoppingCartModalOpen}
        userShoppingCart={userShoppingCart}
        setUserShoppingCart={setUserShoppingCart}
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
