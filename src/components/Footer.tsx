import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-refined">
      <div className="footer-upper">
        <div className="container">
          <div className="footer-grid-professional">
            <div className="footer-about-col">
              <div className="logo-footer">
                <span className="logo-text">Grow</span>
                <span className="logo-accent">Mine</span>
              </div>
              <p className="footer-brand-desc">
                Your trusted partner in financial growth and security. We provide expert advice on SIP, investments, and insurance to secure a bright future for you and your family.
              </p>
              <div className="footer-social-pill">
                <a href="#" className="social-pill-link"><Facebook size={18} /></a>
                <a href="#" className="social-pill-link"><Twitter size={18} /></a>
                <a href="#" className="social-pill-link"><Instagram size={18} /></a>
                <a href="#" className="social-pill-link"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="footer-nav-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About GrowMine</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#blogs">Financial Blogs</a></li>
                <li><a href="#contact">Contact Support</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Mutual Funds & SIP</a></li>
                <li><a href="#">Health Insurance</a></li>
                <li><a href="#">Vehicle Insurance</a></li>
                <li><a href="#">Life Insurance</a></li>
                <li><a href="#">Tax Planning</a></li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>Contact Us</h4>
              <ul className="contact-details-list">
                <li>
                  <Phone size={18} />
                  <span>+91 91585 00010</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>support@growmine.in</span>
                </li>
                <li>
                  <MapPin size={18} />
                  <span>Nagpur, Maharashtra, India</span>
                </li>
              </ul>
              <div className="footer-newsletter-mini">
                <p>Subscribe for updates</p>
                <div className="newsletter-input-box">
                  <input type="email" placeholder="Email address" />
                  <button><ExternalLink size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>&copy; {currentYear} GrowMine Investment Services. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
