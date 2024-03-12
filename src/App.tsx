import { useState, useEffect } from "react";
import "./app.scss";

function App() {
  function ProudCard(props: any) {
    return (
      <>
        <div className="proud-product-card">
          <div className="proud-top-container">
            <img src={props.productImage} alt={props.productName} />
          </div>
          <div className="proud-bottom-container">
            <h3>{props.productName}</h3>
            <h2>${props.productPrice}</h2>
          </div>
        </div>
      </>
    );
  }

  const Navbar = () => {
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
      height: isScrolled ? "100px" : "135px",
      transition: "all 0.2s",
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
              <button className="nav-buttons">[]/</button>
            </div>
          </div>
        </nav>
        {/* <div className="nav-underline"></div> */}
      </>
    );
  };

  return (
    <>
      {/* NAV SECTION */}
      <Navbar />

      {/* HOME SECTION */}

      <main>
        <section className="home">
          <div className="home-item-container">
            <div className="home-live-comfortably">
              {/* <img
                src="src/assets/beautiful-cozy-livingroom-977066343.png"
                alt="livingroom"
              /> */}
              <h2>Live Comfortably</h2>
            </div>
            <div className="home-skincare">
              {/* <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                alt="livingroom"
              /> */}
              <h2>Skin Care</h2>
            </div>
            <div className="home-kitchen">
              {/* <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                alt="livingroom"
              /> */}
              <h2>Kitchen</h2>
            </div>
            <div className="home-electronics">
              {/* <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                alt="livingroom"
              /> */}
              <h2>Electronics</h2>
            </div>
          </div>
        </section>

        {/* PROUD SECTION */}

        <section className="proud-of">
          <div className="proud-of-centering-container">
            <div className="proud-of-title">
              <h1>Products we are proud of</h1>
            </div>
            <div className="proud-of-card-container">
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/2.f312c91f99a2c3a60550.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
              <ProudCard
                productName="Fluffy Armchair"
                productPrice="629"
                productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
              />
            </div>
          </div>
        </section>

        {/* BANNER 1 SECTION */}

        <section className="banner">
          <div className="banner-container">
            <div className="banner-content-container">
              <div className="banner-content-inner-container">
                <h1>Creative harmonious living</h1>
                <p>
                  MIN products are all amde to standard sizes so that you can
                  mix and match them freely.
                </p>
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="banner-image-container">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/banner2.03a2ebf8d998e53d1019.jpg"
                alt="bookshelf filler image"
              />
            </div>
          </div>
        </section>

        {/* TRENDING SECTION */}

        <section className="trending">
          <div className="trending-container">
            <div className="trending-top-container">
              <div className="trending-top-left-container">
                <h2>Trending Now</h2>
              </div>
              <div className="trending-top-right-container">
                <button className="trending-arrow-left">A</button>
                <button className="trending-arrow-right">B</button>
              </div>
            </div>
            <div className="trending-bottom-container">
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
              <div className="trending-bottom-card">A</div>
            </div>
          </div>
        </section>

        {/* BANNER 2 SECTION */}

        <section className="banner">
          <div className="banner-container">
            <div className="banner-left-container"></div>
            <div className="banner-right-container"></div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}

        <section className="newsletter">
          <div className="newsletter-container">
            <h1>Newsletter</h1>
            <div className="newsletter-bottom-container">
              <input type="text" placeholder="your@email.com" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}

      <footer>
        <div className="footer-container">
          <div className="footer-top-container">
            <button>About</button>
            <button>Store Locator</button>
            <button>FAQs</button>
            <button>News</button>
            <button>Careers</button>
            <button>Contact Us</button>
          </div>
          <div className="footer-bottom-container">Design by Abderraouf</div>
        </div>
      </footer>
    </>
  );
}

export default App;
