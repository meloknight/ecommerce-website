import { useState } from "react";

import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function TrendingSection() {
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
  );
}
