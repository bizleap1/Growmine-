import { motion } from "framer-motion";
import "./ImageBanner.css";

const ImageBanner = () => {
  return (
    <section className="image-banner">
      <div className="container">
        <motion.div 
          className="banner-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="banner-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200" 
              alt="Financial Growth" 
              className="banner-image"
            />
            <div className="banner-overlay">
              <motion.div 
                className="banner-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2>Start Your Journey to Financial Freedom Today</h2>
                <motion.button 
                  className="btn-primary start-now-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0px rgba(16, 185, 129, 0.4)", "0 0 0 20px rgba(16, 185, 129, 0)"] 
                  }}
                  transition={{ 
                    boxShadow: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Start Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBanner;
