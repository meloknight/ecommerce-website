import { productInfoItemInterface } from "./productInfo";
import { shoppingCartItemInterface } from "./App";

export default function ShoppingCartProductCard(props: any) {
  const currentCardsProductInfo = props.productInfo.find(
    (info: productInfoItemInterface) =>
      info.productId === props.item.selectedProductId
  );

  function increaseProductQuantity() {
    props.setUserShoppingCart(
      (prevShoppingCart: shoppingCartItemInterface[]) => {
        return prevShoppingCart.map((item) => {
          if (item.selectedProductId === currentCardsProductInfo.productId) {
            return { ...item, value: item.quantitySelected++ };
          }
          return item;
        });
      }
    );
  }

  function decreaseProductQuantity() {
    props.setUserShoppingCart(
      (prevShoppingCart: shoppingCartItemInterface[]) => {
        return prevShoppingCart.map((item) => {
          if (
            item.selectedProductId === currentCardsProductInfo.productId &&
            item.quantitySelected > 1
          ) {
            return { ...item, value: item.quantitySelected-- };
          }
          return item;
        });
      }
    );
  }

  const removeShoppingCartItem = () => {
    props.setUserShoppingCart((prevShoppingCart: shoppingCartItemInterface[]) =>
      prevShoppingCart.filter(
        (item) => item.selectedProductId !== currentCardsProductInfo.productId
      )
    );
  };

  return (
    <div className="shopping-cart-product-card">
      <div className="shopping-cart-card-left-container">
        <img
          src={currentCardsProductInfo.firstProductImage}
          alt={currentCardsProductInfo.productName}
        />
      </div>
      <div className="shopping-cart-card-center-container">
        <div className="shopping-cart-card-product-name">
          {currentCardsProductInfo.productName}
        </div>
        <div className="shopping-cart-card-product-amount-container">
          <button onClick={decreaseProductQuantity}>-</button>
          <div>{props.item.quantitySelected}</div>
          <button onClick={increaseProductQuantity}>+</button>
        </div>
      </div>
      <div className="shopping-cart-card-right-container">
        <div>
          ${props.item.quantitySelected * currentCardsProductInfo.productPrice}
        </div>
        <button onClick={removeShoppingCartItem}>X</button>
      </div>
    </div>
  );
}
