import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const ExpertiseBar = ({ title, percentage }: { title: string, percentage: number }) => (
  <div className="expertise-item">
    <div className="expertise-info">
      <span className="expertise-title">{title}</span>
      <span className="expertise-percentage">{percentage}%</span>
    </div>
    <div className="progress-bg">
      <motion.div 
        className="progress-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  </div>
);

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-visual">
          <motion.div 
            className="about-img-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://growmine.in/wp-content/uploads/2025/05/Untitled-design-77.png" alt="About GrowMine" />
          </motion.div>
          <motion.div 
            className="about-img-sub"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="https://growmine.in/wp-content/uploads/2025/05/Untitled-design-76.png" alt="Growth" />
          </motion.div>
        </div>

        <div className="about-content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Our Path to Trust and Financial Success</h2>
          <p className="about-text">
            At GrowMine, our journey commenced with a clear and inspiring mission: to empower both individuals and businesses to realize their financial aspirations.
          </p>
          <p className="about-text">
            We are dedicated to providing expert guidance and unwavering support, ensuring that our clients have the tools and knowledge.
          </p>

          <div className="expertise-section">
            <h3 className="expertise-heading">Our Expertise, Your Advantage</h3>
            <p className="expertise-text">
              Guidance for long-term wealth with SIP investments, ensuring health safety with mediclaim, or protecting your vehicle.
            </p>
            
            <div className="expertise-list">
              <ExpertiseBar title="SIP & Financial Planning" percentage={95} />
              <ExpertiseBar title="Health Insurance Advisory" percentage={90} />
              <ExpertiseBar title="Vehicle & Motor Insurance" percentage={88} />
            </div>
          </div>

          <a href="#services" className="btn-primary">
            Read More <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
