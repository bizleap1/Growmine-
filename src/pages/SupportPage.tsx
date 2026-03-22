import { Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="page-content" style={{ paddingTop: '160px', background: '#ffffff', minHeight: '100vh' }}>
      <div className="container">
        <div className="rev vis">
          <span className="section-tag">Elite Support</span>
          <h1 className="section-title">Institutional <br /><span style={{ color: '#002034' }}>Direct Channels</span></h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', marginBottom: '80px' }}>
            Request priority advisory or report an urgent claim. Our executive response team is available for HNIs and institutional clients.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', marginBottom: '120px' }}>
          {/* Contact Form Section */}
          <div className="rev vis" style={{ transitionDelay: '0.2s' }}>
             <div style={{ background: '#f8fafc', padding: '60px', borderRadius: '40px', border: '1px solid rgba(0, 32, 52, 0.05)' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#002034', marginBottom: '12px' }}>Secure Inquiry System</h3>
                <p style={{ color: 'rgba(0, 32, 52, 0.6)', marginBottom: '40px' }}>Your data is protected with regulatory-grade encryption.</p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                         <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#002034' }}>Full Name</label>
                         <input type="text" placeholder="John Doe" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,32,52,0.1)', background: '#fff', fontSize: '1rem' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                         <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#002034' }}>Institutional Email</label>
                         <input type="email" placeholder="john@company.com" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,32,52,0.1)', background: '#fff', fontSize: '1rem' }} />
                      </div>
                   </div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#002034' }}>Service Type</label>
                      <select style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,32,52,0.1)', background: '#fff', fontSize: '1rem', appearance: 'none' }}>
                         <option>Wealth Engineering</option>
                         <option>Executive Health</option>
                         <option>Legacy Protection</option>
                         <option>Urgent Claim Assistance</option>
                      </select>
                   </div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#002034' }}>Message</label>
                      <textarea placeholder="Describe your requirement..." rows={5} style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(0,32,52,0.1)', background: '#fff', fontSize: '1rem', resize: 'none' }} />
                   </div>
                   <button className="btn-gold" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                      Send Inquiry <Send size={18} />
                   </button>
                </form>
             </div>
          </div>

          {/* Contact Details Section */}
          <div className="rev vis" style={{ transitionDelay: '0.4s' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ background: '#002034', padding: '48px', borderRadius: '32px', color: '#fff', boxShadow: '0 30px 60px rgba(0,32,52,0.2)' }}>
                <div style={{ color: '#e6c327', marginBottom: '24px' }}><Phone size={40} /></div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 900 }}>Executive Hotline</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px', fontSize: '0.95rem' }}>Direct line for urgent claims and HNI consultations.</p>
                <a href="tel:+917620488247" style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 900 }}>+91 7620 488 247</a>
              </div>
              
              <div style={{ background: '#f8fafc', padding: '48px', borderRadius: '32px', border: '1px solid rgba(0, 32, 52, 0.05)' }}>
                <div style={{ color: '#002034', marginBottom: '24px' }}><MessageSquare size={40} /></div>
                <h4 style={{ color: '#002034', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 900 }}>WhatsApp Us</h4>
                <p style={{ color: 'rgba(0, 32, 52, 0.6)', marginBottom: '24px', fontSize: '0.95rem' }}>Instant chat with our advisory team for rapid support.</p>
                <a href="https://wa.me/917620488247" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Start Consultation <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rev vis" style={{ transitionDelay: '0.6s', marginBottom: '140px' }}>
           <div style={{ background: '#f8fafc', height: '500px', borderRadius: '48px', border: '1px solid rgba(0, 32, 52, 0.05)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ padding: '60px', position: 'absolute', top: 0, left: 0, width: '400px', zIndex: 2, background: 'linear-gradient(to right, #f8fafc 80%, transparent)' }}>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#002034', marginBottom: '8px' }}>
                    <MapPin size={24} color="#e6c327" /> <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px' }}>Nagpur Headquarters</span>
                 </div>
                 <h3 style={{ color: '#002034', fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>Nagpur, <br />Maharashtra</h3>
                 <p style={{ color: 'rgba(0,32,52,0.6)', fontSize: '1.1rem' }}>Visit our flagship office for in-person strategy sessions.</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230404!2d79.00246231640626!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d2ce1488e39!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.8, filter: 'grayscale(1) contrast(1.1) invert(0)' }} 
                allowFullScreen 
                loading="lazy"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
