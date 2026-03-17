import { motion } from "framer-motion";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>Ready to Secure Your Future?</h2>
            <p>Join thousands of families who trust GrowMine for their financial planning and insurance needs.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Connect with Experts</button>
              <button className="btn-secondary">Explore Our Services</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
