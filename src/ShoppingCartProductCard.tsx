// import { productInfoItemInterface } from "./productInfo";
// import { shoppingCartItemInterface } from "./App";
// import { productInfo } from "./productInfo";

type shoppingCartCardPropsType = {
  setUserShoppingCart: any;
  userShoppingCart: any;
  item: any;
  // item: shoppingCartItemInterface;
  productInfo: any;
};

export default function ShoppingCartProductCard({
  setUserShoppingCart,
  userShoppingCart,
  item,
  productInfo,
}: shoppingCartCardPropsType) {
  // console.log(item.selectedProductId);

  const cardProduct: any = productInfo.filter(
    (product: any) => product.productId === item.selectedProductId
  )[0];

  const incrementQuantity = () => {
    setUserShoppingCart(
      userShoppingCart.map((cartItem: any) =>
        cartItem.selectedProductId === item.selectedProductId
          ? { ...cartItem, quantitySelected: cartItem.quantitySelected + 1 }
          : cartItem
      )
    );
  };

  const decrementQuantity = () => {
    if (item.quantitySelected > 1) {
      setUserShoppingCart(
        userShoppingCart.map((cartItem: any) =>
          cartItem.selectedProductId === item.selectedProductId
            ? { ...cartItem, quantitySelected: cartItem.quantitySelected - 1 }
            : cartItem
        )
      );
    }
  };

  const removeItemFromCart = () => {
    setUserShoppingCart(
      userShoppingCart.filter(
        (cartItem: any) => cartItem.selectedProductId !== item.selectedProductId
      )
    );
  };

  return (
    <div className="shopping-cart-product-card">
      <div className="shopping-cart-card-left-container">
        <img
          src={cardProduct.firstProductImage}
          alt={cardProduct.productName}
        />
      </div>
      <div className="shopping-cart-card-center-container">
        <div className="shopping-cart-card-product-name">
          {cardProduct.productName}
        </div>
        <div className="shopping-cart-card-product-amount-container">
          <button onClick={() => decrementQuantity()}>-</button>
          <div>{item.quantitySelected}</div>
          <button onClick={() => incrementQuantity()}>+</button>
        </div>
      </div>
      <div className="shopping-cart-card-right-container">
        <div>${item.quantitySelected * cardProduct.productPrice}</div>
        <button onClick={() => removeItemFromCart()}>X</button>
      </div>
    </div>
  );
}
