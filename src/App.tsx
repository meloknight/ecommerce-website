import "./app.scss";

function App() {
  function ProudCard() {
    return (
      <>
        <div className="proud-product-card">
          <div className="proud-top-container"></div>
          <div className="proud-bottom-container">
            <h3>Fluffy Armchair</h3>
            <h2>$629</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav>
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
      <div className="nav-underline"></div>
      <main>
        <section className="home">
          <div className="home-item-container">
            <div className="home-live-comfortably">
              <h2>Live Comfortably</h2>
            </div>
            <div className="home-skincare">
              <h2>Skin Care</h2>
            </div>
            <div className="home-kitchen">
              <h2>Kitchen</h2>
            </div>
            <div className="home-electronics">
              <h2>Electronics</h2>
            </div>
          </div>
        </section>
        <section className="proud-of">
          <div className="proud-of-centering-container">
            <div className="proud-of-title">
              <h1>Products we are proud of</h1>
            </div>
            <div className="proud-of-card-container">
              <ProudCard />
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
              <div className="proud-product-card">A</div>
            </div>
          </div>
        </section>
        <section className="banner">
          <div className="banner-container">
            <div className="banner-left-container"></div>
            <div className="banner-right-container"></div>
          </div>
        </section>
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
        <section className="banner">
          <div className="banner-container">
            <div className="banner-left-container"></div>
            <div className="banner-right-container"></div>
          </div>
        </section>
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
