import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Github } from "lucide-react";
import profileImage from "@/assets/63a784f9-7248-4078-9150-e9467a5ec7a4.png";
import heroBg from "@/assets/095ac547-33d8-4bce-af79-c82b180024c2.png";

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
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(120deg, hsl(228 31% 10% / 0.92), hsl(228 31% 10% / 0.72)), url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="space-y-6 text-center lg:text-left">
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary sm:text-sm">
            Full Stack Developer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="gradient-text">Mohammad Husain</span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0 lg:text-lg">
            I build responsive, user-focused web applications using React, JavaScript, PHP, Node.js, and SQL while
            continuously sharpening my full-stack skills through practical projects.
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild size="lg">
              <a href="https://github.com/mohammad11-hub?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href="https://drive.google.com/file/d/1npoLMH0vl1vngfd03jvZWijxLrIU1jnA/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground sm:text-sm lg:justify-start">
            <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1">React & TypeScript</span>
            <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1">Backend Integration</span>
            <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1">Responsive UI</span>
          </div>
        </div>

        <div className="mx-auto w-fit">
          <div className="relative rounded-[2rem] border border-border/70 bg-card/60 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <img
              src={profileImage}
              alt="Portrait of Mohammad Husain"
              className="h-60 w-60 rounded-[1.4rem] object-cover object-top sm:h-72 sm:w-72"
            />
            <div
              className="pointer-events-none absolute -bottom-4 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-primary/20 blur-xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/70 bg-background/75 px-4 py-2 text-xs font-medium text-muted-foreground transition hover:border-primary/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Scroll to about section"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
};

export default Hero;
