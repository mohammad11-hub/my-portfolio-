import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">Freelancer</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Ongoing in 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Working on various freelance projects, applying skills in web development and data management. 
                    Collaborating with clients to deliver custom solutions that meet their business needs. 
                    Continuously learning and adapting to new technologies and best practices in the industry.
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      Client Management
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      Project Delivery
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
