import { useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function LandingPageBody() {
  const singleTrendingCardOffset: number = 240;
  const [trendingOffset, setTrendingOffset] = useState(
    singleTrendingCardOffset
  );

  function offsetTrendingLeft() {
    if (trendingOffset < 0) {
      setTrendingOffset(trendingOffset + 240);
    }
  }

  function offsetTrendingRight() {
    if (trendingOffset > -4 * singleTrendingCardOffset) {
      setTrendingOffset(trendingOffset - 240);
    }
  }

  function ProductCard(props: any) {
    return (
      <>
        <div className={`${props.cardType}-product-card`}>
          <div className={`${props.cardType}-card-top-container`}>
            <img src={props.productImage} alt={props.productName} />
          </div>
          <div className={`${props.cardType}-card-bottom-container`}>
            <h3>{props.productName}</h3>
            <h2>${props.productPrice}</h2>
          </div>
        </div>
      </>
    );
  }

  return (
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

      {/* PROUD SECTION */}

      <section className="proud-of">
        <div className="proud-of-centering-container">
          <div className="proud-of-title">
            <h1>Products we are proud of</h1>
          </div>
          <div className="proud-of-card-container">
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/2.f312c91f99a2c3a60550.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
              productName="Fluffy Armchair"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="proud"
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
                MIN products are all amde to standard sizes so that you can mix
                and match them freely.
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
              <button
                onClick={() => offsetTrendingLeft()}
                className="trending-arrow-left"
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button
                onClick={() => offsetTrendingRight()}
                className="trending-arrow-right"
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div
            className="trending-bottom-container"
            style={{
              transform: `translateX(${trendingOffset}px)`,
            }}
          >
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair A"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair B"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair C"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair D"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair E"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair F"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair G"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair H"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
            <ProductCard
              cardType="trending"
              productName="Fluffy Armchair I"
              productPrice="629"
              productImage="https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg"
            />
          </div>
        </div>
      </section>

      {/* BANNER 2 SECTION */}

      <section className="banner">
        <div className="banner-container">
          <div className="banner-image-container">
            <img
              src="https://minimalist-e-commerce.vercel.app/static/media/banner1.021adea5caa612e7dea0.jpg"
              alt="bookshelf filler image"
            />
          </div>
          <div className="banner-content-container">
            <div className="banner-content-inner-container">
              <h1>Comfortable & Elegant Living</h1>
              <p>
                MIN products are all made to standard sizes so that you can mix
                and match them freely.
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
