export default function ShoppingCartProductCard() {
  return (
    <div className="shopping-cart-product-card">
      <div className="shopping-cart-card-left-container">
        <img
          src="https://minimalist-e-commerce.vercel.app/static/media/2.f312c91f99a2c3a60550.jpg"
          alt="toaster"
        />
      </div>
      <div className="shopping-cart-card-center-container">
        <div className="shopping-cart-card-product-name">Pop-up Toaster</div>
        <div className="shopping-cart-card-product-amount-container">
          <button>-</button>
          <div>4</div>
          <button>+</button>
        </div>
      </div>
      <div className="shopping-cart-card-right-container">
        <div>$45.00</div>
        <button>X</button>
      </div>
    </div>
  );
}
