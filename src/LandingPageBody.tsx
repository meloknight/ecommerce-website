import { useState } from "react";
import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function LandingPageBody() {
  const singleTrendingCardOffset: number = 240;
  const [trendingOffset, setTrendingOffset] = useState(0);

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
              productName={pInfo[0].productName}
              productPrice={pInfo[0].productPrice}
              productImage={pInfo[0].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[1].productName}
              productPrice={pInfo[1].productPrice}
              productImage={pInfo[1].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[2].productName}
              productPrice={pInfo[2].productPrice}
              productImage={pInfo[2].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[3].productName}
              productPrice={pInfo[3].productPrice}
              productImage={pInfo[3].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[4].productName}
              productPrice={pInfo[4].productPrice}
              productImage={pInfo[4].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[5].productName}
              productPrice={pInfo[5].productPrice}
              productImage={pInfo[5].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[6].productName}
              productPrice={pInfo[6].productPrice}
              productImage={pInfo[6].firstProductImage}
            />
            <ProductCard
              cardType="proud"
              productName={pInfo[9].productName}
              productPrice={pInfo[9].productPrice}
              productImage={pInfo[9].firstProductImage}
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
              productName={pInfo[10].productName}
              productPrice={pInfo[10].productPrice}
              productImage={pInfo[10].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[11].productName}
              productPrice={pInfo[11].productPrice}
              productImage={pInfo[11].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[12].productName}
              productPrice={pInfo[12].productPrice}
              productImage={pInfo[12].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[13].productName}
              productPrice={pInfo[13].productPrice}
              productImage={pInfo[13].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[14].productName}
              productPrice={pInfo[14].productPrice}
              productImage={pInfo[14].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[15].productName}
              productPrice={pInfo[15].productPrice}
              productImage={pInfo[15].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[16].productName}
              productPrice={pInfo[16].productPrice}
              productImage={pInfo[16].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[17].productName}
              productPrice={pInfo[17].productPrice}
              productImage={pInfo[17].firstProductImage}
            />
            <ProductCard
              cardType="trending"
              productName={pInfo[18].productName}
              productPrice={pInfo[18].productPrice}
              productImage={pInfo[18].firstProductImage}
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
