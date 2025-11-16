import { useEffect, useState } from "react";
import "../style/testimonials.css";
import star from "../img/star.svg";
import customerYellow from "../img/customer-yellow.svg";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <div className="testimonials-container">
      <div className="testimonials-all-text">
        <h4>Testimonials</h4>
        <h3>See What Our Clients Have to Say</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
      </div>

      <div className="testimonials-clients">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonials-customers">
            <div className="star">
              {Array.from({ length: t.rating }).map((_, i) => (
                <img key={i} src={star} alt="star" />
              ))}
            </div>
            <p>
              {t.comment}
            </p>
            <div className="customer-container">
              <div className="customer">
                <img src={t.avatarUrl} alt={t.name} />
              </div>
              <div className="customer-text">
                <h6>{t.name}</h6>
                <p>{t.companyName}</p>
              </div>
              <div className="customer-yellow">
                <img src={customerYellow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
