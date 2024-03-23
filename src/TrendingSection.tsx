import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function TrendingSection(props: any) {
  const singleTrendingCardOffset: number = 240;
  const [trendingOffset, setTrendingOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  console.log(`trending offset: ${trendingOffset}`);
  console.log(`viewport width: ${viewportWidth}`);

  function offsetTrendingLeft() {
    if (trendingOffset < 0) {
      setTrendingOffset(trendingOffset + 240);
    }
  }

  function offsetTrendingRight() {
    if (trendingOffset > -viewportWidth) {
      setTrendingOffset(trendingOffset - 240);
    }

    // if (1200 < viewportWidth) {
    //   if (trendingOffset > -4 * singleTrendingCardOffset) {
    //     setTrendingOffset(trendingOffset - 240);
    //   }
    // } else if (1000 < viewportWidth && viewportWidth <= 1200) {
    //   if (trendingOffset > -5 * singleTrendingCardOffset) {
    //     setTrendingOffset(trendingOffset - 240);
    //   }
    // } else if (750 < viewportWidth && viewportWidth <= 1000) {
    //   if (trendingOffset > -6 * singleTrendingCardOffset) {
    //     setTrendingOffset(trendingOffset - 240);
    //   }
    // } else if (500 < viewportWidth && viewportWidth <= 750) {
    //   if (trendingOffset > -7 * singleTrendingCardOffset) {
    //     setTrendingOffset(trendingOffset - 240);
    //   }
    // } else if (0 < viewportWidth && viewportWidth <= 500) {
    //   if (trendingOffset > -8 * singleTrendingCardOffset) {
    //     setTrendingOffset(trendingOffset - 240);
    //   }
    // }
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
          id="slider"
          style={{
            transform: `translateX(${trendingOffset}px)`,
          }}
        >
          <ProductCard
            cardType="trending"
            productId={pInfo[10].productId}
            productName={pInfo[10].productName}
            productPrice={pInfo[10].productPrice}
            productImage={pInfo[10].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[11].productId}
            productName={pInfo[11].productName}
            productPrice={pInfo[11].productPrice}
            productImage={pInfo[11].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[12].productId}
            productName={pInfo[12].productName}
            productPrice={pInfo[12].productPrice}
            productImage={pInfo[12].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[13].productId}
            productName={pInfo[13].productName}
            productPrice={pInfo[13].productPrice}
            productImage={pInfo[13].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[14].productId}
            productName={pInfo[14].productName}
            productPrice={pInfo[14].productPrice}
            productImage={pInfo[14].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[15].productId}
            productName={pInfo[15].productName}
            productPrice={pInfo[15].productPrice}
            productImage={pInfo[15].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[16].productId}
            productName={pInfo[16].productName}
            productPrice={pInfo[16].productPrice}
            productImage={pInfo[16].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[17].productId}
            productName={pInfo[17].productName}
            productPrice={pInfo[17].productPrice}
            productImage={pInfo[17].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
          <ProductCard
            cardType="trending"
            productId={pInfo[18].productId}
            productName={pInfo[18].productName}
            productPrice={pInfo[18].productPrice}
            productImage={pInfo[18].firstProductImage}
            setChosenProductId={props.setChosenProductId}
            setPage={props.setPage}
          />
        </div>
      </div>
    </section>
  );
}
