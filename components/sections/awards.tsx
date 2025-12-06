"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const awards = [
  {
    title: "Best Developer of the Year",
    year: "2024",
    organization: "HashMato",
    description: "Earned for exceptional technical contributions and innovation",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Spotlight of Excellence Award",
    year: "2022 - 2023",
    organization: "TVS Next",
    description: "Received for two consecutive years in recognition of outstanding performance, work quality, and timely delivery",
    icon: Star,
    color: "text-purple-500",
  },
  {
    title: "Super Squad Award",
    year: "2023",
    organization: "TVS Next",
    description: "Recognized for outstanding and collaborative teamwork",
    icon: Award,
    color: "text-pink-500",
  },
]

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="awards" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence and dedication to quality work
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 80, scale: 0.7, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <CardContent className="p-8 space-y-4 relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4`}
                  >
                    <award.icon className={`w-8 h-8 ${award.color}`} />
                  </motion.div>

                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {award.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-semibold text-muted-foreground">
                    {award.organization}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-linear-to-br from-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Total Awards</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2024</div>
                  <p className="text-sm text-muted-foreground">Latest Achievement</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Commitment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
