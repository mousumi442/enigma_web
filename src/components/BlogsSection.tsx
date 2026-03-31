import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";

const blogs = [
  {
    title: "Building Scalable WebSocket Servers in Node.js",
    excerpt: "A deep dive into architecting real-time communication systems that handle thousands of concurrent connections.",
    author: "Arjun Mehta",
    date: "Mar 15, 2026",
    readTime: "8 min",
    category: "Backend",
  },
  {
    title: "Introduction to Rust for Systems Programming",
    excerpt: "Why Rust is becoming the go-to language for performance-critical applications and how to get started.",
    author: "Karthik Nair",
    date: "Mar 8, 2026",
    readTime: "12 min",
    category: "Systems",
  },
  {
    title: "The Art of Crafting Developer-Friendly APIs",
    excerpt: "Design principles and patterns that make APIs intuitive, consistent, and a joy to work with.",
    author: "Sneha Iyer",
    date: "Feb 28, 2026",
    readTime: "6 min",
    category: "Design",
  },
  {
    title: "Neural Networks from Scratch with Python",
    excerpt: "Forget the frameworks—let's build a neural net using only NumPy to truly understand backpropagation.",
    author: "Priya Sharma",
    date: "Feb 20, 2026",
    readTime: "15 min",
    category: "ML",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 03"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
            Our <span className="text-primary neon-text">Blog</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Insights, tutorials, and deep dives from our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-lg p-6 hover:neon-border transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-mono bg-accent/15 text-accent border border-accent/20 rounded">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <Clock size={12} /> {blog.readTime}
                </span>
              </div>

              <h3 className="font-mono font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
                {blog.title}
                <ArrowUpRight size={16} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <User size={12} /> {blog.author} · {blog.date}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
