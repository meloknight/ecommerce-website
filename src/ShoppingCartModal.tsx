import ShoppingCartProductCard from "./ShoppingCartProductCard";
import { productInfo } from "./productInfo";
// userShoppingCart was passed as a prop to ShoppingCartModal
export default function ShoppingCartModal(props: any) {
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
