"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = {
  frontend: [
    { name: "Angular", level: 92, icon: "🅰️" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "TypeScript", level: 93, icon: "📘" },
    { name: "JavaScript", level: 95, icon: "💛" },
    { name: "HTML/CSS", level: 98, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "🌊" },
    { name: "SASS", level: 88, icon: "💅" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "🔀" },
    { name: "GitHub", level: 90, icon: "🐙" },
    { name: "Azure Repo", level: 85, icon: "☁️" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Node.js", level: 85, icon: "💚" },
    { name: "Wails (Go)", level: 80, icon: "🦫" },
  ],
  other: [
    { name: "Redux", level: 88, icon: "🔄" },
    { name: "Zustand", level: 85, icon: "🐻" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "Agile/Scrum", level: 88, icon: "📋" },
    { name: "UI/UX Design", level: 85, icon: "🎯" },
  ],
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="frontend" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5, y: 30 }}
                      animate={
                        isInView && activeTab === category
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0, scale: 0.5, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
                        <CardContent className="p-6 space-y-4">
                          {/* Skill Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.span
                                className="text-3xl"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                              >
                                {skill.icon}
                              </motion.span>
                              <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <span className="text-sm font-semibold text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                isInView && activeTab === category
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            />
                            <motion.div
                              animate={{
                                x: ["0%", "100%", "0%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              style={{
                                opacity: activeTab === category && isInView ? 1 : 0,
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-linear-to-br from-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Growth</h3>
              <p className="text-muted-foreground">
                Committed to staying current with the latest frontend technologies and best practices.
                Passionate about learning new frameworks, tools, and techniques to deliver cutting-edge solutions
                and drive impactful user experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
