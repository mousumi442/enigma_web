import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "CodeArena",
    description: "A real-time competitive coding platform with live leaderboards, challenge creation, and WebSocket-powered matchmaking.",
    tags: ["React", "Node.js", "WebSocket"],
    stars: 142,
    color: "primary",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=75&auto=format&fit=crop",
  },
  {
    title: "NeuroNet",
    description: "Browser-based neural network visualizer. Build, train, and watch neural nets learn in real-time with interactive 3D graphs.",
    tags: ["Three.js", "TensorFlow.js", "Python"],
    stars: 89,
    color: "accent",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=75&auto=format&fit=crop",
  },
  {
    title: "DevTrack",
    description: "An open-source project management tool built for developers. Kanban boards, Git integration, and sprint analytics.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    stars: 203,
    color: "primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=75&auto=format&fit=crop",
  },
  {
    title: "CryptoLens",
    description: "Cryptocurrency portfolio tracker with AI-powered market analysis, sentiment scoring, and automated alerts.",
    tags: ["React Native", "Python", "ML"],
    stars: 67,
    color: "accent",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=640&q=75&auto=format&fit=crop",
  },
];

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[180px] overflow-hidden rounded-t-lg">
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
        <span className="font-mono text-sm text-primary border border-primary/50 px-4 py-2 rounded neon-border">
          View Project
        </span>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 02"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
            Our <span className="text-primary neon-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open-source tools and apps built by the club
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-lg hover:neon-border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col"
            >
              <ProjectImage src={project.image} alt={project.title} />

              <div className="p-6 flex flex-col flex-1 relative">
                <div className={`absolute top-0 left-0 w-1 h-full ${project.color === "accent" ? "bg-accent" : "bg-primary"}`} />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm font-mono shrink-0">
                    <Star size={14} className="text-primary" />
                    {project.stars}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
