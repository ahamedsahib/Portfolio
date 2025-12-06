"use client"

import { motion } from "framer-motion"
import { Download, MapPin, Mail, Briefcase, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate frontend developer driving innovation and excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image/Visual */}
            <Card className="overflow-hidden cursor-hover group">
              <CardContent className="p-0 relative">
                <div className="aspect-square bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-9xl"
                  >
                    💻
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <p className="text-2xl font-bold text-gradient">
                    Software Engineer
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="cursor-hover">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>Thoothukudi, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <a
                    href="mailto:adsahib39@gmail.com"
                    className="hover:text-purple-600 transition-colors"
                  >
                    adsahib39@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <span>Software Analyst at HashMato</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span>Best Developer of the Year 2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Download Resume */}
            <motion.a
              href="/Ahamed Sahib_Frontend Engineer (1).pdf"
              download="Ahamed_Sahib_Resume.pdf"
              className="relative block w-full cursor-hover group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative bg-linear-to-r from-purple-600 to-pink-600 p-6 rounded-xl">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative flex items-center justify-center gap-3 text-white">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  <span className="text-xl font-bold">Download Resume</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Frontend Developer with a passion for excellence
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dedicated Frontend Developer with <strong className="text-foreground">4 years</strong> of hands-on experience in crafting dynamic and responsive web applications.
                Proficient in <strong className="text-foreground">Angular, React, SASS, Tailwind, TypeScript,</strong> and <strong className="text-foreground">Node.js</strong>, with a passion for creating visually appealing and intuitive user interfaces.
              </p>

              <p>
                Adept at translating design concepts into functional and high-performance code.
                Committed to staying current with the latest frontend technologies and best practices.
              </p>

              <p>
                Excited about contributing technical excellence to drive impactful user experiences in collaborative team environments.
                Recognized for outstanding performance with multiple awards including <strong className="text-foreground">Best Developer of the Year (2024)</strong>.
              </p>

              <p>
                Currently working at <strong className="text-foreground">HashMato</strong> on innovative projects including:
              </p>

              <ul className="list-none space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Restaurant meal ordering systems with intuitive UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Kiosk applications using Wails (React + Go)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Admin dashboards with role-based access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>State management with Zustand and Redux</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Core Strengths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clean Code",
                description: "Writing maintainable, scalable code following best practices",
                icon: "💎",
              },
              {
                title: "UI/UX Focus",
                description: "Creating beautiful, intuitive interfaces users love",
                icon: "🎨",
              },
              {
                title: "Performance",
                description: "Optimizing applications for speed and efficiency",
                icon: "⚡",
              },
              {
                title: "Collaboration",
                description: "Working effectively in Agile team environments",
                icon: "🤝",
              },
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full cursor-hover group hover:border-purple-500/50 transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      className="text-6xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {strength.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-gradient transition-all">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
