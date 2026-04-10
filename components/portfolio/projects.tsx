"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Royal Caribbean",
    description:
      "Contributed to the development of the Royal Caribbean regional platform, a world-class cruise booking and experience website.",
    link: "https://www.royalcaribbean.ae/",
    tags: ["React", "Next.js", "Responsive Design"],
    featured: true,
  },
  {
    title: "RWIT",
    description:
      "Worked on the official RWIT company website, showcasing their IT services and solutions with a modern, professional design.",
    link: "https://www.rwit.io/",
    tags: ["React", "Tailwind CSS", "SEO"],
    featured: true,
  },
  {
    title: "Hiretechies",
    description:
      "Developed frontend components for the Hiretechies recruitment platform, connecting tech talent with opportunities.",
    link: "https://www.hiretechies.net/",
    tags: ["React", "Redux", "UI/UX"],
    featured: true,
  },
  {
    title: "Supabase Employee Dashboard",
    description:
      "Developed a comprehensive dashboard for real-time data management utilizing Supabase backend services.",
    link: "https://practice-project-ak.vercel.app",
    tags: ["React", "Supabase", "Real-time Data"],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A selection of projects I&apos;ve worked on, showcasing my expertise in
            building responsive and scalable web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                  <Globe className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div> */}

                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
