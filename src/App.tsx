import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import ShoppingCartModal from "./ShoppingCartModal";
import TrendingSection from "./TrendingSection";
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
      <>
        <section className="product-page-container">
          <div className="product-page-product-container">
            <div className="product-page-top-container">
              <div className="product-page-top-left">
                <div className="product-page-main-image-container">
                  <img
                    // src=""
                    src="/assets/product-images/black-and-white-lamp/black-and-white-lamp-1.jpeg"
                    alt=""
                  />
                </div>
                <div className="product-page-secondary-images-container">
                  <div className="first-product-image-container">
                    <img
                      src="/assets/product-images/black-and-white-lamp/black-and-white-lamp-1.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="second-product-image-container">
                    <img
                      src="/assets/product-images/black-and-white-lamp/black-and-white-lamp-1.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="third-product-image-container">
                    <img
                      src="/assets/product-images/black-and-white-lamp/black-and-white-lamp-1.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product-page-top-right">
                <h1 className="product-page-top-right-subsections">
                  Comfy Chair
                </h1>
                <p className="product-page-top-right-subsections">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur voluptate dicta quas ex expedita, dolores ipsam
                  voluptatibus, exercitationem nostrum vero nemo praesentium
                  error quos sint.
                </p>
                <div className="product-page-quantity-container product-page-top-right-subsections">
                  <div>Quantity</div>
                  <div className="product-page-quantity-selector">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                  <div>$111.00</div>
                </div>
                <div className="product-page-button-container product-page-top-right-subsections">
                  <button className="add-to-cart-button">ADD TO CART</button>
                  <button className="buy-now-button">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="product-page-bottom-container">
              <div className="product-texture-container">
                <h2>Texture:</h2>
                <p>Comfy Material</p>
              </div>
              <div className="product-texture-container">
                <h2>Texture:</h2>
                <p>Comfy Material</p>
              </div>
              <div className="product-texture-container">
                <h2>Texture:</h2>
                <p>Comfy Material</p>
              </div>
            </div>
          </div>
        </section>
        <TrendingSection />
      </>
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
