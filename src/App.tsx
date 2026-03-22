import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import SupportPage from './pages/SupportPage';
import Beacons from './components/Beacons';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
        }
      });
    }, { threshold: 0.1 });

    const scanAndObserve = () => {
      document.querySelectorAll('.rev:not(.vis)').forEach(el => observer.observe(el));
    };

    // Initial scan
    setTimeout(scanAndObserve, 100);

    // Watch for DOM changes to catch new routes/components
    const mo = new MutationObserver(scanAndObserve);
    mo.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return (
    <div className="app-wrapper">
      <div id="scroll-progress" />
      <div className="gm-noise" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<SupportPage />} />
      </Routes>
      <Beacons />
      <Footer />
    </div>
  );
}

export default App;
