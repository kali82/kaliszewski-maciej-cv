import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 print:text-black">
          <span className="text-primary font-mono text-sm">03.</span>
          Experience
        </h3>

        <div className="relative pl-6 md:pl-0 border-l border-border md:border-none print:border-none print:pl-0">
          <div className="mb-12 print:mb-8 print:break-inside-avoid relative">
            
            {/* Desktop Timeline indicator */}
            <div className="hidden md:block absolute left-[-2.5rem] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background print:hidden"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold print:text-black">Senior IoT Specialist</h4>
                <div className="text-lg text-primary font-medium print:text-gray-700">Transition Technologies PSC</div>
              </div>
              <div className="text-sm font-mono text-muted-foreground mt-1 md:mt-0 print:text-black">
                October 2019 — Present
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground text-base print:text-black print:text-sm">
              <ul className="space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground print:text-black">ThingWorx Platform:</strong> Built custom mashups and dashboards to monitor and control industrial processes. Designed services to handle backend logic, integrate with external systems, and support real-time data visualization. Integrated data from Kepware, Windchill, MongoDB, Apache Solr.
                </li>
                <li>
                  <strong className="text-foreground print:text-black">Ignition:</strong> Designed and implemented industrial applications using Ignition 8.1, mainly Perspective module. Created real-time dashboards and HMI views. Wrote Jython scripts for backend logic and UI dynamics. Managed SQL data integration.
                </li>
                <li>
                  <strong className="text-foreground print:text-black">Angular:</strong> Developed modern frontend apps using Angular (incl. v17). Implemented forms, tables, dynamic data visualizations (Chart.js, agGrid). Integrated with REST APIs. Configured Azure AD for authentication.
                </li>
                <li>
                  <strong className="text-foreground print:text-black">Azure:</strong> Deployed applications using Jenkins CI/CD. Used CosmosDB for NoSQL storage, Azure AD for identity management. Created secure, scalable environments.
                </li>
                <li>
                  <strong className="text-foreground print:text-black">ThingWorx Navigate:</strong> Developed custom apps on ThingWorx Navigate platform, including backend services to retrieve data from Windchill and MongoDB. Administrative tools for app configuration and role-based access control.
                </li>
                <li>
                  <strong className="text-foreground print:text-black">Java/.Net:</strong> Created backend services for data processing, business logic, external system integration. Developed RESTful APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
