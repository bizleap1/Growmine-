const TESTI = [
  { t: "The data-driven approach at GrowMine is unparalleled. My portfolio alpha increased by 4.2% within the first year by optimizing my SIP distributions.", n: "Vikram Mehta", r: "Tech Lead at Google" },
  { t: "Settling a ₹5L claim for my father was effortless. GrowMine's dedicated claim manager handled everything with the insurer while we focused on recovery.", n: "Ananya Deshpande", r: "Venture Capitalist" },
  { t: "Finally, a wealth manager that speaks the language of transparency. No hidden commissions, no bias—just pure, unbiased financial engineering.", n: "Siddharth Jain", r: "Senior Surgeon, AIIMS" },
];

const Testimonials = () => {
  return (
    <>
      <style>{`
        .gm-testi-sec { padding: 140px 0; background: #fcfdfe; position: relative; overflow: hidden; }
        .gm-testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; margin-top: 80px; }
        
        .gm-testi-card { 
          background: #ffffff; padding: 60px 48px; border-radius: 40px; 
          border: 1px solid rgba(0, 32, 52, 0.05); transition: all 0.5s;
          box-shadow: 0 20px 50px rgba(0, 32, 52, 0.02);
          display: flex; flex-direction: column; position: relative;
        }
        .gm-testi-card:hover { transform: translateY(-10px); border-color: #002034; box-shadow: 0 40px 80px rgba(0, 32, 52, 0.08); }
        
        .gm-testi-q { 
          position: absolute; top: 40px; right: 48px;
          color: rgba(0, 32, 52, 0.03); font-size: 8rem; font-family: serif; line-height: 0;
        }
        
        .gm-stars { color: #002034; margin-bottom: 32px; display: flex; gap: 6px; font-size: 1.25rem; }
        .gm-testi-txt { 
          color: #002034; font-size: 1.15rem; line-height: 1.8; font-style: italic; 
          margin-bottom: 48px; flex-grow: 1; position: relative; z-index: 2;
          font-weight: 500;
        }
        
        .gm-testi-auth { display: flex; align-items: center; gap: 20px; pt: 32px; border-top: 1px solid rgba(0, 32, 52, 0.05); }
        .gm-testi-av { 
          width: 56px; height: 56px; border-radius: 50%; background: #002034; 
          display: flex; align-items: center; justify-content: center; color: #fff; 
          font-weight: 900; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(0, 32, 52, 0.1);
        }
        .gm-testi-name { color: #002034; font-weight: 900; font-size: 1.1rem; margin-bottom: 2px; }
        .gm-testi-role { color: rgba(0, 32, 52, 0.5); font-size: 0.9rem; font-weight: 600; }
      `}</style>
      <section className="gm-testi-sec" id="reviews">
        <div className="container">
          <div className="rev" style={{ textAlign: 'center' }}>
            <span className="section-tag">Client Voices</span>
            <h2 className="section-title">The Legacy of Absolute Trust.</h2>
          </div>

          <div className="gm-testi-grid">
            {TESTI.map((t, i) => (
              <div key={i} className="gm-testi-card rev" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="gm-testi-q">“</div>
                <div className="gm-stars">★★★★★</div>
                <p className="gm-testi-txt">“{t.t}”</p>
                <div className="gm-testi-auth" style={{ paddingTop: '32px' }}>
                  <div className="gm-testi-av">{t.n[0]}</div>
                  <div>
                    <div className="gm-testi-name">{t.n}</div>
                    <div className="gm-testi-role">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
