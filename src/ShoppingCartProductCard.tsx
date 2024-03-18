import { productInfoItemInterface } from "./productInfo";
import { shoppingCartItemInterface } from "./App";

export default function ShoppingCartProductCard(props: any) {
  // console.log(props.item.selectedProductId);
  // console.log(props.productInfo);

  const currentCardsproductInfo = props.productInfo.find(
    (obj: productInfoItemInterface) =>
      obj.productId === props.item.selectedProductId
  );

  // console.log(currentCardsproductInfo);

  const increaseProductQuantity = () => {
    props.setUserShoppingCart(
      (prevShoppingCart: shoppingCartItemInterface[]) => {
        return prevShoppingCart.map((item) => {
          if (item.selectedProductId === currentCardsproductInfo.productId) {
            return { ...item, value: item.quantitySelected++ };
          }
          return item;
        });
      }
    );
  };

  const decreaseProductQuantity = () => {
    props.setUserShoppingCart(
      (prevShoppingCart: shoppingCartItemInterface[]) => {
        return prevShoppingCart.map((item) => {
          if (
            item.selectedProductId === currentCardsproductInfo.productId &&
            item.quantitySelected > 1
          ) {
            return { ...item, value: item.quantitySelected-- };
          }
          return item;
        });
      }
    );
  };

  const removeShoppingCartItem = () => {
    props.setUserShoppingCart((prevShoppingCart: shoppingCartItemInterface[]) =>
      prevShoppingCart.filter(
        (item) => item.selectedProductId !== currentCardsproductInfo.productId
      )
    );
  };

  return (
    <div className="shopping-cart-product-card">
      <div className="shopping-cart-card-left-container">
        <img
          src={currentCardsproductInfo.firstProductImage}
          alt={currentCardsproductInfo.productName}
        />
      </div>
      <div className="shopping-cart-card-center-container">
        <div className="shopping-cart-card-product-name">
          {currentCardsproductInfo.productName}
        </div>
        <div className="shopping-cart-card-product-amount-container">
          <button onClick={decreaseProductQuantity}>-</button>
          <div>{props.item.quantitySelected}</div>
          <button onClick={increaseProductQuantity}>+</button>
        </div>
      </div>
      <div className="shopping-cart-card-right-container">
        <div>
          ${props.item.quantitySelected * currentCardsproductInfo.productPrice}
        </div>
        <button onClick={removeShoppingCartItem}>X</button>
      </div>
    </div>
  );
}
