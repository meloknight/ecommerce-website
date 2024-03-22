import { useState } from "react";
import TrendingSection from "./TrendingSection";
import { productInfoItemInterface, productInfo as pInfo } from "./productInfo";

export default function ProductPage(props: any) {
  console.log(props);

  const currentSelectedProductInfo = pInfo.find(
    (obj: productInfoItemInterface) => obj.productId === props.chosenProductId
  );

  const [currentImageHovered, setCurrentImageHovered] = useState(1);

  // const [
  //   currentQuantityOfProductSelected,
  //   setCurrentQuantityOfProductSelected,
  // ] = useState(1);

  const incrementQuantity = () => {
    props.setCurrentQuantityOfProductSelected(
      props.currentQuantityOfProductSelected + 1
    );
  };
  const decrementQuantity = () => {
    if (props.currentQuantityOfProductSelected > 1) {
      props.setCurrentQuantityOfProductSelected(
        props.currentQuantityOfProductSelected - 1
      );
    }
  };

  function addItemToShoppingCart() {
    let isItemInList: boolean = false;
    const newItem = {
      selectedProductId: currentSelectedProductInfo?.productId,
      quantitySelected: props.currentQuantityOfProductSelected,
    };

    const updatedItems = props.userShoppingCart.map((item: any) => {
      if (item.selectedProductId === newItem.selectedProductId) {
        isItemInList = true;
        return {
          selectedProductId: item.selectedProductId,
          quantitySelected: item.quantitySelected + newItem.quantitySelected,
        };
      }
      return item;
    });

    if (isItemInList === false) {
      updatedItems.push(newItem);
    }

    props.setUserShoppingCart(updatedItems);
  }

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
                  <button onClick={decrementQuantity}>-</button>
                  <div>{props.currentQuantityOfProductSelected}</div>
                  <button onClick={incrementQuantity}>+</button>
                </div>
                <div className="product-page-total-price">
                  $
                  {currentSelectedProductInfo?.productPrice
                    ? currentSelectedProductInfo.productPrice *
                      props.currentQuantityOfProductSelected
                    : 0}
                </div>
              </div>
              <div className="product-page-button-container product-page-top-right-subsections">
                <button
                  onClick={addItemToShoppingCart}
                  className="add-to-cart-button"
                >
                  ADD TO CART
                </button>
                <button className="buy-now-button">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="product-page-bottom-container">
            <div className="product-texture-container">
              <h2>Texture:</h2>
              <p>{currentSelectedProductInfo?.productTexture}</p>
            </div>
            <div className="product-texture-container">
              <h2>Weight:</h2>
              <p>{currentSelectedProductInfo?.productWeightInLbs} lbs</p>
            </div>
            <div className="product-texture-container">
              <h2>Size:</h2>
              <p>{currentSelectedProductInfo?.productSize}</p>
            </div>
          </div>
        </div>
      </section>
      <TrendingSection
        setChosenProductId={props.setChosenProductId}
        setPage={props.setPage}
      />
    </>
  );
}
