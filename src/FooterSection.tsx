import { scrollToTopSmooth } from "./reusableFunctions";

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top-container">
          <button onClick={scrollToTopSmooth}>About</button>
          <button onClick={scrollToTopSmooth}>Store Locator</button>
          <button onClick={scrollToTopSmooth}>FAQs</button>
          <button onClick={scrollToTopSmooth}>News</button>
          <button onClick={scrollToTopSmooth}>Careers</button>
          <button onClick={scrollToTopSmooth}>Contact Us</button>
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
