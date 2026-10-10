import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  live?: string;
  github: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Stone Paper Scissor Game",
    description: "Interactive game built with JavaScript featuring responsive design and smooth gameplay.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=60",
    github: "https://stone-paper-secissor.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Simon Says Game",
    description: "Memory challenge game where players repeat increasingly complex visual patterns.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
    github: "https://simon-says-game-one-gold.vercel.app/",
    tags: ["JavaScript", "Game Logic", "DOM"],
  },
  {
    title: "Todo Application",
    description: "Task manager with add, edit, and delete workflows focused on practical productivity.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
    github: "https://todoapp-nu-drab-95.vercel.app/",
    tags: ["JavaScript", "LocalStorage", "UI/UX"],
  },
  {
    title: "VizTalk Chart Application",
    description: "Futuristic chat-style interface project built with React and SQLite-backed data flows.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    live: "https://charts-applications.vercel.app/auth",
    github: "https://charts-applications.vercel.app/",
    tags: ["React", "SQLite", "UI"],
  },
  {
    title: "SCAN & PAY",
    description:
      "Restaurant billing POS with item selection, auto bill calculation, barcode scanning, QR support, and bill history.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    live: "https://scan-pay-eight.vercel.app/",
    github: "https://scan-pay-eight.vercel.app/",
    tags: ["React", "Billing", "POS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>A selection of practical projects highlighting frontend development and product-focused implementation.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/80 bg-card/70 transition hover:-translate-y-1 hover:border-primary/45 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-secondary/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} source`}>
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </Button>

                  {project.live ? (
                    <Button asChild size="sm" className="w-full">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  ) : (
                    <Button asChild size="sm" className="w-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project`}>
                        <ExternalLink className="h-4 w-4" />
                        Open
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
