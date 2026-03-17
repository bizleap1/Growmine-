import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '100px' }}>
      <section className="contact-hero" style={{ padding: '80px 0', background: '#f9fafb' }}>
        <div className="container">
          <motion.div 
            className="section-header-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Contact Support</span>
            <h1 className="section-title">Get in Touch with Our Experts</h1>
            <p className="section-subtitle" style={{ maxWidth: '600px' }}>
              Have questions about investments or insurance? Our team in Nagpur is here to provide personalized support and fast claim assistance.
            </p>
          </motion.div>

          <div className="contact-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '60px', 
            marginTop: '60px',
            alignItems: 'start'
          }}>
            <motion.div 
              className="contact-info-side"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="info-card" style={{ 
                background: 'white', 
                padding: 'min(40px, 5vw)', 
                borderRadius: '24px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #eee'
              }}>
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Contact Information</h3>
                  <p style={{ color: '#666' }}>Reach out to us via any of these channels.</p>
                </div>

                <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '18px' }}>Call Us</h4>
                      <p style={{ margin: '4px 0 0', color: '#666' }}>+91 91585 00010</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '18px' }}>Email Us</h4>
                      <p style={{ margin: '4px 0 0', color: '#666' }}>support@growmine.in</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '18px' }}>Our Office</h4>
                      <p style={{ margin: '4px 0 0', color: '#666' }}>
                        1st Floor, Shreeram Tower, <br />
                        Kingsway, Nagpur, <br />
                        Maharashtra 440001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card" style={{ 
                background: 'white', 
                padding: 'min(40px, 5vw)', 
                borderRadius: '24px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #eee',
                marginTop: '30px'
              }}>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Business Hours</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#666' }}>
                  <span>Monday - Friday:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>10:00 AM - 7:00 PM</span>
                  <span>Saturday:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>10:00 AM - 4:00 PM</span>
                  <span>Sunday:</span>
                  <span style={{ color: '#ef4444' }}>Closed</span>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '0 10px' }}>
                <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6' }}>
                  *Disclaimer: Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Insurance is the subject matter of solicitation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="map-side"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #eee',
                height: '100%',
                minHeight: '300px'
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41702425515!2d79.00246714479374!3d21.15934029496035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710582000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GrowMine Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
