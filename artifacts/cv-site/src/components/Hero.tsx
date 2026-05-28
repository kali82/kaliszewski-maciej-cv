import { motion } from "framer-motion";
import { Mail, BadgeCheck, Terminal, Phone, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-12 md:pt-20 print:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <div>
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
            "6 years of experience delivering enterprise-grade IIoT solutions - from device integration to full-stack dashboards."
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-12 print:mb-6">
            <a
              href="mailto:kaliszewskimaciej@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              kaliszewskimaciej@gmail.com
            </a>

            <div className="text-muted-foreground print:hidden">-</div>

            <a
              href="tel:+48530335264"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              +48 530 335 264
            </a>

            <div className="text-muted-foreground print:hidden">-</div>

            <a
              href="https://www.linkedin.com/in/maciej-kaliszewski-052013135/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black whitespace-nowrap"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <div className="text-muted-foreground print:hidden">-</div>

            <a
              href="https://github.com/kali82"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors print:text-black whitespace-nowrap"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <div className="text-muted-foreground print:hidden">-</div>

            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary print:text-black whitespace-nowrap">
              <BadgeCheck className="w-4 h-4" />
              Ignition Core Certified 8.1
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] justify-self-center print:hidden">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-primary/40" />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <img
              src="/profile-maciej.jpg"
              alt="Maciej Kaliszewski"
              className="aspect-[4/5] w-full rounded-md object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
