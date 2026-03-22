import ServiceExpansion from "../components/ServiceExpansion";
import heroOffice from '../assets/hero_office.png';
import trustMeeting from '../assets/trust_meeting.png';

const AboutPage = () => {
  return (
    <div className="page-content" style={{ paddingTop: '160px', background: '#ffffff' }}>
      <div className="container">
        <div className="rev vis">
          <span className="section-tag">Our History</span>
          <h1 className="section-title">A Legacy of Nagpur's <br /><span style={{ color: '#002034' }}>Financial Guardianship.</span></h1>
          <p className="section-subtitle" style={{ maxWidth: '850px', marginBottom: '80px', fontSize: '1.25rem' }}>
            Founded on the solid rock of absolute integrity, GrowMine has evolved into Nagpur's premier sanctuary for wealth preservation. We serve as the primary guardians for over 5,000 families, managing a legacy worth ₹230+ Crores with institutional-grade rigor and clinical precision.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '140px' }}>
           <div className="rev vis" style={{ transitionDelay: '0.2s' }}>
              <div style={{ padding: '60px', borderRadius: '40px', background: '#f8fafc', border: '1px solid rgba(0, 32, 52, 0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: `url(${trustMeeting}) center/cover no-repeat`, opacity: 0.1, filter: 'grayscale(1)' }} />
                <h3 style={{ color: '#002034', fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px', position: 'relative' }}>The Nagpur HQ</h3>
                <p style={{ color: 'rgba(0, 32, 52, 0.7)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', position: 'relative' }}>
                  Our physical presence in Nagpur allows us to provide a level of 'Doorstep Financial Service' that purely digital platforms simply cannot match. We believe that wealth management is a high-touch human endeavor.
                </p>
                <div className="gm-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', position: 'relative' }}>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: '#002034', fontWeight: 900 }}>15+</h3>
                        <p style={{ color: 'rgba(0, 32, 52, 0.4)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>Years</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: '#002034', fontWeight: 900 }}>99%</h3>
                        <p style={{ color: 'rgba(0, 32, 52, 0.4)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>Claims</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: '#002034', fontWeight: 900 }}>₹230cr</h3>
                        <p style={{ color: 'rgba(0, 32, 52, 0.4)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>Assets</p>
                    </div>
                </div>
              </div>
           </div>
           <div className="rev vis" style={{ transitionDelay: '0.4s' }}>
              <img src={heroOffice} alt="Office" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0, 0, 0, 0.1)' }} />
           </div>
        </div>
      </div>
      <ServiceExpansion />
    </div>
  );
};

export default AboutPage;
