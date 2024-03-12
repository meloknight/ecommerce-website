export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h1>Newsletter</h1>
        <div className="newsletter-bottom-container">
          <input type="text" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
