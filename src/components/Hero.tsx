import { ChevronRight } from 'lucide-react';
import heroOffice from '../assets/hero_office.png';

const Hero = () => {
  return (
    <>
      <style>{`
        .gm-hero {
          height: 100vh; display: flex; align-items: center; position: relative;
          background: #002034; overflow: hidden;
        }
        .gm-hero-img {
          position: absolute; inset: 0; 
          background: url(${heroOffice}) center/cover no-repeat;
          opacity: 0.6; transform: scale(1.1); animation: heroPan 20s infinite alternate linear;
        }
        @keyframes heroPan { from { transform: scale(1.1) translateX(-2%); } to { transform: scale(1.1) translateX(2%); } }
        
        /* NOISE OVERLAY FOR PREMIUM TEXTURE */
        .gm-hero-noise {
          position: absolute; inset: 0; opacity: 0.05; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .gm-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.98) 40%, rgba(255,255,255,0.7) 60%, transparent 100%);
        }
        
        .gm-hero-content { 
          position: relative; z-index: 2; width: 100%; 
          padding-left: 6%; /* ABSOLUTE LEFT PLACEMENT */
          text-align: left;
        }
        
        .gm-hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(0, 32, 52, 0.05); padding: 10px 20px; border-radius: 100px;
          color: #002034; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 40px; border: 1px solid rgba(0, 32, 52, 0.08);
        }
        .gm-hero-title {
          font-family: 'Inter', sans-serif; font-weight: 900; font-size: clamp(3rem, 6vw, 5.5rem);
          color: #002034; line-height: 0.95; margin-bottom: 32px; letter-spacing: -3px;
        }
        .gm-hero-desc {
          font-size: 1.4rem; color: rgba(0, 32, 52, 0.7); line-height: 1.6;
          max-width: 650px; margin-bottom: 64px; font-weight: 500;
        }
        .gm-hero-btns { display: flex; gap: 24px; }
        
        .hero-btn-main {
          background: #002034; color: #fff; padding: 22px 56px; border-radius: 12px;
          font-weight: 900; font-size: 1.1rem; display: flex; align-items: center; gap: 12px;
          box-shadow: 0 25px 50px rgba(0, 32, 52, 0.2); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-btn-main:hover { transform: translateY(-6px); box-shadow: 0 35px 70px rgba(0, 32, 52, 0.3); background: #000; }
        
        .btn-method {
          border: 1px solid rgba(0, 32, 52, 0.2); color: #002034; padding: 22px 56px;
          border-radius: 12px; font-weight: 800; transition: all 0.3s; background: transparent;
        }
        .btn-method:hover { background: rgba(0, 32, 52, 0.05); border-color: #002034; }

        @media (max-width: 1024px) {
           .gm-hero-content { padding-left: 5%; }
        }
        @media (max-width: 768px) {
          .gm-hero-overlay { background: rgba(255,255,255,0.95); }
          .gm-hero-title { font-size: 3.5rem; letter-spacing: -1px; }
          .gm-hero-btns { flex-direction: column; width: 100%; align-items: flex-start; }
          .hero-btn-main, .btn-method { text-align: left; justify-content: flex-start; width: auto; min-width: 280px; }
          .gm-hero-content { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>
      <section className="gm-hero">
        <div className="gm-hero-img" />
        <div className="gm-hero-noise" />
        <div className="gm-hero-overlay" />
        <div className="gm-hero-content rev">
          <h1 className="gm-hero-title">Precision <br />Wealth <br />Engineering.</h1>
          <p className="gm-hero-desc">
            Institutional-grade insurance systems and algorithmic wealth management for Nagpur's most discerned estates and business legacies.
          </p>
          <div className="gm-hero-btns">
            <button className="hero-btn-main">Secure Your Legacy <ChevronRight size={22} /></button>
            <button className="btn-method">Our Methodology</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
