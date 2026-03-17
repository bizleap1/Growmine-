import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to GrowMine
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Secure Your Future with <br />
            <span>Smart Investments</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Partner with Nagpur's trusted investment advisor for SIP, health insurance, and vehicle insurance. 
            Personal support. Fast claims. Local care.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/services" className="btn-primary">
              Our Services <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn-secondary">
              Know more
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-side"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="main-image-wrapper">
            <img 
              src="https://growmine.in/wp-content/uploads/2025/05/banner-03.png" 
              alt="GrowMine Hero" 
              className="hero-illustration"
            />
          </div>

          <motion.div 
            className="glass-card expenses-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="icon-box">
              <Users size={24} />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Active Users</span>
              <span style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: 'var(--primary)' }}>18,000+</span>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card clients-card"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
             <span style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>99%</span>
             <span style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Claim Success</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
