import { useState } from "react";
import Navbar from "./Navbar";
import LandingPageBody from "./LandingPageBody";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import "./app.scss";

function App() {
  const pageList = ["LandingPage", "CategoriesPage", "ProductPage"];
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [page, setPage] = useState("landingPage");

  let pageBodyVisible;

  if (page === "landingPage") {
    pageBodyVisible = <LandingPageBody />;
  }

  return (
    <>
      <Navbar />
      {pageBodyVisible}
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

export default App;
