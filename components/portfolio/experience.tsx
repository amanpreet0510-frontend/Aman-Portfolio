"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "RW INFOTECH PVT LTD.",
    location: "Mohali, India",
    period: "June 2025 – March 2026",
    description:
      "Worked as a Frontend Developer using React.js and Next.js, building responsive and scalable web applications.",
    type: "work",
  },
  {
    title: "Frontend Development Trainee",
    company: "Excellence Technology Institute",
    location: "Chandigarh, India",
    period: "January 2025 – May 2025",
    description:
      "Completed intensive training in modern frontend technologies including React and JavaScript.",
    type: "work",
  },
];

const education = [
  {
    degree: "M.Sc. Mathematics",
    institution: "DAV College",
    location: "Chandigarh, India",
    year: "December 2020",
  },
  {
    degree: "B.Sc. Non-Medical",
    institution: "PGGC-11",
    location: "Chandigarh, India",
    year: "July 2018",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Work Experience
              </h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mt-2">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Education
              </h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <span className="text-sm text-primary font-medium">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mt-2">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
