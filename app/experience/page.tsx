"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Analyst",
    company: "HashMato",
    location: "Chennai, India",
    period: "Feb 2024 - Present",
    year: "2024",
    description:
      "Working on restaurant meal ordering systems, kiosk applications, and online ordering platforms",
    achievements: [
      "Developed intuitive UIs for restaurant ordering systems",
      "Built Kiosk applications using Wails (React + Go)",
      "Implemented secure payment integration and checkout features",
      "Created admin dashboard with role-based access control",
      "Leveraged Zustand for efficient state management",
    ],
    technologies: ["React", "Wails", "Go", "Tailwind CSS", "TypeScript", "Zustand", "Redux"],
  },
  {
    title: "Software Analyst",
    company: "TVS Next",
    location: "Chennai, India",
    period: "Jun 2021 - Jan 2024",
    year: "2021",
    description: "Modernized finance applications from legacy to modern technology using Angular",
    achievements: [
      "Optimized web applications for maximum speed and scalability",
      "Collaborated with UX/UI designers for pixel-perfect implementations",
      "Developed reusable UI components using Angular libraries",
      "Implemented role-based screen mapping and authorization",
      "Worked with Agile methodology for end-to-end deployment",
    ],
    technologies: ["Angular", "TypeScript", "SASS", "Node.js", "Azure Repo", "Git"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Left Side */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-600 via-pink-600 to-purple-600" />

          <div className="space-y-12 pl-8 md:pl-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Year Badge on Timeline */}
                <div className="absolute -left-8 md:-left-20 top-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl border-4 border-background">
                      <span className="text-xl md:text-2xl font-bold text-white">{exp.year}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <Card className="cursor-hover group hover:shadow-2xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-6 md:p-8 relative">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-gradient transition-all">
                          {exp.title}
                        </h2>
                        <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-lg md:text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        <Briefcase className="w-5 h-5" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="space-y-3 mb-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <span>Key Achievements</span>
                      </h3>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-purple-600 mt-1 text-lg">•</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.2 + 0.5 + i * 0.05 }}
                          >
                            <Badge variant="secondary" className="cursor-hover">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
