import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is the best age to start a SIP?",
    answer: "The best time is now! Starting early allows your money more time to grow through the power of compounding. Even small amounts can grow significantly over 15-20 years."
  },
  {
    question: "How much health insurance coverage do I need?",
    answer: "A general rule of thumb is to have a cover that is at least 50% of your annual income, or a minimum of ₹5-10 lakhs depending on your family size and city of residence."
  },
  {
    question: "Can I withdraw my Mutual Fund investment anytime?",
    answer: "Yes, most mutual funds are 'open-ended', meaning you can withdraw anytime. However, some might have an 'exit load' if withdrawn within a year, and ELSS funds have a 3-year lock-in."
  },
  {
    question: "How does GrowMine help in claim settlement?",
    answer: "We provide end-to-end support during claims. Our experts guide you through the documentation process and follow up with the insurance company to ensure a smooth payout."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-image-side">
            <motion.img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800"
              alt="Customer Support"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div className="faq-floating-badge">
              <HelpCircle size={24} />
              <span>Expert Support 24/7</span>
            </div>
          </div>
          
          <div className="faq-content-side">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`arrow ${activeIndex === index ? 'rotate' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div 
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
