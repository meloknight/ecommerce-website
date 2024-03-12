import { useState, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <button className="nav-button-left">
              <div className="nav-logo">MIN</div>
              {/* <img src="#" alt="logo" className="nav-logo" /> */}
            </button>
          </div>
          <div className="nav-right">
            <button className="nav-buttons">CATEGORIES</button>
            <button className="nav-buttons">PRODUCT PAGE</button>
            <button className="nav-buttons">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>
      {/* <div className="nav-underline"></div> */}
    </>
  );
}
