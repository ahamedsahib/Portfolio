"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Analyst",
    company: "HashMato - Chennai, India",
    period: "Feb 2024 - Present",
    description: "Working on restaurant meal ordering systems, kiosk applications, and online ordering platforms, delivering responsive and accessible user interfaces.",
    achievements: [
      "Designed and developed intuitive user interfaces for restaurant meal ordering systems, significantly enhancing customer engagement and user satisfaction",
      "Led the frontend development of online ordering platforms, delivering responsive and accessible user interfaces tailored to diverse customer needs",
      "Working on Kiosk project using Wails framework, combining React frontend with Go backend for high-performance desktop applications",
      "Implemented secure payment integration and enhanced checkout features, ensuring seamless transaction flow and improved user experience",
      "Developed an admin dashboard for order and user data management with role-based screen access, streamlining operations and reducing complexity for administrative users",
      "Utilized Tailwind CSS to craft responsive web and mobile applications with consistent visual styling across devices",
      "Leveraged Zustand for lightweight and efficient state management in React applications, improving performance and code maintainability",
      "Integrated third-party libraries for form handling and utilized Redux for complex state management scenarios",
    ],
    technologies: ["React", "Wails", "Go", "Tailwind CSS", "TypeScript", "Zustand", "Redux", "Node.js"],
  },
  {
    title: "Software Analyst",
    company: "TVS Next - Chennai, India",
    period: "Jun 2021 - Jan 2024",
    description: "Worked on Finance based project, Modernizing the application from legacy into Modern technology using Angular.",
    achievements: [
      "Enhanced user experience by optimizing web applications for maximum speed and scalability",
      "Worked closely with UX/UI designers to translate their designs into functional web applications",
      "Enhanced application performance by optimizing Angular components and implementing efficient coding practices",
      "Developed reusable UI components using Angular libraries, promoting code consistency across projects while reducing development time significantly",
      "Implemented Role-based screen mapping and ensured only authorized navigations were possible",
      "Worked in requirement gathering, analysis, development, unit testing, and end-to-end deployment using Agile methodology",
      "Collaborated with cross-functional teams to develop high-quality software products within tight deadlines",
    ],
    technologies: ["Angular", "TypeScript", "SASS", "Node.js", "Azure Repo", "Git"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                    className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all">
                            {exp.title}
                          </h3>
                          <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Achievements:</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 + i * 0.1 }}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.2, delay: index * 0.2 + 0.4 + i * 0.05 }}
                          >
                            <Badge variant="secondary">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className={index % 2 === 0 ? "" : "md:col-start-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
