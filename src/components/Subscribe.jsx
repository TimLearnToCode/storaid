import { useState } from "react";
import "../style/subscribe.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email field cannot be empty.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <>
      <div className="subscribe-section">
        <div className="subscribe-container">
          <div className="subscribe-text">
            <h2>Subscribe Our Newsletter</h2>
            <p>
              Subscribe to our newsletter to receive early discount offers,
              updates and info
            </p>
          </div>

          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer className="footer-section">
        <div className="footer-container">
          <p>© 2025 StorAid, All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Subscribe;