"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const socialLinks = [
  { icon: Github, href: "https://github.com/ahamedsahib", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahamed-sahib-ml", label: "LinkedIn" },
]

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll(".letter")
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 1,
          ease: "back.out(1.7)",
        }
      )
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 bg-gradient-animate" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Custom Cursor Glow */}
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-96 h-96 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Title with GSAP Animation */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <div className="mb-2">
              {"Hi, I'm ".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="text-gradient">
                {"Ahamed Sahib".split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              Software Engineer | Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting dynamic and responsive web applications with Angular, React, TypeScript, and modern web technologies
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { label: "Years Experience", value: "4+" },
              { label: "Awards Won", value: "3" },
              { label: "Technologies Mastered", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#contact">
                Get In Touch
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
