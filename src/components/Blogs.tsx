import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "Why SIP is the Best Way to Build Lifetime Wealth",
    excerpt: "Discover the power of compounding and why starting early with a small SIP can lead to a massive corpus over 20 years.",
    category: "Investments",
    date: "Mar 15, 2024",
    author: "Rakesh Verma",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600"
  },
  {
    id: 2,
    title: "5 Crucial Health Insurance Riders You Shouldn't Ignore",
    excerpt: "Critical illness, restoration benefit, and more. Learn how to customize your health plan for maximum protection.",
    category: "Insurance",
    date: "Mar 12, 2024",
    author: "Sunita Rao",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=600"
  },
  {
    id: 3,
    title: "Tax Planning 101: How to Save More Under Section 80C",
    excerpt: "From ELSS to PPF, find out the most efficient tax-saving instruments for the current financial year.",
    category: "Tax Planning",
    date: "Mar 10, 2024",
    author: "Anil Kulkarni",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600"
  },
  {
    id: 4,
    title: "Vehicle Insurance: Direct vs Agent Claims",
    excerpt: "Why having a local advisor in Nagpur makes all the difference during a midnight emergency claim.",
    category: "Expert Advice",
    date: "Mar 08, 2024",
    author: "GrowMine Team",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600"
  },
  {
    id: 5,
    title: "Retirement Planning: Is ₹1 Crore Enough in 2040?",
    excerpt: "Calculating inflation and lifestyle costs to build a realistic nest egg for your golden years.",
    category: "Retirement",
    date: "Mar 05, 2024",
    author: "Rakesh Verma",
    image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600"
  },
  {
    id: 6,
    title: "Women and Financial Independence: A New Era",
    excerpt: "Empowering women in Nagpur to take charge of their own portfolios and secure their future.",
    category: "Empowerment",
    date: "Mar 02, 2024",
    author: "Sunita Rao",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600"
  },
  {
    id: 7,
    title: "Mutual Fund Myths Debunked",
    excerpt: "Do you need a lot of money to start? Is it all gambling? We clear up common misconceptions.",
    category: "Education",
    date: "Feb 28, 2024",
    author: "Anil Kulkarni",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600"
  },
  {
    id: 8,
    title: "Understanding Term Life Insurance",
    excerpt: "Why term insurance is the most important financial gift you can give to your family.",
    category: "Insurance",
    date: "Feb 25, 2024",
    author: "GrowMine Team",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600"
  }
];

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <div className="section-header-left">
          <span className="section-tag">Insights & News</span>
          <h2 className="section-title">Latest Financial Blogs</h2>
          <p className="section-subtitle">Stay updated with the latest trends in investments, insurance, and wealth management.</p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category">{blog.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Calendar size={14} /> {blog.date}</span>
                  <span><User size={14} /> {blog.author}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <a href={`/blog/${blog.id}`} className="read-more">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
