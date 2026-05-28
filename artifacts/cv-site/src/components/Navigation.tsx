import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border print:hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight text-primary">
          MK<span className="text-foreground">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button 
          variant="outline" 
          size="sm" 
          onClick={handlePrint}
          className="gap-2"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Download CV</span>
        </Button>
      </div>
    </header>
  );
}
