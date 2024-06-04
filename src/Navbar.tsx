import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { scrollToTopFast } from "./reusableFunctions";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props: any) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hamburgerMenuStyle = {
    top: isScrolled ? "90px" : "135px",
    height: hamburgerMenuActive ? "200px" : "0",
  };

  const numberOfItemsInShoppingCart = (userCart: any) => {
    let sum: number = 0;
    for (let i = 0; i < userCart.length; i++) {
      sum += userCart[i].quantitySelected;
    }
    return sum;
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div className="nav-container">
          <div className="nav-left">
            <button
              onClick={() => {
                props.setPage("LandingPage");
                scrollToTopFast();
              }}
              className="nav-button-left"
            >
              <div className="nav-logo">MIN</div>
            </button>
          </div>
          <div className="nav-right">
            {screenWidth > 700 ? (
              <>
                <button
                  onClick={() => {
                    props.setPage("CategoriesPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  CATEGORIES
                </button>
                <button
                  onClick={() => {
                    props.setPage("ProductPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  PRODUCT PAGE
                </button>
              </>
            ) : (
              <button
                onClick={() => setHamburgerMenuActive(!hamburgerMenuActive)}
                className="nav-buttons"
              >
                <GiHamburgerMenu />
              </button>
            )}
            <button
              className={`nav-buttons shopping-cart-icon`}
              onClick={() => {
                props.toggleModal();
              }}
            >
              {props.userShoppingCart.length ? (
                <div className="shopping-cart-icon-counter">
                  {/* {props.userShoppingCart.length} */}
                  {numberOfItemsInShoppingCart(props.userShoppingCart)}
                </div>
              ) : (
                ""
              )}
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={hamburgerMenuActive ? "hamburger-menu" : ""}
        style={hamburgerMenuStyle}
      >
        <>
          <button
            onClick={() => {
              setHamburgerMenuActive(false);
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="nav-buttons"
          >
            CATEGORIES
          </button>
          <button
            onClick={() => {
              setHamburgerMenuActive(false);
              props.setPage("ProductPage");
              scrollToTopFast();
            }}
            className="nav-buttons"
          >
            PRODUCT PAGE
          </button>
        </>
      </div>
    </>
  );
}
