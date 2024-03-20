import ShoppingCartProductCard from "./ShoppingCartProductCard";
import { productInfo } from "./productInfo";
// userShoppingCart was passed as a prop to ShoppingCartModal
export default function ShoppingCartModal(props: any) {
  // console.log(props);

  function shoppingCartSubtotal(): number {
    if (props.userShoppingCart !== false) {
      let sum: number = 0;
      for (let i = 0; i < props.userShoppingCart.length; i++) {
        let id: number = props.userShoppingCart[i].selectedProductId;
        const prePrice: any = props.pInfo.find(
          (product: any) => product.productId === id
        );
        const price: number = prePrice.productPrice;
        sum += props.userShoppingCart[i].quantitySelected * price;
      }
      return sum;
    }
    return 0;
  }

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
          <h1>Your Shopping Cart</h1>
          <button
            onClick={() => {
              props.toggleModal();
            }}
          >
            X
          </button>
        </div>
        <div className="shopping-cart-modal-product-list-container">
          {props.userShoppingCart.map((item: any) => (
            <ShoppingCartProductCard
              key={item.selectedProductId}
              setUserShoppingCart={props.setUserShoppingCart}
              productInfo={productInfo}
              item={item}
            />
          ))}
        </div>
        <div className="shopping-cart-modal-subtotal-container">
          <div className="shopping-cart-subtotal-left-container">
            <div>Subtotal</div>
            <div>${shoppingCartSubtotal()}</div>
          </div>
          <div className="shopping-cart-subtotal-right-container">
            <button>Go to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
