import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase animate-pulse-neon">
            {"// Welcome to"}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-mono tracking-tight mb-4">
            <span className="text-primary neon-text">Enigma</span>
          </h1>
          <p className="font-mono text-base md:text-lg text-muted-foreground tracking-wider mb-8 animate-pulse-neon">
            The Official Coding Club of <span className="text-primary font-semibold">VSSUT</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-md neon-border-strong hover:scale-105 transition-transform duration-200"
          >
            {">"} Explore Projects
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 border border-primary/50 text-primary font-mono font-semibold rounded-md hover:bg-primary/10 hover:neon-border transition-all duration-200"
          >
            {">"} Join Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
