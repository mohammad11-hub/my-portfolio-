import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-shell scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </header>

        <Card className="glass-card mx-auto max-w-4xl border-border/80">
          <CardContent className="p-6 sm:p-8">
            <article className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold sm:text-2xl">Freelancer</h3>
                  <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground sm:text-sm">
                    <Calendar className="h-4 w-4" />
                    Ongoing since 2025
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Building web solutions for diverse client requirements, from responsive interfaces to tailored business
                  workflows. I focus on clear communication, dependable delivery, and continuous learning across modern
                  development practices.
                </p>

                <ul className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Client Collaboration",
                    "Custom Solutions",
                    "Project Delivery",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
