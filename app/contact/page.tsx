"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adsahib39@gmail.com",
    href: "mailto:adsahib39@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9080672554",
    href: "tel:+919080672554",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thoothukudi, India",
    href: "#",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss technical challenges, collaboration opportunities, or share
            insights about frontend development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block cursor-hover"
                >
                  <Card className="group hover:shadow-lg hover:border-purple-500/50 transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <info.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold group-hover:text-gradient transition-all">
                          {info.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/ahamedsahib" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ahamed-sahib-ml" },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full bg-muted hover:bg-purple-500/20 transition-colors cursor-hover border border-border hover:border-purple-500/50"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required className="cursor-hover" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="cursor-hover"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="cursor-hover"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cursor-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSubmitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {isSubmitted && (
                    <p className="text-center text-green-600 dark:text-green-400">
                      Thank you! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
