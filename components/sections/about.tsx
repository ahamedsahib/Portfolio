"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and design patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency across all devices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams using Agile methodologies and modern tools.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building exceptional digital experiences
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-4 bg-background rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Frontend Developer with a passion for excellence
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dedicated Frontend Developer with 4 years of hands-on experience in crafting dynamic and responsive web applications.
                  Proficient in Angular, React, SASS, Tailwind, TypeScript, and Node.js, with a passion for creating visually appealing and intuitive user interfaces.
                </p>
                <p>
                  Adept at translating design concepts into functional and high-performance code.
                  Committed to staying current with the latest frontend technologies and best practices.
                </p>
                <p>
                  Excited about contributing technical excellence to drive impactful user experiences in collaborative team environments.
                  Recognized for outstanding performance with multiple awards including Best Developer of the Year (2024).
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Location", value: "Thoothukudi, India" },
                  { label: "Email", value: "adsahib39@gmail.com" },
                  { label: "Experience", value: "4 Years" },
                  { label: "Employment", value: "Currently Employed" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="space-y-1"
                  >
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
