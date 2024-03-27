import ProductCard from "./ProductCard";
import { productInfo as pInfo } from "./productInfo";
import TrendingSection from "./TrendingSection";
import { scrollToTopFast } from "./reusableFunctions";

export default function LandingPageBody(props: any) {
  return (
    <main>
      <section className="home">
        <div className="home-item-container">
          <div
            onClick={() => {
              props.setCategorySelected("Furniture");
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="home-live-comfortably"
          >
            <h2>Live Comfortably</h2>
          </div>
          <div
            onClick={() => {
              props.setCategorySelected("Skin Care");
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="home-skincare"
          >
            <h2>Skin Care</h2>
          </div>
          <div
            onClick={() => {
              props.setCategorySelected("Kitchen");
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="home-kitchen"
          >
            <h2>Kitchen</h2>
          </div>
          <div
            onClick={() => {
              props.setCategorySelected("Electronics");
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="home-electronics"
          >
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
              productId={pInfo[0].productId}
              productName={pInfo[0].productName}
              productPrice={pInfo[0].productPrice}
              productImage={pInfo[0].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[1].productId}
              productName={pInfo[1].productName}
              productPrice={pInfo[1].productPrice}
              productImage={pInfo[1].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[2].productId}
              productName={pInfo[2].productName}
              productPrice={pInfo[2].productPrice}
              productImage={pInfo[2].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[3].productId}
              productName={pInfo[3].productName}
              productPrice={pInfo[3].productPrice}
              productImage={pInfo[3].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[4].productId}
              productName={pInfo[4].productName}
              productPrice={pInfo[4].productPrice}
              productImage={pInfo[4].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[5].productId}
              productName={pInfo[5].productName}
              productPrice={pInfo[5].productPrice}
              productImage={pInfo[5].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[6].productId}
              productName={pInfo[6].productName}
              productPrice={pInfo[6].productPrice}
              productImage={pInfo[6].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
            />
            <ProductCard
              cardType="proud"
              productId={pInfo[9].productId}
              productName={pInfo[9].productName}
              productPrice={pInfo[9].productPrice}
              productImage={pInfo[9].firstProductImage}
              setChosenProductId={props.setChosenProductId}
              setPage={props.setPage}
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
              <button
                onClick={() => {
                  props.setCategorySelected("All");
                  props.setPage("CategoriesPage");
                  scrollToTopFast();
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="banner-image-container">
            <img
              src="/assets/home-images/banner1.jpg"
              alt="bookshelf filler image"
            />
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}

      <TrendingSection
        setChosenProductId={props.setChosenProductId}
        setPage={props.setPage}
      />

      {/* BANNER 2 SECTION */}

      <section className="banner">
        <div className="banner-container">
          <div className="banner-image-container">
            <img
              src="/assets/home-images/banner2.jpg"
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
              <button
                onClick={() => {
                  props.setCategorySelected("All");
                  props.setPage("CategoriesPage");
                  scrollToTopFast();
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
