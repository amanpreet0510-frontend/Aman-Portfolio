"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and seamless user experiences",
  },
  {
    icon: Target,
    title: "Responsive Design",
    description: "Building pixel-perfect interfaces across all devices",
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    description: "Leveraging latest frameworks and best practices",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m a passionate Frontend Developer based in Chandigarh, India,
              with a strong foundation in building high-performance web
              applications. My journey into tech began with a background in
              Mathematics, which helps me approach problem-solving with
              analytical precision.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With expertise in React.js and Next.js, I specialize in creating
              responsive, scalable applications that deliver exceptional user
              experiences. I&apos;m proficient in modern state management solutions
              like Redux Toolkit and Zustand, and I love working with Tailwind
              CSS to craft beautiful interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the
              latest technologies. When I&apos;m not coding, I&apos;m exploring new
              frameworks, contributing to projects, or finding ways to optimize
              existing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
