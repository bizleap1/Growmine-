import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Car, Umbrella, Home, Briefcase, X, CheckCircle2, ArrowRight } from "lucide-react";
import "./Services.css";

const services = [
  {
    id: 'sip',
    title: "Mutual Funds & SIP",
    description: "Build wealth systematically with expert-curated mutual fund portfolios tailored to your goals. Our SIP plans are designed to turn small savings into significant wealth over time using the power of compounding.",
    icon: <TrendingUp size={32} />,
    details: [
      "Personalized risk profile assessment",
      "Diversified portfolio construction",
      "Automated monthly investments",
      "Regular portfolio rebalancing",
      "Goal-based financial planning"
    ]
  },
  {
    id: 'health',
    title: "Health Insurance",
    description: "Secure your family's health with comprehensive plans covering hospitalization and critical illness. We provide access to Nagpur's best network of hospitals with zero-hassle claim support.",
    icon: <Shield size={32} />,
    details: [
      "Cashless hospitalization at 10,000+ hospitals",
      "Pre and post-hospitalization coverage",
      "Critical illness and accident riders",
      "No-claim bonus benefits",
      "Expert assistance during claim settlement"
    ]
  },
  {
    id: 'vehicle',
    title: "Vehicle Insurance",
    description: "Get instant quotes and hassle-free renewals for your car and bike with local claim support. Our policies offer comprehensive protection against accidents, theft, and natural disasters.",
    icon: <Car size={32} />,
    details: [
      "Zero depreciation and return to invoice add-ons",
      "24x7 roadside assistance",
      "Instant policy issuance online",
      "Multi-year policy options",
      "Local support for on-ground inspections"
    ]
  },
  {
    id: 'life',
    title: "Life Insurance",
    description: "Ensure financial security for your loved ones with term plans and money-back policies. We help you choose the right cover to protect your family's future, ensuring peace of mind for life.",
    icon: <Umbrella size={32} />,
    details: [
      "High cover at affordable term rates",
      "Critical illness and disability riders",
      "Wealth creation through ULIPs",
      "Retirement and pension plans",
      "Dedicated claim support for family"
    ]
  },
  {
    id: 'home',
    title: "Home Insurance",
    description: "Protect your most valuable asset against fire, theft, and natural calamities. Comprehensive coverage for the structure and its contents, including jewelry and electronic equipment.",
    icon: <Home size={32} />,
    details: [
      "Structure and content coverage",
      "Protection against theft and burglary",
      "Cover for accidental damages",
      "Alternative accommodation costs",
      "Jewelry and valuables coverage"
    ]
  },
  {
    id: 'business',
    title: "Business Insurance",
    description: "Customized insurance solutions to protect your business assets and liabilities. From employee health plans to marine insurance, we cover all your professional risks expertly.",
    icon: <Briefcase size={32} />,
    details: [
      "Fire and special perils insurance",
      "Workman compensation coverage",
      "Marine and transit insurance",
      "Group health insurance for employees",
      "Professional indemnity protection"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header-left">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Comprehensive <br /> <span>Financial Solutions</span>
          </motion.h2>
        </div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card"
              variants={itemVariants}
              onClick={() => setSelectedService(service)}
              layoutId={`card-${service.id}`}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 40px 80px rgba(16, 185, 129, 0.15)",
                borderColor: "rgba(16, 185, 129, 0.4)"
              }}
            >
              <div className="icon-box">
                {service.icon}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700' }}>{service.title}</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                {service.description.substring(0, 100)}...
              </p>
              <div className="learn-more-btn" style={{ fontSize: '16px' }}>
                Explore Details <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="modal-overlay">
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              className="service-modal"
              layoutId={`card-${selectedService.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <button 
                className="close-modal" 
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(null);
                }}
              >
                <X size={28} />
              </button>
              
              <div className="modal-icon-header">
                <div className="icon-box-large">
                  {selectedService.icon}
                </div>
                <div className="header-text">
                  <span className="premium-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Expert Advisory</span>
                  <h3>{selectedService.title}</h3>
                </div>
              </div>

              <div className="modal-body">
                <p className="main-desc">{selectedService.description}</p>
                <div className="details-list">
                  {selectedService.details.map((detail, idx) => (
                    <motion.div 
                      key={idx} 
                      className="detail-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                    >
                      <CheckCircle2 size={22} className="check-icon" />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="modal-actions">
                  <Link to="/contact" className="btn-primary full-width" onClick={() => setSelectedService(null)}>
                    Consult an Expert <ArrowRight size={22} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
