import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import "./MarketingHero.css";

const MarketingHero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0f172a",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#6366f1", "#c084fc", "#818cf8"],
        },
        links: {
          color: "#818cf8",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.2, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 200,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const headlineText = "Grow Your Business With Data-Driven Digital Marketing";
  const words = headlineText.split(" ");

  return (
    <section className="marketing-hero">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="particles-bg"
        />
      )}
      
      <div className="container hero-content-wrapper">
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={16} /> <span>Next Generation Marketing</span>
          </motion.div>
          
          <h1 className="hero-headline">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut"
                }}
                style={{ display: "inline-block", marginRight: "12px" }}
                className={word === "Data-Driven" || word === "Digital" || word === "Marketing" ? "gradient-text" : ""}
              >
                {word}
                {i === 3 && <br />}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            className="hero-subheadline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            We help brands scale using SEO, performance marketing, <br />
            web development, and automation.
          </motion.p>
          
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.button 
              className="cta-primary btn-glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-gradient-overlay"></div>
    </section>
  );
};

export default MarketingHero;
