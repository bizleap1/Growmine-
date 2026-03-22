import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do you select mutual funds?", a: "We use a proprietary 7-factor model that tracks fund manager performance across market cycles, expense ratios, and rolling returns." },
  { q: "What is your claim success rate?", a: "Our dedicated claim concierge system has achieved a 99.1% success rate over the last 15 years in Nagpur." },
  { q: "Do you offer doorstep service?", a: "Yes, our senior advisors provide personalized doorstep consultations for all HNI clients in the Nagpur region." },
  { q: "Can you review my existing policies?", a: "Absolutely. We provide a zero-cost 'Financial Health Audit' where we identify gaps in your current coverage." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        .gm-faq-sec { padding: 120px 0; background: #ffffff; }
        .gm-faq-wrap { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 80px; align-items: start; }
        .gm-faq-img-side { position: sticky; top: 120px; }
        .gm-faq-img { 
          width: 100%; border-radius: 32px; border: 1px solid rgba(0, 32, 52, 0.05); 
          box-shadow: 0 30px 60px rgba(0, 32, 52, 0.05);
        }
        .gm-faq-badge {
          position: absolute; bottom: -24px; right: -24px; background: #002034; color: #fff;
          padding: 32px; border-radius: 20px; font-weight: 800; font-family: 'Inter', sans-serif;
          box-shadow: 0 15px 30px rgba(0, 32, 52, 0.2);
        }
        .gm-faq-list { display: flex; flex-direction: column; gap: 16px; }
        .gm-faq-item { background: #f8fafc; border: 1px solid rgba(0, 32, 52, 0.05); border-radius: 16px; overflow: hidden; }
        .gm-faq-q { width: 100%; padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; text-align: left; background: none; border: none; cursor: pointer; color: #002034; font-size: 1.1rem; font-weight: 700; }
        .gm-faq-q:hover { color: #002034; opacity: 0.8; }
        .gm-faq-a-wrap { padding: 0 32px 32px; color: rgba(0, 32, 52, 0.6); line-height: 1.7; font-size: 1rem; }
        .gm-faq-arrow { color: #002034; transition: transform 0.3s; }
        @media (max-width: 960px) { .gm-faq-wrap { grid-template-columns: 1fr; } }
      `}</style>
      <section className="gm-faq-sec" id="faq">
        <div className="container">
          <div className="gm-faq-wrap">
            <div className="gm-faq-img-side rev">
               <div style={{ position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800" alt="Support" className="gm-faq-img" />
                  <div className="gm-faq-badge">
                     <div style={{ fontSize: '2rem', marginBottom: '4px' }}>24/7</div>
                     <div style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Support</div>
                  </div>
               </div>
            </div>

            <div className="rev" style={{ transitionDelay: '0.3s' }}>
                <span className="section-tag">Direct Answers</span>
                <h2 className="section-title">Clarifying Your Concerns.</h2>
                <div className="gm-faq-list">
                  {faqs.map((f, i) => (
                    <div key={i} className="gm-faq-item">
                      <button className="gm-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                        <span>{f.q}</span>
                        <ChevronDown className="gm-faq-arrow" style={{ transform: open === i ? 'rotate(180deg)' : 'none' }} />
                      </button>
                      <AnimatePresence>
                        {open === i && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                            <div className="gm-faq-a-wrap">{f.a}</div>
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
    </>
  );
};

export default FAQ;
