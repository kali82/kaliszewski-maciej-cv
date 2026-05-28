import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "IIoT Platforms",
    skills: ["ThingWorx", "ThingWorx Navigate", "ThingWorx REST/OData API", "Ignition 8.1 (Perspective)", "Azure IoT", "Node-RED", "MQTT", "OPC UA"],
    beginner: ["Litmus"]
  },
  {
    category: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "Stencil.js", "RxJS", "Chart.js", "agGrid", "Tailwind", "CSS3", "HTML5", "PWA"],
    beginner: []
  },
  {
    category: "Backend / Integration",
    skills: ["Java", ".NET", "Jython", "Bash", "Python", "Spring Framework", "Node.js", "REST APIs"],
    beginner: []
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "InfluxDB", "MongoDB", "CosmosDB", "MySQL", "Firebase"],
    beginner: []
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure (IoT Hub, CosmosDB, AD, CI/CD)", "Jenkins", "GitHub Actions", "Maven", "Gradle"],
    beginner: []
  },
  {
    category: "Tools",
    skills: ["Kepware", "Windchill PLM", "Apache Solr", "Grafana", "Postman", "Confluence", "Jira"],
    beginner: []
  }
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 print:text-black">
          <span className="text-primary font-mono text-sm">02.</span>
          Technology Matrix
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          {skillsData.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-5 rounded-lg border border-border bg-card print:border-gray-300 print:break-inside-avoid"
            >
              <h4 className="font-mono text-sm text-primary mb-4 print:text-black">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary text-secondary-foreground font-medium print:bg-gray-100 print:text-black print:border print:border-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
                {group.beginner && group.beginner.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/40 text-primary/70 font-medium bg-transparent hover:bg-primary/10 print:text-black print:border-gray-400"
                    title="Beginner level"
                  >
                    {skill}
                    <span className="ml-1.5 text-[10px] font-mono opacity-60 tracking-wide">beginner</span>
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
