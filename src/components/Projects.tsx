import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Stone Paper Scissor Game",
      description: "An interactive game built with JavaScript featuring smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=60",
      github: "https://stone-paper-secissor.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Simon Says Game",
      description: "A memory game that challenges players to remember and repeat increasingly complex patterns.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
      github: "https://simon-says-game-one-gold.vercel.app/",
      tags: ["JavaScript", "Game Logic", "DOM"],
    },
    {
      title: "Todo Application",
      description: "A practical task management app with features to add, edit, and delete tasks efficiently.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
      github: "https://todoapp-nu-drab-95.vercel.app/",
      tags: ["JavaScript", "LocalStorage", "UI/UX"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frontend Mini <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent web development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-secondary/50 border-primary/20 hover:border-primary/40 overflow-hidden group hover:shadow-xl transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 px-4 text-white-500">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
