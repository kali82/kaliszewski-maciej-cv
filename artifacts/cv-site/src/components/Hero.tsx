import { motion } from "framer-motion";
import { Mail, BadgeCheck, Terminal, Phone, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-12 md:pt-20 print:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6 print:mb-2">
          <Terminal className="w-6 h-6 text-primary" />
          <span className="font-mono text-primary text-sm font-medium tracking-wider uppercase">System Initialize</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 print:text-black">
          Maciej Kaliszewski
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 print:text-black print:text-xl">
          Senior Industrial IoT Specialist
        </h2>
        
        <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mb-8 print:text-black print:text-base print:mb-4">
          "6 years of experience delivering enterprise-grade IIoT solutions — from device integration to full-stack dashboards."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 print:mb-6">
          <a 
            href="mailto:kaliszewskimaciej@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black"
          >
            <Mail className="w-4 h-4" />
            kaliszewskimaciej@gmail.com
          </a>

          <div className="hidden sm:block text-muted-foreground print:hidden">•</div>

          <a
            href="tel:+48530335264"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black"
          >
            <Phone className="w-4 h-4" />
            +48 530 335 264
          </a>
          
          <div className="hidden sm:block text-muted-foreground print:hidden">•</div>

          <a
            href="https://www.linkedin.com/in/maciej-kaliszewski-052013135/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <div className="hidden sm:block text-muted-foreground print:hidden">•</div>

          <a
            href="https://github.com/kali82"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <div className="hidden sm:block text-muted-foreground print:hidden">•</div>
          
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary print:text-black">
            <BadgeCheck className="w-4 h-4" />
            Ignition Core Certified 8.1
          </div>
        </div>
      </motion.div>
    </section>
  );
}
