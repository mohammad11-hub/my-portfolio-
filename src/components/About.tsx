import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive interfaces with modern React patterns and clean component architecture.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Connecting APIs and data layers to deliver practical, business-focused web solutions.",
  },
  {
    icon: Layout,
    title: "UI Systems",
    description: "Designing polished, accessible layouts with attention to spacing, hierarchy, and readability.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>
          <p>
            I’m a BCA graduate from HNGU with hands-on experience in frontend and backend development, database
            workflows, and project delivery for real-world requirements.
          </p>
        </header>

        <Card className="glass-card">
          <CardContent className="space-y-8 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I work with HTML, CSS, JavaScript, React.js, Node.js, Express.js, PHP, and MySQL to build practical web
              applications. I enjoy solving problems, collaborating with teams, and improving both code quality and
              user experience through iterative development.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-secondary/30 p-5 transition hover:border-primary/40 hover:bg-secondary/50"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
