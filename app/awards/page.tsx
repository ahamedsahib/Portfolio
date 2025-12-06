"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const awards = [
  {
    title: "Best Developer of the Year",
    year: "2024",
    organization: "HashMato",
    description: "Earned for exceptional technical contributions and innovation",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Spotlight of Excellence Award",
    year: "2022 - 2023",
    organization: "TVS Next",
    description:
      "Received for two consecutive years in recognition of outstanding performance, work quality, and timely delivery",
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Super Squad Award",
    year: "2023",
    organization: "TVS Next",
    description: "Recognized for outstanding and collaborative teamwork",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Awards & <span className="text-gradient">Recognition</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Recognition for excellence and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-hover"
            >
              <Card className="h-full group hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <CardContent className="p-8 space-y-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center`}
                  >
                    <award.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
                      {award.year}
                    </span>
                    <h2 className="text-2xl font-bold group-hover:text-gradient transition-all mb-2">
                      {award.title}
                    </h2>
                    <p className="text-sm font-semibold text-muted-foreground mb-4">
                      {award.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
