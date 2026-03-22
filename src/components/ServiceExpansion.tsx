const ADDS = [
  { t: "Life Portfolio", d: "Direct plans with legacy protection.", i: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800" },
  { t: "Family Health", d: "Zero-deductible premium coverage.", i: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" },
  { t: "Smart SIPs", d: "Algorithms tuned for alpha yields.", i: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800" }, // CHARTS / FINANCE
  { t: "Claim Fortress", d: "Legal & financial claim protection.", i: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" },
];

const ServiceExpansion = () => {
  return (
    <>
      <style>{`
        .gm-add-sec { padding: 100px 0; background: #ffffff; }
        .gm-add-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
        .gm-add-card { 
          height: 440px; border-radius: 32px; overflow: hidden; position: relative;
          border: 1px solid rgba(0, 32, 52, 0.05); cursor: pointer; background: #000;
        }
        .gm-add-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); opacity: 0.9; }
        .gm-add-card:hover .gm-add-img { transform: scale(1.05); opacity: 1; }
        .gm-add-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; }
        .gm-add-card h4 { color: #002034; font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.4rem; margin-bottom: 8px; }
        .gm-add-card p { color: rgba(0, 32, 52, 0.7); font-size: 1rem; margin-bottom: 0; font-weight: 500; }
      `}</style>
      <section className="gm-add-sec">
        <div className="container">
          <div className="rev" style={{ marginBottom: '60px' }}>
            <span className="section-tag">Extended Solutions</span>
            <h2 className="section-title">The GrowMine Ecosystem</h2>
          </div>
          <div className="gm-add-grid">
            {ADDS.map((a, i) => (
              <div key={i} className="gm-add-card rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                <img src={a.i} alt={a.t} className="gm-add-img" />
                <div className="gm-add-ov">
                  <h4>{a.t}</h4>
                  <p>{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceExpansion;
