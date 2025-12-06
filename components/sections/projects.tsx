"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with Next.js and Stripe.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
    image: "/projects/task-app.jpg",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts, interactive charts, and weather alerts.",
    image: "/projects/weather.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolios with drag-and-drop builder and customizable themes.",
    image: "/projects/cms.jpg",
    technologies: ["Next.js", "MongoDB", "Node.js", "TailwindCSS"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: false,
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media accounts with data visualization and engagement metrics.",
    image: "/projects/social.jpg",
    technologies: ["React", "D3.js", "REST API", "SCSS"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: true,
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans, progress tracking, and goal setting.",
    image: "/projects/fitness.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
          >
            Featured Only
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    💻
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
