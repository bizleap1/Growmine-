import ctaBg from '../assets/hero_office.png';

const CallToAction = () => {
  return (
    <>
      <style>{`
        .gm-cta-sec { padding: 140px 0; background: #ffffff; }
        .gm-cta-card { 
          background: #002034;
          padding: 120px 80px; border-radius: 48px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 50px 100px -20px rgba(0, 32, 52, 0.3);
        }
        .gm-cta-img-bg {
          position: absolute; inset: 0;
          background: url(${ctaBg}) center/cover no-repeat;
          opacity: 0.15; filter: grayscale(1);
        }
        .gm-cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(0, 32, 52, 0.95), rgba(0, 32, 52, 0.7), rgba(0, 32, 52, 0.95));
        }

        .gm-cta-title { 
          font-size: clamp(3rem, 6vw, 4.5rem); font-family: 'Inter', sans-serif; 
          font-weight: 900; color: #fff; margin-bottom: 24px; line-height: 1; 
          position: relative; z-index: 2; letter-spacing: -2px;
        }
        .gm-cta-sub { 
          color: rgba(255,255,255,0.7); font-size: 1.3rem; max-width: 700px; 
          margin: 0 auto 56px; position: relative; z-index: 2; font-weight: 500;
        }
        .gm-cta-btns { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 2; }
        
        .cta-btn-gold {
          background: #ffffff; color: #002034; padding: 22px 56px; border-radius: 12px;
          font-weight: 800; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;
          transition: all 0.3s; box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        .cta-btn-gold:hover { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }

        @media (max-width: 768px) { .gm-cta-card { padding: 80px 24px; } }
      `}</style>
      <section className="gm-cta-sec">
        <div className="container">
          <div className="gm-cta-card rev">
            <div className="gm-cta-img-bg" />
            <div className="gm-cta-overlay" />
            
            <h2 className="gm-cta-title">Ready to Engineer Your <br />Financial Legacy?</h2>
            <p className="gm-cta-sub">Join Nagpur's elite circle of financially bulletproof families. Secure your strategy consultation today.</p>
            <div className="gm-cta-btns">
              <button className="cta-btn-gold">Consult an Executive Advisor</button>
              <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '22px 56px' }}>Speak to an Advisor</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
