import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import "./app.scss";

function ShoppingCartModal(props: any) {
  return (
    <>
      {props.shoppingCartModalOpen && (
        <div
          onClick={() => {
            props.toggleModal();
          }}
          className="shopping-cart-modal-transparent-backdrop"
        ></div>
      )}
      <div
        className={`shopping-cart-modal-container ${
          props.shoppingCartModalOpen && "shopping-cart-modal-container-active"
        }`}
      >
        <div className="shopping-cart-modal-top-container">
          <h1>Your Shopping Cart (0)</h1>
          <button
            onClick={() => {
              props.toggleModal();
            }}
          >
            X
          </button>
        </div>
        <div className="shopping-cart-modal-product-list-container">
          <div className="shopping-cart-product-card"></div>
          <div className="shopping-cart-product-card"></div>
          <div className="shopping-cart-product-card"></div>
          <div className="shopping-cart-product-card"></div>
        </div>
        <div className="shopping-cart-modal-subtotal-container">
          <div className="shopping-cart-subtotal-left-container">
            <div>Subtotal</div>
            <div>$45.00</div>
          </div>
          <div className="shopping-cart-subtotal-right-container">
            <button>Go to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [shoppingCartModalOpen, setShoppingCartModalOpen] = useState(false);
  const [page, setPage] = useState("CategoriesPage");

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
      />
      <Navbar setPage={setPage} toggleModal={toggleModal} />
      {pageBodyVisible}
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

export default App;
