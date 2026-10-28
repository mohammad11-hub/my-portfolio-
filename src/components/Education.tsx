import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Maktabah Jafariyah, Sedrana, Gujarat 384151</span>
                  </div>
                  
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 mb-4">
                    SGPA:- 8.09
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                Completed a Bachelor's degree in Computer Completed a Bachelor's degree in Computer Applications (BCA) and currently pursuing a Master's degree in Computer Applications (MCA), with a focus on programming, web development, and software engineering. Continuously enhancing technical skills through hands-on projects and practical experience while strengthening knowledge of computer science fundamentals. (BCA) and currently pursuing a Master's degree in Computer Science (MCS), with a focus on programming, web development, and software engineering. Continuously enhancing technical skills through hands-on projects and practical experience while strengthening knowledge of computer science fundamentals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
