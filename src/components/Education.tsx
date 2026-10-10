import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-shell scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            <span className="gradient-text">Education</span>
          </h2>
        </header>

        <Card className="glass-card mx-auto max-w-4xl border-border/80">
          <CardContent className="p-6 sm:p-8">
            <article className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Bachelor of Computer Applications (BCA)</h3>

                <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Maktabah Jafariyah, Sedrana, Gujarat 384151
                </p>

                <p className="inline-flex rounded-full border border-primary/30 bg-primary/12 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary sm:text-sm">
                  Currently Pursuing
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Pursuing a comprehensive curriculum in programming, web development, and software engineering while
                  strengthening practical implementation skills through continuous project work.
                </p>
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
