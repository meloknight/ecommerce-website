import { shoppingCartItemInterface } from "./App";
import ShoppingCartProductCard from "./ShoppingCartProductCard";
import { productInfo } from "./productInfo";
// import { shoppingCartItemInterface } from "./App";

type shoppingCartModalPropsType = {
  toggleModal: () => void;
  shoppingCartModalOpen: boolean;
  // userShoppingCart: shoppingCartItemInterface[];
  userShoppingCart: any;
  setUserShoppingCart: any;
};

export default function ShoppingCartModal(props: shoppingCartModalPropsType) {
  const {
    toggleModal,
    shoppingCartModalOpen,
    userShoppingCart,
    setUserShoppingCart,
  } = props;
  function shoppingCartSubtotal(): number {
    if (userShoppingCart !== false) {
      let sum: number = 0;
      for (let i = 0; i < userShoppingCart.length; i++) {
        let id: number = userShoppingCart[i].selectedProductId;
        const prePrice: any = productInfo.find(
          (product: any) => product.productId === id
        );
        const price: number = prePrice.productPrice;
        sum += userShoppingCart[i].quantitySelected * price;
      }
      return sum;
    }
    return 0;
  }

  return (
    <>
      {shoppingCartModalOpen && (
        <div
          onClick={() => {
            toggleModal();
          }}
          className="shopping-cart-modal-transparent-backdrop"
        ></div>
      )}
      <div
        className={`shopping-cart-modal-container ${
          shoppingCartModalOpen && "shopping-cart-modal-container-active"
        }`}
      >
        <div className="shopping-cart-modal-top-container">
          <h1>Your Shopping Cart</h1>
          <button
            onClick={() => {
              toggleModal();
            }}
          >
            X
          </button>
        </div>
        <div className="shopping-cart-modal-product-list-container">
          {userShoppingCart.map((item: shoppingCartItemInterface) => (
            <ShoppingCartProductCard
              key={item.selectedProductId}
              setUserShoppingCart={setUserShoppingCart}
              userShoppingCart={userShoppingCart}
              item={item}
              productInfo={productInfo}
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
