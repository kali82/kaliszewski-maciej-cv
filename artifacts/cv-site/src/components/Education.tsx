import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 print:text-black">
          <span className="text-primary font-mono text-sm">05.</span>
          Education & Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-6">
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-4 print:text-black border-b border-border pb-2 print:border-gray-300">Certifications & Training</h4>
              <ul className="space-y-3 text-muted-foreground print:text-black">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span><strong className="text-foreground print:text-black">Inductive Automation — Ignition Core Certified 8.1</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Programming of Siemens PLC Controllers and HMI Panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>TT Academy — IoT Awareness</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 print:text-black border-b border-border pb-2 print:border-gray-300">Education</h4>
              <div className="text-muted-foreground print:text-black">
                <div className="font-bold text-foreground print:text-black">University of Zielona Góra</div>
                <div className="font-mono text-sm mb-1">2015 – 2020</div>
                <div>Computer Science — Specialization: Engineering of Micro Informatics Systems</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-4 print:text-black border-b border-border pb-2 print:border-gray-300">Languages</h4>
              <ul className="space-y-2 text-muted-foreground print:text-black">
                <li className="flex justify-between items-center max-w-[200px]">
                  <span>Polish</span>
                  <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded text-secondary-foreground print:border print:border-gray-300 print:bg-transparent print:text-black">Native</span>
                </li>
                <li className="flex justify-between items-center max-w-[200px]">
                  <span>English</span>
                  <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded text-secondary-foreground print:border print:border-gray-300 print:bg-transparent print:text-black">C1</span>
                </li>
                <li className="flex justify-between items-center max-w-[200px]">
                  <span>German</span>
                  <span className="font-mono text-sm bg-secondary px-2 py-0.5 rounded text-secondary-foreground print:border print:border-gray-300 print:bg-transparent print:text-black">A1</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 print:text-black border-b border-border pb-2 print:border-gray-300">Interests</h4>
              <div className="text-muted-foreground print:text-black">
                Tennis, Football, Golf, Chess
                <div className="mt-2 text-sm text-muted-foreground/80 print:text-black">Driving License: B</div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
