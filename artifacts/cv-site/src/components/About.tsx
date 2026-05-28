import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 print:text-black">
          <span className="text-primary font-mono text-sm">01.</span>
          Profile
        </h3>
        
        <div className="prose prose-invert max-w-none text-muted-foreground print:text-black text-lg leading-relaxed">
          <p>
            Industrial IoT specialist with 6 years of experience architecting and delivering enterprise-grade solutions on platforms including ThingWorx and Ignition. Expertise spans the full development lifecycle — from backend system integration and data pipeline architecture to modern frontend development using Angular and React. 
          </p>
          <p>
            Proven track record of translating complex industrial requirements into scalable, maintainable applications that enhance operational efficiency and enable data-driven decision-making.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
