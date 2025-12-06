"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillsData = {
  "Frontend Frameworks": [
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
  ],
  "Languages": [
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "JavaScript", icon: "💛", color: "from-yellow-400 to-yellow-500" },
    { name: "HTML/CSS", icon: "🎨", color: "from-orange-500 to-pink-500" },
    { name: "Go", icon: "🦫", color: "from-cyan-500 to-blue-600" },
  ],
  "Styling": [
    { name: "Tailwind CSS", icon: "🌊", color: "from-cyan-400 to-blue-500" },
    { name: "SASS", icon: "💅", color: "from-pink-500 to-purple-500" },
  ],
  "State Management": [
    { name: "Redux", icon: "🔄", color: "from-purple-600 to-purple-700" },
    { name: "Zustand", icon: "🐻", color: "from-amber-600 to-orange-600" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "🔀", color: "from-orange-600 to-red-600" },
    { name: "GitHub", icon: "🐙", color: "from-gray-700 to-gray-900" },
    { name: "Azure Repo", icon: "☁️", color: "from-blue-500 to-blue-600" },
    { name: "VS Code", icon: "💻", color: "from-blue-600 to-blue-700" },
    { name: "Node.js", icon: "💚", color: "from-green-600 to-green-700" },
    { name: "Wails", icon: "🦫", color: "from-purple-600 to-pink-600" },
  ],
  "Other Skills": [
    { name: "REST APIs", icon: "🔌", color: "from-green-500 to-emerald-600" },
    { name: "Agile/Scrum", icon: "📋", color: "from-indigo-500 to-purple-600" },
    { name: "UI/UX Design", icon: "🎯", color: "from-pink-500 to-rose-600" },
  ],
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="cursor-hover"
                  >
                    <Card className="h-full group hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative">
                      {/* Gradient background on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 relative z-10">
                        <motion.div
                          className="text-6xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h3 className="text-lg font-semibold group-hover:text-gradient transition-all">
                          {skill.name}
                        </h3>
                      </CardContent>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Continuous Growth</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Committed to staying current with the latest frontend technologies
                and best practices. Passionate about learning new frameworks, tools,
                and techniques to deliver cutting-edge solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
