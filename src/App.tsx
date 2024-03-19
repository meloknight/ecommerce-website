import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import CategoriesPageBody from "./CategoriesPageBody";
import ShoppingCartModal from "./ShoppingCartModal";
import TrendingSection from "./TrendingSection";
import "./app.scss";

import { productInfo as pInfo, productInfoItemInterface } from "./productInfo";

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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // PRODUCT PAGE CODE
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const [chosenProductId, setChosenProductId] = useState(5);

  function ProductPage() {
    const currentSelectedProductInfo = pInfo.find(
      (obj: productInfoItemInterface) => obj.productId === chosenProductId
    );

    const [currentImageHovered, setCurrentImageHovered] = useState(1);
    const [
      currentQuantityOfProductSelected,
      setCurrentQuantityOfProductSelected,
    ] = useState(4);

    function updateMainProductImage() {
      if (currentImageHovered === 1) {
        return currentSelectedProductInfo?.firstProductImage;
      } else if (currentImageHovered === 2) {
        return currentSelectedProductInfo?.secondProductImage;
      } else if (currentImageHovered === 3) {
        return currentSelectedProductInfo?.thirdProductImage;
      } else {
        return currentSelectedProductInfo?.firstProductImage;
      }
    }

    return (
      <>
        <section className="product-page-container">
          <div className="product-page-product-container">
            <div className="product-page-top-container">
              <div className="product-page-top-left">
                <div className="product-page-main-image-container">
                  <img
                    src={updateMainProductImage()}
                    alt={currentSelectedProductInfo?.productName}
                  />
                </div>
                <div className="product-page-secondary-images-container">
                  <div
                    className="first-product-image-container"
                    onMouseEnter={() => setCurrentImageHovered(1)}
                  >
                    <img
                      src={currentSelectedProductInfo?.firstProductImage}
                      alt={currentSelectedProductInfo?.productName}
                    />
                  </div>
                  <div
                    className="second-product-image-container"
                    onMouseEnter={() => setCurrentImageHovered(2)}
                  >
                    <img
                      src={currentSelectedProductInfo?.secondProductImage}
                      alt={currentSelectedProductInfo?.productName}
                    />
                  </div>
                  <div
                    className="third-product-image-container"
                    onMouseEnter={() => setCurrentImageHovered(3)}
                  >
                    <img
                      src={currentSelectedProductInfo?.thirdProductImage}
                      alt={currentSelectedProductInfo?.productName}
                    />
                  </div>
                </div>
              </div>
              <div className="product-page-top-right">
                <h1 className="product-page-top-right-subsections">
                  {currentSelectedProductInfo?.productName}
                </h1>
                <p className="product-page-top-right-subsections">
                  {currentSelectedProductInfo?.productDescription}
                </p>
                <div className="product-page-quantity-container product-page-top-right-subsections">
                  <div>Quantity</div>
                  <div className="product-page-quantity-selector">
                    <button>-</button>
                    <div>{currentQuantityOfProductSelected}</div>
                    <button>+</button>
                  </div>
                  <div>
                    $
                    {currentSelectedProductInfo?.productPrice
                      ? currentSelectedProductInfo.productPrice *
                        currentQuantityOfProductSelected
                      : 0}
                  </div>
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // PRODUCT PAGE CODE END
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
