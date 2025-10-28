import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrmdsunasara@gmail.com",
      link: "mailto:mmdsunasara@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7383829440",
      link: "tel:+917383829440",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mohammadhusain Sunasara",
      link: "https://www.linkedin.com/in/mohammadhusain-sunasara",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mohammad11-hub",
      link: "https://github.com/mohammad11-hub",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <Card
              key={item.label}
              className="bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm truncate block"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => window.open("mailto:mmdsunasara@gmail.com", "_blank")}
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
