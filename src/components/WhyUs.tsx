import { LineChart, ShieldCheck } from "lucide-react";
import trustMeeting from '../assets/trust_meeting.png';

const WhyUs = () => {
  return (
    <>
      <style>{`
        .gm-sec-b { background: #fcfdfe; padding: 140px 0; position: relative; }
        .gm-why-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        
        .gm-why-vis { position: relative; }
        .gm-why-img-frame {
          width: 100%; aspect-ratio: 4/5; border-radius: 40px; overflow: hidden;
          position: relative; box-shadow: 0 50px 100px -20px rgba(0, 32, 52, 0.15);
        }
        .gm-why-img { 
          width: 100%; height: 100%; object-fit: cover; 
          background: url(${trustMeeting}) center/cover no-repeat;
        }
        
        .gm-vis-float { 
          position: absolute; bottom: 40px; right: -40px; background: #ffffff;
          padding: 40px; border-radius: 24px; border: 1px solid rgba(0, 32, 52, 0.05);
          box-shadow: 0 30px 60px rgba(0, 32, 52, 0.1); z-index: 2;
        }

        .gm-ring { width: 100px; height: 100px; border-radius: 50%; border: 6px solid rgba(0, 32, 52, 0.05); position: relative; margin-bottom: 20px; }
        .gm-ring-in { position: absolute; inset: -6px; border-radius: 50%; border: 6px solid #002034; border-top-color: transparent; transform: rotate(45deg); }
        .gm-ring-pct { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; color: #002034; line-height: 1; }
        .gm-ring-sub { font-size: 0.6rem; color: rgba(0, 32, 52, 0.4); text-transform: uppercase; letter-spacing: 1px; }

        .gm-metric-row { display: flex; gap: 40px; margin-top: 40px; }
        .gm-metric h4 { font-size: 1.8rem; color: #002034; margin-bottom: 4px; font-weight: 900; }
        .gm-metric p { font-size: 0.75rem; color: rgba(0, 32, 52, 0.4); text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }
        
        .gm-pts { display: flex; flex-direction: column; gap: 40px; margin-top: 48px; }
        .gm-pt { display: flex; gap: 24px; align-items: flex-start; }
        .gm-pt-icon { color: #002034; background: #ffffff; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0, 32, 52, 0.06); border: 1px solid rgba(0, 32, 52, 0.04); }
        .gm-pt-text h4 { color: #002034; font-size: 1.3rem; margin-bottom: 8px; font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.5px; }
        .gm-pt-text p { color: rgba(0, 32, 52, 0.6); font-size: 1rem; line-height: 1.6; }
        
        @media (max-width: 960px) { .gm-why-wrap { grid-template-columns: 1fr; } .gm-vis-float { position: relative; bottom: 0; right: 0; margin-top: 40px; } }
      `}</style>
      <section className="gm-sec-b" id="why">
        <div className="container">
          <div className="gm-why-wrap">
            <div className="rev">
                <span className="section-tag">Competitive Edge</span>
                <h2 className="section-title">The Foundation of <br />Nagpur's Trust.</h2>
                <p className="section-subtitle">Growth is nothing without security. We architect systems that ensure your legacy remains untouchable by market volatility.</p>
                <div className="gm-pts">
                  <div className="gm-pt">
                    <div className="gm-pt-icon"><LineChart size={24} /></div>
                    <div className="gm-pt-text">
                      <h4>Alpha-Focused Portfolios</h4>
                      <p>Proprietary SIP baskets and multi-manager strategies designed to outperform standard benchmarks consistently.</p>
                    </div>
                  </div>
                  <div className="gm-pt">
                    <div className="gm-pt-icon"><ShieldCheck size={24} /></div>
                    <div className="gm-pt-text">
                      <h4>Claim Concierge System</h4>
                      <p>A proactive claim recovery team that handles every legal and administrative hurdle for our HNI families.</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="gm-why-vis rev" style={{ transitionDelay: '0.3s' }}>
                <div className="gm-why-img-frame">
                   <div className="gm-why-img" />
                </div>
                <div className="gm-vis-float rev" style={{ transitionDelay: '0.5s' }}>
                    <div className="gm-ring">
                       <div className="gm-ring-in"></div>
                       <div className="gm-ring-pct">99.1%<span className="gm-ring-sub">Settled</span></div>
                    </div>
                    <h3 style={{ color: '#002034', fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px' }}>Proven Results</h3>
                    <div className="gm-metric-row">
                       <div className="gm-metric">
                          <h4>₹230 Cr</h4>
                          <p>Assets</p>
                       </div>
                       <div className="gm-metric">
                          <h4>5K+</h4>
                          <p>Families</p>
                       </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
