import { useReveal } from '../hooks/useReveal';

const PRODUCTS = [
  { emoji: "🌟", n: "Top ELSS Funds", d: "Tax saving + high growth. Just 3-year lock-in for maximum returns.", r: "~15% p.a." },
  { emoji: "📊", n: "Flexi-Cap Funds", d: "Large, mid & small cap — the best of all worlds in one fund.", r: "~16% p.a." },
  { emoji: "🏦", n: "Debt Funds", d: "Stable, predictable returns with low risk for conservative investors.", r: "~7.5% p.a." },
  { emoji: "⚖️", n: "Hybrid Funds", d: "Balanced equity + debt strategy for moderate risk-takers.", r: "~12% p.a." },
];

const Products = () => {
  const hRef = useReveal();
  return (
    <>
      <style>{`
        .gm-prod-hdr { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 46px; max-width: 1180px; margin-left: auto; margin-right: auto; }
        .gm-prod-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; max-width: 1180px; margin: 0 auto; }
        .gm-prod-card {
          background: linear-gradient(160deg, #002a4a, #002034);
          border: 1px solid rgba(230, 195, 39, 0.1); border-radius: 16px;
          padding: 28px 22px; text-align: center; cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          position: relative; overflow: hidden;
        }
        .gm-prod-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #e6c327, #f58846); opacity: 0; transition: opacity 0.3s; }
        .gm-prod-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(0, 0, 0, 0.5); border-color: rgba(230, 195, 39, 0.25); }
        .gm-prod-card:hover::before { opacity: 1; }
        .gm-prod-emoji { font-size: 2.4rem; display: block; margin-bottom: 13px; }
        .gm-prod-name { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.97rem; margin-bottom: 8px; color: #fff; }
        .gm-prod-desc { font-size: 0.82rem; color: rgba(255, 255, 255, 0.48); line-height: 1.65; }
        .gm-prod-ret { margin-top: 14px; display: inline-block; background: rgba(230,195,39,0.12); color: #e6c327; border: 1px solid rgba(230, 195, 39, 0.25); font-family: 'Inter', sans-serif; font-size: 0.78rem; font-weight: 800; padding: 4px 13px; border-radius: 100px; }
        
        @media (max-width: 960px) {
          .gm-prod-grid { grid-template-columns: 1fr 1fr; }
          .gm-prod-hdr { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
        @media (max-width: 560px) {
          .gm-prod-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="gm-sec gm-sec-a" id="products">
        <div ref={hRef} className="gm-prod-hdr rev">
          <div>
            <div className="gm-eyebrow"><span style={{ display: 'block', width: '22px', height: '2px', background: '#e6c327', borderRadius: '1px' }}></span>Our Products</div>
            <h2 className="gm-h2">Handpicked for <span style={{ color: "#e6c327" }}>Maximum Returns</span></h2>
          </div>
          <button className="btn-outline">View All →</button>
        </div>
        <div className="gm-prod-grid">
          {PRODUCTS.map((p, i) => {
            const r = useReveal(i * 65);
            return (
              <div key={i} ref={r} className="gm-prod-card rev">
                <span className="gm-prod-emoji">{p.emoji}</span>
                <div className="gm-prod-name">{p.n}</div>
                <div className="gm-prod-desc">{p.d}</div>
                <span className="gm-prod-ret">{p.r}</span>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.28)", fontSize: "0.74rem", marginTop: 20, maxWidth: 560, marginLeft: "auto", marginRight: "auto", fontStyle: "italic" }}>
          *Mutual Fund investments are subject to market risk. Past performance is not a guarantee of future returns.
        </p>
      </section>
    </>
  );
};

export default Products;
