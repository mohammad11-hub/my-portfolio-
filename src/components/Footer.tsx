import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/mohammad11-hub",
    label: "GitHub profile",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/mohammadhusain-sunasara",
    label: "LinkedIn profile",
    icon: Linkedin,
  },
  {
    href: "mailto:mrmdsunasara@gmail.com",
    label: "Send an email",
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-secondary/25 px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {currentYear} Mohammad Husain. Crafted with React and Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-secondary/30 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
              aria-label={item.label}
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
