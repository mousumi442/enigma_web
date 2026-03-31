import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
