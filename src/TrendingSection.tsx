import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function TrendingSection(props: any) {
  const singleTrendingCardOffset: number = 240;
  const [trendingOffset, setTrendingOffset] = useState(0);
  const [trendingContainerWidth, setTrendingContainerWidth] = useState(0);
  const trendingContainerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (trendingContainerRef.current) {
        const trendWidth =
          trendingContainerRef.current.getBoundingClientRect().width;
        setTrendingContainerWidth(trendWidth);
        setTrendingOffset(0);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  let cardsOnScreen: number = Math.floor(
    trendingContainerWidth / singleTrendingCardOffset
  );
  let cardsOffScreen: number = 9 - cardsOnScreen;

  function offsetTrendingLeft() {
    if (trendingOffset < 0) {
      if (trendingOffset + singleTrendingCardOffset > 0) {
        setTrendingOffset(0);
      } else {
        setTrendingOffset(trendingOffset + singleTrendingCardOffset);
      }
    }
  }
  function offsetTrendingRight() {
    if (trendingOffset > -(cardsOffScreen * singleTrendingCardOffset)) {
      if (
        trendingOffset - singleTrendingCardOffset <=
        -(2150 - trendingContainerWidth)
      ) {
        setTrendingOffset(-(2150 - trendingContainerWidth));
      } else {
        setTrendingOffset(trendingOffset - singleTrendingCardOffset);
      }
    }
  }

  return (
    <section className="trending">
      <div className="trending-container" ref={trendingContainerRef}>
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
