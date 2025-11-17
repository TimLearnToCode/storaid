import { useState } from "react";
import "../style/booking.css";

const emptyForm = {
  name: "",
  email: "",
  selectedUnit: "",
  purpose: "",
};

function BookingForm() {
  const [form, setForm] = useState(emptyForm);
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg("");

    try {
      const res = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      setMsg(data?.message || "Got a response, but no message?");
      setForm(emptyForm);
    } catch (err) {
      console.error("booking request failed:", err);
      setMsg("Couldn’t send the form. You can try again in a bit.");
    } finally {
      setSending(false);
    }
  };
  return (
    <section className="booking-section">
      <div className="booking-inner">
        <div className="booking-left">
          <p className="label">Book a Unit</p>
          <h2>Need a Storage Spot?</h2>
          <p>Fill this out real quick and we'll get back to you.</p>
          <div className="booking-image-placeholder" />
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="two-inputs">
            <div>
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="selectedUnit">Unit Size *</label>
            <input
              id="selectedUnit"
              name="selectedUnit"
              type="text"
              value={form.selectedUnit}
              onChange={handleChange}
              placeholder="Small/medium/big"
              required
            />
          </div>
          <div>
            <label htmlFor="purpose">What are you storing? *</label>
            <textarea id="purpose" name="purpose" rows="4" value={form.purpose} onChange={handleChange} 
            placeholder="Describe your storgae purpose so that we can match your request" required/>
          </div>
          <button type="submit" className="booking-submit" disabled={sending}>{sending ? "Sending..." : "Send"}</button>
          {msg && (
            <p className="booking-result">{msg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default BookingForm;