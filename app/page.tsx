"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-6 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold border border-purple-500/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Hi, I'm{" "}
                <span className="text-gradient block mt-1">Ahamed Sahib</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground">
                Software Engineer | Frontend Developer
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Crafting dynamic and responsive web applications with{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  Angular
                </span>
                ,{" "}
                <span className="text-pink-600 dark:text-pink-400 font-semibold">
                  React
                </span>
                , and modern web technologies
              </p>
              <p className="text-xs md:text-base text-muted-foreground max-w-3xl mx-auto">
                Dedicated to building beautiful, performant user interfaces with clean, maintainable code.
                Currently working at <span className="text-foreground font-semibold">HashMato</span> on innovative projects
                using cutting-edge technologies like <span className="text-purple-600 dark:text-purple-400 font-semibold">Wails (React + Go)</span>,
                <span className="text-pink-600 dark:text-pink-400 font-semibold"> Zustand</span>, and modern state management patterns.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 py-4"
            >
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Awards Won", value: "3" },
                { label: "Technologies", value: "10+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center cursor-hover"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <Link href="/about" className="group relative cursor-hover inline-block">
                <span className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                  see more about me
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-600 to-pink-600 w-0 group-hover:w-full transition-all duration-300" />
              </Link>

              <Link href="/contact" className="group relative cursor-hover inline-block">
                <span className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-pink-600" />
                  say hello
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-pink-600 to-purple-600 w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex justify-center gap-4 pt-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/ahamedsahib",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ahamed-sahib-ml",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:adsahib39@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-muted hover:bg-purple-500/20 transition-colors cursor-hover border border-border hover:border-purple-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-4"
            >
              <p className="text-xs text-muted-foreground">
                Based in <span className="text-foreground font-semibold">Thoothukudi, India</span> •{" "}
                Currently working at{" "}
                <span className="text-foreground font-semibold">HashMato</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
