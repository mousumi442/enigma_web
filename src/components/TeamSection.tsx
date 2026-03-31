import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "President & Lead Dev", bio: "Full-stack wizard with a passion for open source and mentoring.", avatar: "AM" },
  { name: "Priya Sharma", role: "Vice President", bio: "ML enthusiast who bridges the gap between research and real-world apps.", avatar: "PS" },
  { name: "Karthik Nair", role: "Tech Lead", bio: "Systems programmer. Loves Rust, low-level code, and competitive programming.", avatar: "KN" },
  { name: "Ananya Das", role: "Design Lead", bio: "Crafts pixel-perfect UIs that feel as good as they look.", avatar: "AD" },
  { name: "Rohan Gupta", role: "Events Head", bio: "Organizes hackathons, workshops, and everything in between.", avatar: "RG" },
  { name: "Sneha Iyer", role: "Content Lead", bio: "Writes technical blogs and documentation that actually make sense.", avatar: "SI" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 01"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
            Our <span className="text-primary neon-text">Team</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            The brilliant minds behind Enigma
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-lg p-6 hover:neon-border transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary text-lg group-hover:bg-primary/30 transition-colors">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground">{member.name}</h3>
                  <p className="font-mono text-xs text-primary">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
