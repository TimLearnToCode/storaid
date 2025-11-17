import { useEffect, useState } from "react";
import "../style/faq.css";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length) {
          setFaqs(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleFAQ = (i) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };
  return (
    <div className="faq-section">
      <div className="faq-inner">
        <div className="faq-left">
          <p className="label">FAQ</p>
          <h2>Questions People Usually Ask</h2>
          <p>Some things people often wonder about. Maybe this helps.</p>
        </div>
        <div className="faq-right">
          {faqs.map((faq, i) => (
            <div
              key={faq.id || i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggleFAQ(i)}>
              <div className="faq-question">
                {faq.title}
                <span className="arrow">{openIndex === i ? "-" : "+"}</span>
              </div>
              {openIndex === i && (
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