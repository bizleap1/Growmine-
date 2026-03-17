import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    content: "GrowMine has completely changed how I look at my business finances. Their SIP advice helped me build a solid reserve fund in just 3 years.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200"
  },
  {
    name: "Priya Deshmukh",
    role: "Software Engineer",
    content: "The claim settlement process for my health insurance was incredibly smooth thanks to the GrowMine team. They handled everything!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
  },
  {
    name: "Amit Patel",
    role: "Doctor",
    content: "Professionalism and trust are what GrowMine stands for. I highly recommend them for anyone looking for long-term wealth creation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header-left">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from real clients who found financial peace with GrowMine.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="quote-icon">
                <Quote size={20} />
              </div>
              <p className="testimonial-text">"{testimonial.content}"</p>
              <div className="client-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
