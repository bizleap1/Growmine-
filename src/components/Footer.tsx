import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .gm-footer { 
          background: #002034; 
          padding: 100px 0 40px; 
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        .gm-footer-grid { 
          display: grid; 
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr; 
          gap: 60px; 
        }
        .gm-footer-brand p { color: rgba(255, 255, 255, 0.6); line-height: 1.7; font-size: 0.95rem; }
        .gm-f-title { color: #fff; font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.1rem; margin-bottom: 30px; }
        .gm-f-links { display: flex; flex-direction: column; gap: 16px; }
        .gm-f-links a { color: rgba(255, 255, 255, 0.6); text-decoration: none; font-size: 0.95rem; transition: color 0.25s; }
        .gm-f-links a:hover { color: #fff; }
        .gm-f-contact { display: flex; flex-direction: column; gap: 20px; }
        .gm-f-contact-item { display: flex; gap: 12px; color: rgba(255, 255, 255, 0.6); font-size: 0.95rem; text-decoration: none; }
        .gm-f-contact-item span { color: #fff; opacity: 0.8; }
        .gm-f-socials { display: flex; gap: 16px; margin-top: 30px; }
        .gm-f-social { 
          width: 40px; height: 40px; border-radius: 50%; 
          background: rgba(255, 255, 255, 0.05); 
          display: flex; align-items: center; justify-content: center; 
          color: #fff; transition: all 0.3s; 
          border: 1px solid rgba(255, 255, 255, 0.1); 
        }
        .gm-f-social:hover { background: #fff; color: #002034; transform: translateY(-4px); }
        .gm-footer-bottom { 
          margin-top: 80px; padding-top: 40px; 
          border-top: 1px solid rgba(255, 255, 255, 0.05); 
          display: flex; justify-content: space-between; align-items: center; 
        }
        .gm-copyright { color: rgba(255, 255, 255, 0.4); font-size: 0.85rem; }
        @media (max-width: 960px) { .gm-footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .gm-footer-grid { grid-template-columns: 1fr; } .gm-footer-bottom { flex-direction: column; gap: 20px; text-align: center; } }
      `}</style>
      <footer className="gm-footer">
        <div className="container">
          <div className="gm-footer-grid">
            <div className="gm-footer-brand">
              <span style={{ 
                fontSize: '2rem', 
                fontWeight: 950, 
                color: '#fff', 
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-2px',
                display: 'block',
                marginBottom: '24px'
              }}>GrowMine</span>
              <p>Nagpur's high-precision financial consultancy providing bespoke insurance and wealth management systems for HNI families and elite businesses.</p>
              <div className="gm-f-socials">
                <a href="https://www.instagram.com/growmine.in?igsh=b253czRzc245Y3Vk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="gm-f-social"><Instagram size={18} /></a>
                <a href="#" className="gm-f-social"><Linkedin size={18} /></a>
                <a href="#" className="gm-f-social"><Twitter size={18} /></a>
                <a href="#" className="gm-f-social"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="gm-f-title">Solutions</h4>
              <nav className="gm-f-links">
                <Link to="/#services">Term Insurance</Link>
                <Link to="/#services">Wealth Management</Link>
                <Link to="/#services">Health Security</Link>
                <Link to="/#services">SIP & Mutual Funds</Link>
                <Link to="/#services">Tax Planning</Link>
              </nav>
            </div>

            <div>
              <h4 className="gm-f-title">Company</h4>
              <nav className="gm-f-links">
                <Link to="/about">About Us</Link>
                <Link to="/#process">Our Methodology</Link>
                <Link to="/#why">Why GrowMine</Link>
                <Link to="/blogs">Insights</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div>
              <h4 className="gm-f-title">Direct HQ</h4>
              <div className="gm-f-contact">
                <a href="tel:+917620488247" className="gm-f-contact-item">
                  <span><Phone size={18} /></span> +91 7620 488 247
                </a>
                <a href="mailto:info@growmine.in" className="gm-f-contact-item">
                  <span><Mail size={18} /></span> info@growmine.in
                </a>
                <div className="gm-f-contact-item">
                  <span><MapPin size={18} /></span> Nagpur, Maharashtra, India
                </div>
              </div>
            </div>
          </div>

          <div className="gm-footer-bottom">
            <p className="gm-copyright">© 2024 GrowMine Executive. All rights reserved.</p>
            <div className="gm-f-links" style={{ flexDirection: 'row', gap: '30px' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
