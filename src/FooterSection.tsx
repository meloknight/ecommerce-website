import { scrollToTop } from "./reusableFunctions";

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top-container">
          <button onClick={scrollToTop}>About</button>
          <button onClick={scrollToTop}>Store Locator</button>
          <button onClick={scrollToTop}>FAQs</button>
          <button onClick={scrollToTop}>News</button>
          <button onClick={scrollToTop}>Careers</button>
          <button onClick={scrollToTop}>Contact Us</button>
        </div>
        <div className="footer-bottom-container">
          Design &nbsp;by
          <a href="https://github.com/Abderraouf-Rahmani/ecommerce">
            &nbsp; Abderraouf
          </a>
        </div>
      </div>
    </footer>
  );
}
