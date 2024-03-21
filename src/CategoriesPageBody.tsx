// import { useState } from "react";

import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CategoriesPageBody(props: any) {
  // const [categorySelected, setCategorySelected] = useState("All");
  let filteredProductInfo;

  if (props.categorySelected != "All") {
    filteredProductInfo = pInfo.filter(
      (item) => item.productType === props.categorySelected
    );
  } else {
    filteredProductInfo = pInfo;
  }

  return (
    <>
      <section className="categories-body-container">
        <div className="categories-top-container">
          <button
            onClick={() => {
              props.setPage("LandingPage");
            }}
          >
            <div>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <span>Home</span>
          </button>
          <h1>ALL</h1>
          <div></div>
        </div>
        <div className="categories-sorting-button-container">
          <button onClick={() => props.setCategorySelected("All")}>All</button>
          <button onClick={() => props.setCategorySelected("Furniture")}>
            Furniture
          </button>
          <button onClick={() => props.setCategorySelected("Electronics")}>
            Electronics
          </button>
          <button onClick={() => props.setCategorySelected("Lamps")}>
            Lamps
          </button>
          <button onClick={() => props.setCategorySelected("Kitchen")}>
            Kitchen
          </button>
          <button onClick={() => props.setCategorySelected("Chairs")}>
            Chairs
          </button>
          <button onClick={() => props.setCategorySelected("Skin Care")}>
            Skin Care
          </button>
        </div>
        <div className="categories-card-container">
          {filteredProductInfo.map((item) => (
            <ProductCard
              cardType="proud"
              key={item.productId}
              productId={item.productId}
              productName={item.productName}
              productPrice={item.productPrice}
              productImage={item.firstProductImage}
              setPage={props.setPage}
              setChosenProductId={props.setChosenProductId}
            />
          ))}
        </div>
      </section>
    </>
  );
}
