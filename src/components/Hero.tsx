
import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import profileImage from "@/assets/63a784f9-7248-4078-9150-e9467a5ec7a4.png";
import heroBg from "@/assets/095ac547-33d8-4bce-af79-c82b180024c2.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Profile Image */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-500 animate-glow" />

            <img
              src={profileImage}
              alt="Mohammad Husain - Full Stack Developer"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-primary shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Mohammad Husain
          </h1>

          {/* Animated Job Titles */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
            I am a{" "}
            <span className="text-primary font-semibold">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </p>

          {/* About Description */}
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground mb-10">
            I am a BCA graduate from HNGU with a strong foundation in Full
            Stack Development. I have hands-on experience with HTML, CSS,
            JavaScript, React.js, Node.js, Express.js, PHP, and MySQL. I have
            worked on responsive web applications, database management, and
            real-world projects, along with basic knowledge of Python, Excel,
            and ZPL for barcode and label designing. I am a quick learner,
            dedicated problem solver, and team player who is passionate about
            building efficient, user-friendly applications and continuously
            improving my technical skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://github.com/mohammad11-hub?tab=repositories",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              My Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1npoLMH0vl1vngfd03jvZWijxLrIU1jnA/view?usp=drivesdk",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Scroll Down */}
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="mt-14 p-3 animate-bounce rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Scroll to About section"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
