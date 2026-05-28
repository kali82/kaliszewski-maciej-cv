import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    title: "Production Data Collection & Visualization Platform",
    date: "Feb 2026 – Jun 2026",
    desc: "ThingWorx solution for collection, processing, and visualization of production/process data. Application logic, data source integration, server setup (dev and production). InfluxDB v2 as time-series database.",
    tags: ["ThingWorx", "InfluxDB", "Time-Series", "Production Monitoring"]
  },
  {
    title: "Azure Event Grid MQTT Connector",
    date: "Jan 2026 – Mar 2026",
    desc: "ThingWorx Java extension for sending messages to Azure Event Grid. Handler thing for receiving messages from Azure.",
    tags: ["ThingWorx", "Java Extension", "Azure", "MQTT", "Event Grid"]
  },
  {
    title: "ML-Driven Dryer Optimization System",
    date: "Oct 2025 – Present",
    desc: "ThingWorx solution for optimizing dryer operation parameters. Integration with process data from Kepware/DB and ML model deployed in Azure cloud.",
    tags: ["ThingWorx", "Kepware", "Azure ML", "Process Optimization"]
  },
  {
    title: "Real-Time Production Recipe Management",
    date: "Oct 2025 – Present",
    desc: "Application enabling operators to dynamically adjust production parameters and monitor their impact on manufacturing processes directly on the production line.",
    tags: ["ThingWorx", "Real-Time", "HMI", "Production"]
  },
  {
    title: "Industrial HMI & Dashboard Suite",
    date: "Apr 2025 – Oct 2025",
    desc: "New application in Ignition 8.1 using Perspective module. User interfaces, dashboards, and industrial views for real-time production environments. SQL data integration. Jython scripting for dynamic view behavior.",
    tags: ["Ignition", "Perspective", "Jython", "SQL", "HMI"]
  },
  {
    title: "Vibration Signal Monitoring & FFT Analytics",
    date: "Dec 2024 – Apr 2025",
    desc: "System for vibration signal monitoring and FFT analytics for predictive maintenance. Early detection of anomalies in industrial machinery through visualization and analysis of raw sensor data.",
    tags: ["ThingWorx", "Predictive Maintenance", "FFT", "Sensor Analytics"]
  },
  {
    title: "Engineering Data Management Platform",
    date: "Apr 2024 – Present",
    desc: "Applications streamlining engineering data management and product lifecycle. Integration with PLM systems and databases for centralized access to technical documentation and product configurations.",
    tags: ["ThingWorx Navigate", "PLM", "Windchill", "Angular"]
  },
  {
    title: "Advanced Search & Cross-System Data Query",
    date: "Jan 2024 – Mar 2024",
    desc: "Application enabling advanced search and filtering of data distributed across multiple source systems. Centralized technical information access.",
    tags: ["ThingWorx", "Angular", "Multi-source Integration"]
  },
  {
    title: "Engineering Change Management System",
    date: "Oct 2023 – Dec 2023",
    desc: "Automated verification, approval, and tracking of changes in technical documentation and projects.",
    tags: ["ThingWorx", "ECM", "Workflow Automation"]
  },
  {
    title: "Alarm Management & Energy Monitoring System",
    date: "Apr 2023 – Aug 2023",
    desc: "Application for managing device alarms with configuration by alarm type. Real-time device location monitoring. Energy monitoring dashboards and backend services for production optimization.",
    tags: ["ThingWorx", "Alarms", "Energy Management", "MQTT"]
  }
];

const earlierProjects = [
  { title: "Energy Management System", date: "Dec 2022 – Mar 2023", desc: "Dashboards and backend services for energy monitoring and optimization." },
  { title: "Multi-Tenant Machine Management Security Model", date: "Jul 2022 – Mar 2023", desc: "Multi-tenant security for machine management with data isolation and access permissions." },
  { title: "OPC Connection Testing Environment", date: "Apr 2022 – Jul 2022", desc: "Simulation environment for local testing of OPC connections." },
  { title: "Production Application Validation", date: "Sep 2021 – Apr 2022", desc: "Validation and testing of production application functionalities." },
  { title: "IoT Server Assignment Optimization", date: "Aug 2021", desc: "System for automatic geographically-optimal server assignment for remote devices." },
  { title: "Custom CSV Import Widget", date: "Jul 2021", desc: "ThingWorx custom widget for CSV import and conversion to platform data structures." },
  { title: "Multilingual Localization Tool", date: "Jun 2021", desc: "Tool for managing multilingual translations without modifying source code." },
  { title: "Production Monitoring Dashboards", date: "Aug 2020 – Aug 2021", desc: "Real-time production process monitoring with automated analytical reports." },
  { title: "Smart IoT Demo — Voice-Controlled Bulb", date: "Jan 2021", desc: "Alexa-integrated smart bulb control demo." },
  { title: "Sound Level Monitor (ESP8266)", date: "Aug 2020", desc: "Web visualization of real-time acoustic sensor data." }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 print:text-black">
          <span className="text-primary font-mono text-sm">04.</span>
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 print:grid-cols-2 print:gap-4 print:mb-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors print:border-gray-300 print:break-inside-avoid print:p-4"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors print:text-black print:text-base">
                  {project.title}
                </h4>
              </div>
              <div className="font-mono text-xs text-muted-foreground mb-4 print:text-black">
                {project.date}
              </div>
              <p className="text-muted-foreground text-sm flex-1 mb-6 print:text-black print:mb-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs text-muted-foreground border-border print:text-black print:border-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-6 print:text-black">Earlier Projects</h3>
        <div className="space-y-4 print:space-y-2">
          {earlierProjects.map((project, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 py-3 border-b border-border/50 last:border-0 print:border-gray-200 print:py-2 print:break-inside-avoid">
              <div className="font-mono text-xs text-muted-foreground min-w-[140px] print:text-black">
                {project.date}
              </div>
              <div>
                <strong className="text-foreground print:text-black mr-2">{project.title}</strong>
                <span className="text-muted-foreground text-sm print:text-black">{project.desc}</span>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
