import { Shield, TrendingUp, HeartPulse, PieChart, Landmark, Scale, Car } from "lucide-react";
import growthAbstract from '../assets/growth_abstract.png';

const SERVICES = [
  { i: <Car size={32} />, t: "Vehicle Insurance", d: "High-performance motor insurance for executive fleets and personal luxury vehicles." },
  { i: <TrendingUp size={32} />, t: "Mutual Funds & SIPs", d: "Diversified mutual fund portfolios and automated SIP systems for long-term growth." },
  { i: <HeartPulse size={32} />, t: "Health Insurance", d: "Comprehensive health coverage with global access and zero-deductible plans." },
  { i: <Shield size={32} />, t: "Legacy Protection", d: "High-value term insurance and estate planning for generational wealth preservation." },
  { i: <Landmark size={32} />, t: "Tax Optimization", d: "Regulatory-grade tax planning to protect your net yields from inflation." },
  { i: <Scale size={32} />, t: "Claim Concierge", d: "A dedicated vertical to handle insurance claims from notification to settlement." },
];

const Services = () => {
  return (
    <>
      <style>{`
        .gm-srv-sec { padding: 140px 0; background: #ffffff; position: relative; overflow: hidden; }
        .gm-srv-bg-img {
          position: absolute; top: 0; right: 0; width: 40%; height: 100%;
          background: url(${growthAbstract}) right/cover no-repeat;
          opacity: 0.05; pointer-events: none;
        }
        .gm-srv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; margin-top: 80px; }
        .gm-srv-card { 
          background: #ffffff; padding: 64px 48px; border-radius: 40px; 
          border: 1px solid rgba(0, 32, 52, 0.06); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; flex-direction: column; gap: 32px; position: relative;
          overflow: hidden;
        }
        .gm-srv-card:hover { 
          transform: translateY(-16px); 
          border-color: #002034; 
          box-shadow: 0 50px 100px rgba(0, 32, 52, 0.08); 
        }
        .gm-srv-card::after {
          content: ''; position: absolute; top: 0; right: 0; width: 0; height: 4px;
          background: #002034; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gm-srv-card:hover::after { width: 100%; }

        .gm-srv-icon { 
          color: #002034; background: #f8fafc; width: 88px; height: 88px; 
          border-radius: 24px; display: flex; align-items: center; justify-content: center;
          box-shadow: inset 0 0 0 1px rgba(0, 32, 52, 0.05); transition: all 0.4s;
        }
        .gm-srv-card:hover .gm-srv-icon { background: #002034; color: #fff; transform: scale(1.1) rotate(5deg); }
        
        .gm-srv-card h3 { color: #002034; font-size: 1.6rem; font-weight: 900; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; line-height: 1.2; }
        .gm-srv-card p { color: rgba(0, 32, 52, 0.6); font-size: 1.05rem; line-height: 1.8; }
        .gm-srv-learn { 
          display: flex; align-items: center; gap: 10px; font-weight: 800; color: #002034; 
          font-size: 0.9rem; margin-top: auto; opacity: 0; transform: translateX(-15px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gm-srv-card:hover .gm-srv-learn { opacity: 1; transform: translateX(0); }
        
        .gm-srv-glass {
          position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .gm-srv-card:hover .gm-srv-glass { opacity: 1; }
      `}</style>
      <section className="gm-srv-sec" id="services">
        <div className="gm-srv-bg-img" />
        <div className="container">
          <div className="rev" style={{ textAlign: 'left' }}>
            <span className="section-tag" style={{ marginLeft: '0' }}>GrowMine</span>
            <h2 className="section-title">Institutional Financial <br />Architecture.</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', marginLeft: '0' }}>
              We curate exclusive financial instruments typically reserved for large-scale family offices.
            </p>
          </div>
          <div className="gm-srv-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="gm-srv-card rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="gm-srv-glass" />
                <div className="gm-srv-icon">{s.i}</div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
                <div className="gm-srv-learn">Precision System Details <span>→</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
