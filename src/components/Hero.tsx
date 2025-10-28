import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import profileImage from "@/assets/PNG.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500 animate-glow" />
            <img
              src={profileImage}
              alt="Mohammad Husain"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-primary shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Mohammad Husain
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            I am a <span className="text-primary font-semibold">Web Developer</span>
          </p>

          <p className="max-w-2xl text-lg text-muted-foreground mb-12">
            BCA student specializing in web development with expertise in HTML, CSS, JavaScript, PHP, and Bootstrap. 
            Passionate about creating beautiful and functional web applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("https://github.com/mohammad11-hub?tab=repositories", "_blank")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Github className="mr-2 h-5 w-5" />
              My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://drive.google.com/file/d/1qiiYX-MMrbcTZ5zDithXe_kkQuXA1y5X/view?usp=sharing", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="mt-16 animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
