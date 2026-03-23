const TICKER = [
  { l: "SIP Returns", v: "+14.2% CAGR" },
  { l: "Clients", v: "100+" },
  { l: "AUM", v: "50 cr+" },
  { l: "Claims Settled", v: "99.1%" },
  { l: "SEBI Registered", v: "Certified" },
  { l: "Google Rating", v: "4.9★" },
];

const Ticker = () => {
  const d = [...TICKER, ...TICKER];
  return (
    <>
      <style>{`
        .gm-ticker-wrap {
          background: #003363; border-top: 1px solid rgba(230,195,39,0.15);
          border-bottom: 1px solid rgba(230,195,39,0.15);
          padding: 12px 0; overflow: hidden; white-space: nowrap; position: relative;
        }
        .gm-ticker-wrap::before, .gm-ticker-wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2;
        }
        .gm-ticker-wrap::before { left: 0; background: linear-gradient(90deg, #003363, transparent); }
        .gm-ticker-wrap::after { right: 0; background: linear-gradient(-90deg, #003363, transparent); }
        .gm-ticker { display: inline-flex; gap: 60px; animation: gmTick 30s linear infinite; }
        @keyframes gmTick { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        .gm-ti { display: inline-flex; align-items: center; gap: 10px; font-family: 'IBM Plex Sans', sans-serif; font-size: 0.82rem; color: rgba(255, 255, 255, 0.58); font-weight: 500; }
        .gm-ti .tv { color: #e6c327; font-weight: 700; font-family: 'Inter', sans-serif; }
        .gm-ti .td { color: #f58846; }
      `}</style>
      <div className="gm-ticker-wrap">
        <div className="gm-ticker">
          {d.map((t, i) => (
            <div className="gm-ti" key={i}>
              <span className="td">◆</span>{t.l} <span className="tv">{t.v}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ticker;


