import { useState } from "react";
import "../style/getInTouch.css";

function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    comment: "",
  });
  const [responseMsg, setResponseMsg] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      setResponseMsg(data.message);
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        comment: "",
      });
    } catch (err) {
      console.error("Contact API Error:", err);
    }
  };
  return (
    <div className="contact-form-section">
      <div className="contact-form-inner">
        <div className="contact-left">
          <p className="label">Get in Touch</p>
          <h2>Get Personalized Assistance <br />- Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="contact-image-placeholder"/>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-row">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
              required/>
          </div>
          <div className="contact-row two-cols">
            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required/>
            </div>
            <div>
              <label>Telephone</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Telephone"
                value={form.phoneNumber}
                onChange={onChange}/>
            </div>
          </div>
          <div className="contact-row">
            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              placeholder="How can we help you"
              value={form.subject}
              onChange={onChange}
              required/>
          </div>
          <div className="contact-row">
            <label>Comments / Questions *</label>
            <textarea name="comment"
              placeholder="Comments"
              rows="4"
              value={form.comment}
              onChange={onChange}
              required/>
          </div>
          <button type="submit" className="contact-submit">Submit</button>
          {responseMsg && (
            <p className="contact-result">{responseMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
