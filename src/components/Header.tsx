import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/IMG_1631.PNG';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        .gm-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 24px 0;
        }
        .gm-header.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          padding: 16px 0;
          box-shadow: 0 4px 30px rgba(0, 32, 52, 0.05);
          border-bottom: 1px solid rgba(0, 32, 52, 0.05);
        }
        .gm-nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; /* MATCH HERO PADDING FOR PERFECT ALIGNMENT */
          margin: 0 auto;
        }
        .gm-logo { height: 40px; cursor: pointer; display: flex; align-items: center; transition: all 0.3s; }
        .gm-logo img { height: 100%; object-fit: contain; transform: scale(3.5); transform-origin: left center; }
        
        .gm-nav-links { display: flex; gap: 40px; align-items: center; margin-left: auto; margin-right: 60px; }
        .gm-nav-link {
          color: #002034; font-size: 0.95rem; font-weight: 600;
          text-decoration: none; transition: all 0.3s;
          position: relative; padding: 4px 0;
        }
        .gm-nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
          background: #002034; transition: width 0.3s;
        }
        .gm-nav-link:hover::after { width: 100%; }
        
        .gm-header-right { display: flex; align-items: center; }
        .gm-header-phone { 
          display: flex; align-items: center; gap: 8px; 
          color: #002034; font-weight: 700; font-size: 0.95rem; 
          text-decoration: none; transition: all 0.3s;
        }
        .gm-header-phone:hover { color: #0056ce; }
        
        .gm-header-cta {
          background: #002034; color: #fff; padding: 12px 28px; border-radius: 8px;
          font-weight: 800; font-size: 0.9rem; transition: all 0.3s;
          display: flex; align-items: center; gap: 8px;
        }
        .gm-header-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0, 32, 52, 0.15); }

        .gm-menu-toggle { display: none; color: #002034; }

        @media (max-width: 1100px) {
          .gm-nav-links { gap: 24px; margin-right: 32px; }
        }

        @media (max-width: 1024px) {
          .gm-nav-links { gap: 24px; }
          .gm-header-right { gap: 20px; }
        }

        @media (max-width: 960px) {
          .gm-nav-links { display: none; }
          .gm-menu-toggle { display: block; }
          .gm-header-cta { display: none; }
        }

        .gm-mobile-menu {
          position: fixed; inset: 0; background: #fff; z-index: 1001;
          display: flex; flex-direction: column; padding: 40px;
          transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gm-mobile-menu.open { transform: translateX(0); }
        .gm-mobile-link {
          font-size: 2rem; font-weight: 800; color: #002034;
          text-decoration: none; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;
        }
      `}</style>
      
      <header className={`gm-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="gm-nav-inner">
          <Link to="/" className="gm-logo" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="GrowMine Logo" />
          </Link>

          <nav className="gm-nav-links">
            <Link to="/" className="gm-nav-link">Home</Link>
            <Link to="/about" className="gm-nav-link">About</Link>
            <Link to="/services" className="gm-nav-link">Services</Link>
            <Link to="/blogs" className="gm-nav-link">Insights</Link>
            <Link to="/contact" className="gm-nav-link">Contact</Link>
          </nav>

          <div className="gm-header-right">
            <Link to="/contact" className="gm-header-cta">Secure Your Future</Link>
          </div>

          <button className="gm-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      <div className={`gm-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '60px' }}>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#002034' }}><X size={40} /></button>
        </div>
        <Link to="/" className="gm-mobile-link">Home <ChevronRight /></Link>
        <Link to="/about" className="gm-mobile-link">About <ChevronRight /></Link>
        <Link to="/services" className="gm-mobile-link">Services <ChevronRight /></Link>
        <Link to="/blogs" className="gm-mobile-link">Insights <ChevronRight /></Link>
        <Link to="/contact" className="gm-mobile-link">Contact <ChevronRight /></Link>
      </div>
    </>
  );
};

export default Header;
