import enigmaLogo from "@/assets/enigma-logo.png";

const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={enigmaLogo} alt="Enigma Logo" className="w-6 h-6 rounded-sm object-contain" />
        <span className="font-mono text-sm text-muted-foreground">
          {"<Enigma/>"} © 2026
        </span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Built with 💚 by Coding Club Enigma
      </p>
    </div>
  </footer>
);

export default Footer;
