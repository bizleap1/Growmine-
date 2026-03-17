import { motion } from "framer-motion";
import "./ServiceExpansion.css";

const additionalServices = [
  {
    title: "Claims Assistance",
    desc: "End-to-end support during insurance claims.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600"
  },
  {
    title: "Portfolio Review",
    desc: "Expert analysis of your existing investments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600"
  },
  {
    title: "Tax Planning",
    desc: "Maximize your tax savings legally and smartly.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600"
  },
  {
    title: "Retirement Planning",
    desc: "Ensure a comfortable and stress-free retirement.",
    image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600"
  },
  {
    title: "Family Protection",
    desc: "Customized coverage for all family members.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600"
  },
  {
    title: "Goal-Based Saving",
    desc: "Save for marriage, education, or your dream home.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600"
  }
];

const stats = [
  { value: "5000+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
  { value: "15+", label: "Years Experience", icon: "💎" },
  { value: "10Cr+", label: "Assets Managed", icon: "📈" },
  { value: "99%", label: "Claim Success", icon: "🏆" }
];

const ServiceExpansion = () => {
  return (
    <section className="service-expansion">
      <div className="container">
        <div className="section-header-left">
          <span className="section-tag">Value Added</span>
          <h2 className="section-title">Why Choose GrowMine?</h2>
          <p className="section-subtitle">We go beyond simple transactions to provide comprehensive financial care.</p>
        </div>
        
        <div className="expansion-grid-wide">
          {additionalServices.map((service, index) => (
            <motion.div 
              key={index}
              className="expansion-image-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-text-content">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <div className="card-hover-line"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="stats-grid-container">
          <div className="stats-header-left">
            <h3>Our Impact in Numbers</h3>
          </div>
          <div className="stats-multi-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card-refined"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)" }}
              >
                <div className="stat-icon-floating">{stat.icon}</div>
                <motion.span 
                  className="stat-value-large"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label-refined">{stat.label}</span>
                <div className="stat-card-bg-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExpansion;
