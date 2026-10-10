import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Bootstrap", level: 85 },
  { name: "Advanced Excel", level: 70 },
  { name: "React.js", level: 80 },
  { name: ".NET / ASP.NET", level: 60 },
  { name: "Full Stack Development", level: 60 },
  { name: "AI", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p>Technologies and tools I use to design, build, and ship user-friendly web applications.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="border-border/80 bg-card/70 transition hover:border-primary/45 hover:bg-card/90 hover:shadow-xl"
            >
              <CardContent className="space-y-3 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold sm:text-base">{skill.name}</h3>
                  <Badge variant="outline">{skill.level}%</Badge>
                </div>

                <div className="h-2.5 rounded-full bg-secondary/70">
                  <div
                    className="h-2.5 rounded-full bg-[linear-gradient(130deg,hsl(var(--primary)),hsl(var(--accent)))]"
                    style={{ width: `${skill.level}%` }}
                    aria-label={`${skill.name} proficiency ${skill.level}%`}
                    role="img"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
