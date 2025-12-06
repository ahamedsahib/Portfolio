"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and technical expertise
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -20 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon Section */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  {/* Degree */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-gradient transition-all mb-2">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-xl text-muted-foreground font-semibold">
                      Computer Science and Engineering
                    </p>
                  </div>

                  {/* College */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Velammal Engineering College</p>
                      <p className="text-sm">Chennai, Tamil Nadu</p>
                    </div>
                  </motion.div>

                  {/* Graduation Date */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Graduated: June 2021</span>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pt-4 space-y-3"
                  >
                    <p className="font-semibold text-sm text-primary">Key Highlights:</p>
                    <ul className="space-y-2">
                      {[
                        "Strong foundation in Data Structures and Algorithms",
                        "Specialized in Web Technologies and Software Engineering",
                        "Hands-on experience with modern development practices",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Languages:</span> Tamil, English
                {" • "}
                <span className="font-semibold text-foreground">Interests:</span> Cooking, Playing, Travel
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
