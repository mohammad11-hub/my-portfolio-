import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mrmdsunasara@gmail.com",
    link: "mailto:mrmdsunasara@gmail.com",
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

const Contact = () => {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="section-heading">
          <h2>
            Let’s <span className="gradient-text">Connect</span>
          </h2>
          <p>Open to freelance opportunities, collaborations, and conversations around frontend and full-stack work.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {contactInfo.map((item) => (
            <Card
              key={item.label}
              className="border-border/80 bg-card/75 transition hover:border-primary/45 hover:bg-card/90 hover:shadow-xl"
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0 space-y-1">
                  <h3 className="text-sm font-semibold sm:text-base">{item.label}</h3>
                  <a
                    href={item.link}
                    target={item.label !== "Phone" && item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Phone" && item.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="block truncate text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {item.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="mailto:mrmdsunasara@gmail.com" aria-label="Send an email to Mohammad Husain">
              <Send className="h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
