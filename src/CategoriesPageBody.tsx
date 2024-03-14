import ProductCard from "./ProductCard";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CategoriesPageBody(props: any) {
  return (
    <>
      <section className="categories-body-container">
        <div className="categories-top-container">
          <button
            onClick={() => {
              props.setPage("landingPage");
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
          <button>All</button>
          <button>Furnitures</button>
          <button>Electronics</button>
          <button>Lamps</button>
          <button>Kitchen</button>
          <button>Chairs</button>
          <button>Skin Care</button>
        </div>
        <div className="categories-card-container">
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
      </section>
    </>
  );
}
