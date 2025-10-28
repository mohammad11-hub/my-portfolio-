import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern web technologies",
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Working with PHP and databases to create dynamic web applications",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive designs with Bootstrap and CSS",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/50 border-primary/20 shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hello, I'm Mohammad Husain, a BCA student at Maktabah Jafariyah. I specialize in HTML, CSS, 
                JavaScript, PHP, basic Python, and Bootstrap 5 to streamline project workflows and enhance team 
                collaboration. I'm continuously advancing my backend expertise while preparing to expand into 
                full-stack development. Additionally, I have skills in Advanced Excel and creating dynamic dashboards.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 hover:bg-card transition-all hover:shadow-lg group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
