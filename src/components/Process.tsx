const STEPS = [
  { n: "01", t: "Financial Audit", d: "Rigorous analysis of assets and risk appetite using institutional grade tools." },
  { n: "02", t: "Blueprint Creation", d: "A customized inter-generational roadmap for growth and security." },
  { n: "03", t: "Precision Execution", d: "Direct market implementation and legal framework setup." },
  { n: "04", t: "Active Guardianship", d: "24/7 monitoring and dedicated claim vertical support." },
];

const Process = () => {
  return (
    <>
      <style>{`
        .gm-proc-sec { padding: 140px 0; background: #ffffff; position: relative; }
        .gm-proc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-top: 100px; position: relative; }
        
        .gm-proc-line {
          position: absolute; top: 45px; left: 50px; right: 50px; height: 2px;
          background: repeating-linear-gradient(90deg, #002034 0, #002034 10px, transparent 10px, transparent 20px);
          opacity: 0.1; z-index: 1;
        }

        .gm-proc-step { 
          position: relative; z-index: 2; background: #ffffff; 
          border: 1px solid rgba(0, 32, 52, 0.05); padding: 40px; border-radius: 32px;
          transition: all 0.4s;
        }
        .gm-proc-step:hover { transform: scale(1.05); border-color: #002034; box-shadow: 0 30px 60px rgba(0, 32, 52, 0.08); }
        
        .gm-proc-num { 
          width: 80px; height: 80px; background: #002034; border: 8px solid #ffffff;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 900; font-size: 1.4rem; margin-bottom: 32px;
          box-shadow: 0 10px 30px rgba(0, 32, 52, 0.2);
          transition: all 0.3s;
        }
        .gm-proc-step:hover .gm-proc-num { transform: rotate(15deg) scale(1.1); }
        
        .gm-proc-step h4 { color: #002034; font-size: 1.4rem; margin-bottom: 16px; font-family: 'Inter', sans-serif; font-weight: 900; letter-spacing: -0.5px; }
        .gm-proc-step p { color: rgba(0, 32, 52, 0.6); font-size: 1rem; line-height: 1.7; }
        
        @media (max-width: 768px) { .gm-proc-line { display: none; } }
      `}</style>
      <section className="gm-proc-sec" id="process">
        <div className="container">
          <div className="rev" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Methodology</span>
            <h2 className="section-title">The Blueprint to Multi-<br />Generational Wealth.</h2>
          </div>

          <div className="gm-proc-grid">
            <div className="gm-proc-line" />
            {STEPS.map((s, i) => (
              <div key={i} className="gm-proc-step rev" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="gm-proc-num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
