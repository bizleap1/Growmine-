const BLOGS = [
  { t: "Maximizing SIP Returns in 2024", d: "A deep dive into the 7-factor model and how it helps Nagpur investors beat indices.", c: "Wealth", i: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop" },
  { t: "Navigating Claim Rejections", d: "How our concierge system handles difficult health and motor insurance claims successfully.", c: "Insurance", i: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
  { t: "Tax Planning for HNI Households", d: "Strategic 80C and ELSS techniques to preserve net worth against high inflation.", c: "Taxation", i: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" },
  { t: "The Future of Estate Planning", d: "Securing your family's future with institutional-grade legal and financial frameworks.", c: "Legacy", i: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop" },
  { t: "Algorithmic Wealth Management", d: "Breaking down how high-precision algorithms outperform traditional portfolio sets.", c: "Tech", i: "https://images.unsplash.com/photo-1611974717483-360099563825?q=80&w=800&auto=format&fit=crop" },
  { t: "Premium Health Ecosystems", d: "Beyond basic coverage: accessing global healthcare networks for discerning families.", c: "Health", i: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
];

const Blogs = () => {
  return (
    <>
      <style>{`
        .gm-blog-sec { padding: 140px 0; background: #ffffff; }
        .gm-blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; margin-top: 80px; }
        .gm-blog-card { 
          background: #ffffff; border-radius: 32px; overflow: hidden;
          border: 1px solid rgba(0, 32, 52, 0.06); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; flex-direction: column;
        }
        .gm-blog-card:hover { transform: translateY(-12px); border-color: #002034; box-shadow: 0 40px 80px rgba(0, 32, 52, 0.08); }
        .gm-blog-img-box { width: 100%; height: 260px; overflow: hidden; position: relative; background: #002034; }
        .gm-blog-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .gm-blog-card:hover .gm-blog-img { transform: scale(1.05); }
        .gm-blog-cat { position: absolute; top: 24px; right: 24px; background: #ffffff; color: #002034; padding: 8px 16px; border-radius: 100px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .gm-blog-content { padding: 40px; flex: 1; display: flex; flex-direction: column; }
        .gm-blog-title { color: #002034; font-size: 1.5rem; font-weight: 800; margin-bottom: 16px; line-height: 1.3; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; }
        .gm-blog-desc { color: rgba(0, 32, 52, 0.6); font-size: 1.05rem; line-height: 1.7; margin-bottom: 32px; }
        .gm-blog-more { color: #002034; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px; margin-top: auto; }
      `}</style>
      <section className="gm-blog-sec" id="insights">
        <div className="container">
          <div className="rev" style={{ textAlign: 'left' }}>
            <span className="section-tag" style={{ marginLeft: 0 }}>Market Insights</span>
            <h2 className="section-title">GrowMine Intellectual Center</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', marginLeft: 0 }}>
              Strategic guidance and financial education for the informed investor.
            </p>
          </div>

          <div className="gm-blog-grid">
            {BLOGS.map((b, i) => (
              <div key={i} className="gm-blog-card rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="gm-blog-img-box">
                   <img src={b.i} alt={b.t} className="gm-blog-img" />
                   <div className="gm-blog-cat">{b.c}</div>
                </div>
                <div className="gm-blog-content">
                  <h3 className="gm-blog-title">{b.t}</h3>
                  <p className="gm-blog-desc">{b.d}</p>
                  <div className="gm-blog-more">Read Full Insight <span>→</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
