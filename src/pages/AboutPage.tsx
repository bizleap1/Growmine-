import ServiceExpansion from '../components/ServiceExpansion'

const AboutPage = () => {
  return (
    <div className="about-page" style={{ paddingTop: '120px' }}>
      <section className="about-intro" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <span className="section-tag">Our Legacy</span>
          <h1 className="section-title" style={{ fontSize: '48px', marginBottom: '24px' }}>Nagpur's Trusted <br />Financial Partner</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              With over 15 years of excellence, GrowMine has been at the forefront of financial literacy and security in Nagpur. 
              We believe that financial freedom isn't just for the wealthy—it's for anyone with a plan and the discipline to follow it.
              <br /><br />
              Our mission is to simplify investments and insurance, providing clear, actionable advice that puts your family's future first.
            </p>
            <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800" 
                alt="Our Team" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      <ServiceExpansion />
    </div>
  )
}

export default AboutPage
