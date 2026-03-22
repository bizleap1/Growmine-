import { Phone, MessageCircle } from 'lucide-react';

const Beacons = () => {
  return (
    <>
      <style>{`
        .gm-beacons {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 9999;
        }
        .gm-beacon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        .gm-beacon:hover {
          transform: scale(1.1) translateY(-5px);
        }
        .gm-beacon-whatsapp {
          background: #25D366;
        }
        .gm-beacon-call {
          background: #002034;
        }
        .gm-beacon::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid inherit;
          animation: beacon-pulse 2s infinite;
          opacity: 0;
        }
        .gm-beacon-whatsapp::before { border-color: #25D366; }
        .gm-beacon-call::before { border-color: #002034; }

        @keyframes beacon-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 768px) {
          .gm-beacons { bottom: 20px; right: 20px; gap: 10px; }
          .gm-beacon { width: 50px; height: 50px; }
        }
      `}</style>
      <div className="gm-beacons">
        <a 
          href="https://wa.me/917620488247" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gm-beacon gm-beacon-whatsapp"
          title="WhatsApp Us"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href="tel:+917620488247" 
          className="gm-beacon gm-beacon-call"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  );
};

export default Beacons;
