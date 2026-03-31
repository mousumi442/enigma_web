import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 04"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
            Get in <span className="text-primary neon-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Have a question or want to collaborate? Drop us a message.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-lg p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {">"} Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {">"} Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="you@email.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2">
                {">"} Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-input border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell us what's on your mind..."
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-md neon-border-strong hover:scale-105 transition-transform duration-200 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: Github, label: "GitHub" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Mail, label: "Email" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:neon-border transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
