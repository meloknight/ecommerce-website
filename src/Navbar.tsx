import { useState, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar(props: any) {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [itemsInShoppingCart, setItemsInShoppingCart] = useState(9);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    height: isScrolled ? "90px" : "135px",
    transition: "all 0.15s",
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div className="nav-container">
          <div className="nav-left">
            <button
              onClick={() => {
                props.setPage("landingPage");
              }}
              className="nav-button-left"
            >
              <div className="nav-logo">MIN</div>
            </button>
          </div>
          <div className="nav-right">
            <button
              onClick={() => {
                props.setPage("CategoriesPage");
              }}
              className="nav-buttons"
            >
              CATEGORIES
            </button>
            <button
              onClick={() => {
                props.setPage("ProductPage");
              }}
              className="nav-buttons"
            >
              PRODUCT PAGE
            </button>
            <button
              className={`nav-buttons shopping-cart-icon`}
              onClick={() => {
                props.toggleModal();
              }}
            >
              {props.userShoppingCart.length ? (
                <div className="shopping-cart-icon-counter">
                  {props.userShoppingCart.length}
                </div>
              ) : (
                ""
              )}
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
