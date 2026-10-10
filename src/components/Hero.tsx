
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, FileText, ChevronDown } from "lucide-react";

import profileImage from "@/assets/63a784f9-7248-4078-9150-e9467a5ec7a4.png";
import heroBg from "@/assets/095ac547-33d8-4bce-af79-c82b180024c2.png";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Web Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Automatic typing and deleting animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && displayText === currentRole) {
      delay = 1600;
    } else if (isDeleting && displayText === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.90), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="animate-fade-in flex flex-col items-center text-center">

          {/* Profile Image */}
          <div className="group relative mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transition-all duration-500 group-hover:bg-primary/30 animate-glow" />

            <img
              src={profileImage}
              alt="Mohammad Husain - Developer"
              fetchPriority="high"
              className="relative h-40 w-40 rounded-full border-4 border-primary object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-48"
            />
          </div>

          {/* Name */}
          <h1 className="mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-7xl">
            Mohammad Husain
          </h1>

          {/* Animated Job Title */}
          <p className="mb-8 min-h-10 text-xl text-muted-foreground sm:text-2xl md:text-3xl">
            I am a{" "}
            <span className="font-semibold text-primary">
              {displayText}
              <span
                className="ml-0.5 inline-block animate-pulse"
                aria-hidden="true"
              >
                |
              </span>
            </span>
          </p>

          {/* About Description */}
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a BCA graduate from HNGU with a strong foundation in Full
            Stack Development. I have hands-on experience with HTML, CSS,
            JavaScript, React.js, Node.js, Express.js, PHP, and MySQL. I
            develop responsive web applications and work with databases to
            create practical solutions. I also have basic knowledge of Python,
            Excel, and ZPL for barcode and label designing. I am a quick
            learner, problem solver, and team player who is passionate about
            building efficient, user-friendly applications and continuously
            improving my technical skills.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* GitHub Projects */}
            <Button
              size="lg"
              onClick={() =>
                openLink(
                  "https://github.com/mohammad11-hub?tab=repositories"
                )
              }
              className="bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary-glow hover:shadow-xl"
            >
              <Github className="mr-2 h-5 w-5" />
              My Work
            </Button>

            {/* Resume */}
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1npoLMH0vl1vngfd03jvZWijxLrIU1jnA/view?usp=drivesdk"
                )
              }
              className="border-primary text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Scroll to About */}
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="mt-14 rounded-full p-3 transition-colors hover:bg-primary/10"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-7 w-7 animate-bounce text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
