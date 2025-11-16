import { useEffect, useState } from "react";
import "../style/faq.css";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Error fetching FAQs:", err));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-inner">
        <div className="faq-left">
          <p className="label">FAQ</p>
          <h2>Frequently Ask Questions</h2>
          <p>Learn more about our secure, convenient storage options. We offer flexible plans, top-tier security, and expert support for all your storage needs.</p>
        </div>
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={faq.id}
              onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {faq.title}
                <span className="arrow">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;