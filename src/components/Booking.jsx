import { useState } from "react";
import "../style/booking.css";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    selectedUnit: "",
    purpose: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://win25-jsf-assignment.azurewebsites.net/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.message);
        setForm({
          name: "",
          email: "",
          selectedUnit: "",
          purpose: "",
        });
      })
      .catch((err) => console.error("Booking Error:", err));
  };
  
  return (
    <section className="booking-section">
      <div className="booking-inner">
        <div className="booking-left">
          <p className="label">Booking Unit</p>
          <h2>Book Your Storage Unit Now <br /> & Simplify Your Life!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada mi vel lectus gravida, tristique pulvinar dapibus leo.</p>
          <div className="booking-image-placeholder"></div>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="two-inputs">
            <div>
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Choose Unit *</label>
            <input
              type="text"
              name="selectedUnit"
              placeholder="Choose Unit"
              value={form.selectedUnit}
              onChange={handleChange}
              required />
          </div>
          <div>
            <label>Storage Purpose *</label>
            <textarea
              name="purpose"
              placeholder="Describe your storage purpose..."
              rows="4"
              value={form.purpose}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="booking-submit">
            Book Unit
          </button>
          {result && <p className="booking-result">{result}</p>}
        </form>
      </div>
    </section>
  );
}

export default BookingForm;